const CACHE_NAME = "masbahati-v4";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./logo.png",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png"
];


/* ==============================
   INSTALL
============================== */

self.addEventListener("install", event => {

  event.waitUntil(

    caches
      .open(CACHE_NAME)

      .then(cache => {

        return cache.addAll(
          FILES_TO_CACHE
        );

      })

  );

  self.skipWaiting();

});


/* ==============================
   ACTIVATE
============================== */

self.addEventListener("activate", event => {

  event.waitUntil(

    caches
      .keys()

      .then(cacheNames => {

        return Promise.all(

          cacheNames.map(cacheName => {

            if (
              cacheName !== CACHE_NAME
            ) {

              return caches.delete(
                cacheName
              );

            }

          })

        );

      })

  );

  self.clients.claim();

});


/* ==============================
   FETCH
============================== */

self.addEventListener("fetch", event => {

  if (
    event.request.method !== "GET"
  ) {

    return;

  }


  event.respondWith(

    fetch(event.request)

      .then(networkResponse => {

        const clonedResponse =
          networkResponse.clone();


        caches
          .open(CACHE_NAME)

          .then(cache => {

            cache.put(
              event.request,
              clonedResponse
            );

          });


        return networkResponse;

      })


      .catch(() => {

        return caches
          .match(event.request)

          .then(cachedResponse => {

            if (
              cachedResponse
            ) {

              return cachedResponse;

            }


            if (
              event.request.mode ===
              "navigate"
            ) {

              return caches.match(
                "./index.html"
              );

            }

          });

      })

  );

});
