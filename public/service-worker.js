const CACHE_NAME = 'my-pwa-cache-v1';
const OFFLINE_URL = '/offline.html';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(['/', OFFLINE_URL]);
    }),
  );
  console.log('✅ 서비스워커 설치 완료');
});

self.addEventListener('fetch', (event) => {
  // navigation 요청에만 offline 대응
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(OFFLINE_URL);
      }),
    );
  }
});

self.addEventListener('push', function (event) {
  const data = event.data?.json() || {};
  const title = data.title || '알림!';
  const options = {
    body: data.body || '알림 내용입니다.',
    icon: '/icon-192x192.png',
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
