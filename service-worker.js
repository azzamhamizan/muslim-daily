/**
 * Muslim Daily — Service Worker
 * PWA offline caching
 */
const CACHE_NAME = 'muslim-daily-v4';
const STATIC_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './css/shared.css',
  './js/shared.js',
  './quran.html',
  './sholat.html',
  './tasbih.html',
  './dzikir.html',
  './doa.html',
  './kiblat.html',
  './asmaul.html',
  './hadis.html',
  './kalender.html'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(STATIC_ASSETS)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).catch(() => cached))
  );
});
