self.addEventListener('install', (event) => {
  console.log('서비스 워커가 설치됨!');
  event.waitUntil(
    caches.open('my-pwa-cache').then((cache) => {
      return cache.addAll(['/', '/offline.html']);
    }),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request).catch(() => caches.match('/offline.html')));
});
