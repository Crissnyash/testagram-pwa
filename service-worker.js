self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("testagram-cache").then(cache => {
      return cache.addAll([
        "https://testagramreelsapk.blogspot.com/"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
