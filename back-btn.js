// Adds a floating "Home" back button to all pages (for PWA/app users)
// On website, homepage links open in new tabs so this is mainly for app navigation
(function(){
  // Don't show on index.html or admin.html
  var path = location.pathname;
  if(path === '/' || path === '/index.html' || path === '/admin.html') return;
  var btn = document.createElement('a');
  btn.href = 'index.html';
  btn.textContent = '\u2190 Home';
  btn.style.cssText = 'position:fixed;top:8px;left:8px;color:#7b68ee;text-decoration:none;font:bold 13px system-ui,sans-serif;z-index:99999;background:rgba(10,10,26,0.85);padding:5px 12px;border-radius:8px;border:1px solid #333;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);';
  btn.onmouseenter = function(){ btn.style.color='#fff'; btn.style.borderColor='#7b68ee'; };
  btn.onmouseleave = function(){ btn.style.color='#7b68ee'; btn.style.borderColor='#333'; };
  document.body.appendChild(btn);
})();
