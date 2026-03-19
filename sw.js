/* ===================================================================
   Praias de Portugal — Service Worker
   =================================================================== */

const CACHE_NAME   = 'praias-pt-v25';
const STATIC_CACHE = 'praias-static-v25';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
];

/* ── Install: pre-cache static assets ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(STATIC_ASSETS.filter(u => !u.startsWith('http') || u.includes('unpkg') || u.includes('fonts'))))
      .then(() => self.skipWaiting())
  );
});

/* ── Activate: clean old caches ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME && k !== STATIC_CACHE)
            .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

/* ── Fetch: strategy by request type ── */
self.addEventListener('fetch', event => {
  // Ignore non-http(s) requests (e.g. chrome-extension://, data:, blob:)
  if (!event.request.url.startsWith('http')) return;

  const url = new URL(event.request.url);

  // API calls → network-first, fall back to "offline" response
  if (url.hostname.includes('open-meteo.com') || url.hostname.includes('marine-api')) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  // OpenStreetMap tiles → cache-first (tiles rarely change)
  if (url.hostname.includes('openstreetmap.org') || url.hostname.includes('tile.')) {
    event.respondWith(cacheFirst(event.request, 'tiles-cache'));
    return;
  }

  // Everything else → cache-first with network fallback
  event.respondWith(cacheFirst(event.request, STATIC_CACHE));
});

/* ── Strategies ── */
async function cacheFirst(request, cacheName) {
  // Safety: never cache non-http requests
  if (!request.url.startsWith('http')) return fetch(request);

  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}

async function networkFirst(request) {
  // Safety: never cache non-http requests
  if (!request.url.startsWith('http')) return fetch(request);

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    return new Response(JSON.stringify({ error: 'offline' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
