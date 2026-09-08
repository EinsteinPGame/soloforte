// Adds a floating "Home" back button to pages that don't already have one.
// On the website, homepage links open in new tabs, so this is mainly for app/PWA users.
//
// 2026-09-07: it used to inject on all 22 pages while skipping a hardcoded list of
// three. Eight pages already had their own link back to index.html and got a second,
// floating one stacked in the same corner — which is the overlap Kyle reported. The
// skip list was written when far fewer pages had their own navigation and never kept
// up. It is now a check against the page itself rather than a list to maintain.
(function(){
  var path = location.pathname;
  if(path === '/' || path === '/index.html' || path === '/admin.html') return;
  // Full-screen canvas game with its own back navigation and no index anchor to detect.
  if(path.indexOf('dnd-crawler') !== -1) return;

  function alreadyHasHomeLink(){
    var links = document.querySelectorAll('a[href]');
    for(var i = 0; i < links.length; i++){
      var href = links[i].getAttribute('href') || '';
      // match index.html / ./index.html / /index.html, with or without #hash or ?query
      if(/(^|\/)index\.html(\?|#|$)/i.test(href) || href === '/' ) return true;
    }
    return false;
  }

  function add(){
    if(!document.body) return;                 // nothing to attach to
    if(alreadyHasHomeLink()) return;           // page provides its own way home
    if(document.getElementById('sf-home-btn')) return;  // never inject twice
    var btn = document.createElement('a');
    btn.id = 'sf-home-btn';
    btn.href = 'index.html';
    btn.textContent = '← Home';
    btn.style.cssText = 'position:fixed;top:8px;left:8px;color:#7b68ee;text-decoration:none;font:bold 13px system-ui,sans-serif;z-index:99999;background:rgba(10,10,26,0.85);padding:5px 12px;border-radius:8px;border:1px solid #333;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);';
    btn.onmouseenter = function(){ btn.style.color='#fff'; btn.style.borderColor='#7b68ee'; };
    btn.onmouseleave = function(){ btn.style.color='#7b68ee'; btn.style.borderColor='#333'; };
    document.body.appendChild(btn);
  }

  // The script is included at different points on different pages, so wait for the
  // DOM when it is still parsing — otherwise the anchor check would run too early
  // and see nothing.
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', add);
  } else {
    add();
  }
})();
