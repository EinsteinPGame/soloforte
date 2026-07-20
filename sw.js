// SoloForte Service Worker — offline support
const CACHE_NAME = 'soloforte-v9.0.1';
const PAGES = [
  '/',
  '/index.html',
  '/ball-battle-arena.html',
  '/emblem-fury.html',
  '/rps-legends.html',
  '/rage-platformer.html',
  '/riftborn-arena.html',
  '/timestrike.html',
  '/piano-sheets.html',
  '/learn-guitar.html',
  '/learn-to-code.html',
  '/sg-boba-map.html',
  '/sg-food-guide.html',
  '/sg-mrt-arrivals.html',
  '/unit-converter.html',
  '/randomizer-wheel.html',
  '/gat-practice.html',
  '/chat.html',
  '/admin.html',
];

// Install — cache all pages
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PAGES))
      .then(() => self.skipWaiting())
  );
});

// Activate — clear old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch — network first, fall back to cache
self.addEventListener('fetch', e => {
  // Only handle same-origin navigations and page requests
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    fetch(e.request).then(resp => {
      // Update cache with fresh copy
      if (resp.ok) {
        const clone = resp.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
      }
      return resp;
    }).catch(() => {
      // Offline — serve from cache
      return caches.match(e.request).then(cached => {
        if (cached) return cached;
        // For navigation requests, try index
        if (e.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
        return new Response('Offline', { status: 503 });
      });
    })
  );
});
