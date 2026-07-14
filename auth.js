/*  SoloForte Auth — invite-code + whitelist gate
 *  Include this script at the TOP of every page's <body>.
 *  It hides all page content until the user is authenticated.
 *
 *  Admin access: code "JK2E3" + username "JK2E3" (case-insensitive)
 *  Normal access: any valid code + assigned username
 */

(function () {
  'use strict';

  // ─── Approved Users Database ───
  // Each entry: { code, username, role }
  // code is one-time registration key; username is the permanent login name
  const APPROVED = [
    { code: 'JK2E3', username: 'JK2E3', role: 'admin' },
    // Add more users here:
    // { code: 'SOLO-XXXX', username: 'FriendName', role: 'user' },
  ];

  // Admin master password for admin panel page
  const ADMIN_PANEL_PASS = 'JK2E3';

  // ─── Storage Keys ───
  const SK_USER = 'sf_auth_user';
  const SK_ROLE = 'sf_auth_role';
  const SK_REG  = 'sf_auth_registered'; // "1" if code was used
  const SK_LOG  = 'sf_activity_log';
  const SK_LOGIN_LOG = 'sf_login_attempts';

  // ─── Helpers ───
  function ci(s) { return (s || '').trim().toLowerCase(); }
  function now() { return new Date().toISOString(); }

  function getUser() { return localStorage.getItem(SK_USER); }
  function getRole() { return localStorage.getItem(SK_ROLE) || 'user'; }
  function isLoggedIn() { return !!getUser(); }
  function isAdmin() { return getRole() === 'admin'; }

  function logAttempt(code, username, success, reason) {
    try {
      var logs = JSON.parse(localStorage.getItem(SK_LOGIN_LOG) || '[]');
      logs.push({
        ts: now(),
        code: code || '',
        username: username || '',
        success: success,
        reason: reason || '',
        page: location.pathname,
        ua: navigator.userAgent
      });
      // Keep last 500 entries
      if (logs.length > 500) logs = logs.slice(-500);
      localStorage.setItem(SK_LOGIN_LOG, JSON.stringify(logs));
    } catch (e) {}
  }

  function logActivity(action, detail) {
    try {
      var user = getUser() || 'anonymous';
      // Per-account activity log
      var userLogKey = SK_LOG + '_' + user.toLowerCase();
      var userLogs = JSON.parse(localStorage.getItem(userLogKey) || '[]');
      userLogs.push({
        ts: now(),
        user: user,
        page: location.pathname,
        action: action,
        detail: detail || ''
      });
      if (userLogs.length > 2000) userLogs = userLogs.slice(-2000);
      localStorage.setItem(userLogKey, JSON.stringify(userLogs));
      // Also write to master log for admin dashboard
      var logs = JSON.parse(localStorage.getItem(SK_LOG) || '[]');
      logs.push({
        ts: now(),
        user: user,
        page: location.pathname,
        action: action,
        detail: detail || ''
      });
      if (logs.length > 2000) logs = logs.slice(-2000);
      localStorage.setItem(SK_LOG, JSON.stringify(logs));
    } catch (e) {}
  }

  // ─── Auth Check ───

  if (isLoggedIn()) {
    // User is authenticated — track page visit and let through
    logActivity('page_view');
    // Track clicks
    document.addEventListener('click', function (e) {
      var t = e.target;
      var desc = t.tagName;
      if (t.id) desc += '#' + t.id;
      if (t.className && typeof t.className === 'string') desc += '.' + t.className.split(' ')[0];
      if (t.textContent) desc += ' "' + t.textContent.substring(0, 40) + '"';
      if (t.href) desc += ' → ' + t.href;
      logActivity('click', desc);
    });

    // Expose auth info globally for pages that need it
    window.sfAuth = { user: getUser(), role: getRole(), isAdmin: isAdmin, logActivity: logActivity };
    return;
  }

  // ─── Not logged in — show gate ───
  // Hide everything
  document.documentElement.style.visibility = 'hidden';

  document.addEventListener('DOMContentLoaded', function () {
    // Hide body content
    var bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.tagName !== 'SCRIPT') el.style.display = 'none';
    });
    document.documentElement.style.visibility = 'visible';

    // Create login overlay
    var overlay = document.createElement('div');
    overlay.id = 'sf-auth-gate';
    overlay.innerHTML = [
      '<style>',
      '#sf-auth-gate{position:fixed;top:0;left:0;width:100%;height:100%;background:#0a0a1a;z-index:99999;display:flex;align-items:center;justify-content:center;font-family:"Segoe UI",system-ui,sans-serif}',
      '#sf-auth-box{background:#12122a;border:1px solid #2a2a4a;border-radius:16px;padding:40px;max-width:380px;width:90%;text-align:center}',
      '#sf-auth-box h2{color:#e0e0e0;font-size:1.6rem;margin-bottom:6px}',
      '#sf-auth-box .sub{color:#7b68ee;font-size:0.95rem;margin-bottom:24px}',
      '#sf-auth-box input{display:block;width:100%;padding:12px 16px;margin-bottom:12px;background:#1a1a3e;border:1px solid #2a2a4a;border-radius:8px;color:#e0e0e0;font-size:1rem;outline:none}',
      '#sf-auth-box input:focus{border-color:#7b68ee}',
      '#sf-auth-box input::placeholder{color:#555}',
      '#sf-auth-box button{width:100%;padding:12px;background:linear-gradient(90deg,#7b68ee,#00d4ff);color:#fff;font-size:1rem;font-weight:600;border:none;border-radius:8px;cursor:pointer;margin-top:4px;transition:transform 0.2s}',
      '#sf-auth-box button:hover{transform:translateY(-2px)}',
      '#sf-auth-box .err{color:#ff4757;font-size:0.85rem;margin-top:10px;min-height:20px}',
      '#sf-auth-box .mode-toggle{color:#7b68ee;font-size:0.85rem;margin-top:16px;cursor:pointer;text-decoration:underline}',
      '</style>',
      '<div id="sf-auth-box">',
      '  <h2>SoloForte</h2>',
      '  <div class="sub">This site is invite-only</div>',
      '  <div id="sf-login-form">',
      '    <input type="text" id="sf-username" placeholder="Username" autocomplete="off" />',
      '    <button id="sf-login-btn">Log In</button>',
      '    <div class="mode-toggle" id="sf-show-register">First time? Register with invite code</div>',
      '  </div>',
      '  <div id="sf-register-form" style="display:none">',
      '    <input type="text" id="sf-reg-code" placeholder="Invite Code" autocomplete="off" />',
      '    <input type="text" id="sf-reg-username" placeholder="Username" autocomplete="off" />',
      '    <button id="sf-register-btn">Register</button>',
      '    <div class="mode-toggle" id="sf-show-login">Already registered? Log in</div>',
      '  </div>',
      '  <div class="err" id="sf-err"></div>',
      '</div>'
    ].join('\n');
    document.body.appendChild(overlay);

    var errEl = document.getElementById('sf-err');
    var loginForm = document.getElementById('sf-login-form');
    var regForm = document.getElementById('sf-register-form');

    document.getElementById('sf-show-register').onclick = function () {
      loginForm.style.display = 'none';
      regForm.style.display = 'block';
      errEl.textContent = '';
    };
    document.getElementById('sf-show-login').onclick = function () {
      regForm.style.display = 'none';
      loginForm.style.display = 'block';
      errEl.textContent = '';
    };

    // ─── Login (returning user) ───
    document.getElementById('sf-login-btn').onclick = function () {
      var username = document.getElementById('sf-username').value.trim();
      if (!username) { errEl.textContent = 'Enter your username'; return; }

      // Check if this username is in the approved list
      var match = APPROVED.find(function (u) { return ci(u.username) === ci(username); });
      if (!match) {
        logAttempt('', username, false, 'unknown username');
        errEl.textContent = 'Username not recognized';
        return;
      }

      // Check if they previously registered (code was used)
      var regKey = 'sf_reg_' + ci(username);
      if (!localStorage.getItem(regKey)) {
        logAttempt('', username, false, 'not registered yet');
        errEl.textContent = 'You need to register first with your invite code';
        return;
      }

      // Success — log in
      localStorage.setItem(SK_USER, match.username);
      localStorage.setItem(SK_ROLE, match.role || 'user');
      logAttempt('', username, true, 'login');
      logActivity('login');
      location.reload();
    };

    // ─── Register (first time) ───
    document.getElementById('sf-register-btn').onclick = function () {
      var code = document.getElementById('sf-reg-code').value.trim();
      var username = document.getElementById('sf-reg-username').value.trim();

      if (!code || !username) { errEl.textContent = 'Enter both invite code and username'; return; }

      // Find matching entry: code AND username must match
      var match = APPROVED.find(function (u) {
        return ci(u.code) === ci(code) && ci(u.username) === ci(username);
      });

      if (!match) {
        logAttempt(code, username, false, 'invalid code+username combo');
        errEl.textContent = 'Invalid invite code or username';
        return;
      }

      // Mark as registered (burn the code)
      var regKey = 'sf_reg_' + ci(match.username);
      localStorage.setItem(regKey, now());
      localStorage.setItem(SK_USER, match.username);
      localStorage.setItem(SK_ROLE, match.role || 'user');
      logAttempt(code, username, true, 'registered');
      logActivity('register');
      location.reload();
    };

    // Enter key support
    document.getElementById('sf-username').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') document.getElementById('sf-login-btn').click();
    });
    document.getElementById('sf-reg-username').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') document.getElementById('sf-register-btn').click();
    });
    document.getElementById('sf-reg-code').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') document.getElementById('sf-reg-username').focus();
    });
  });
})();
