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

self.addEventListener('push', function (event) {
  const data = event.data?.json() || {};
  const title = data.title || '알림!';
  const options = {
    body: data.body || '알림 내용입니다.',
    icon: '/icons/icon-192x192.png',
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
