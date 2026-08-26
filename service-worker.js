const CACHE_NAME = "masbahaty-v6";

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


/* =========================================================
   INSTALL
========================================================= */

self.addEventListener(
  "install",
  function (event) {

    event.waitUntil(

      caches
        .open(CACHE_NAME)

        .then(
          function (cache) {

            return cache.addAll(
              FILES_TO_CACHE
            );

          }
        )

    );


    self.skipWaiting();

  }
);


/* =========================================================
   ACTIVATE
========================================================= */

self.addEventListener(
  "activate",
  function (event) {

    event.waitUntil(

      caches
        .keys()

        .then(
          function (cacheNames) {

            return Promise.all(

              cacheNames.map(
                function (cacheName) {

                  if (
                    cacheName !==
                    CACHE_NAME
                  ) {

                    return caches.delete(
                      cacheName
                    );

                  }

                }
              )

            );

          }
        )

    );


    self.clients.claim();

  }
);


/* =========================================================
   FETCH
========================================================= */

self.addEventListener(
  "fetch",
  function (event) {

    if (
      event.request.method !==
      "GET"
    ) {

      return;

    }


    event.respondWith(

      fetch(
        event.request
      )

        .then(
          function (networkResponse) {

            const responseClone =
              networkResponse.clone();


            caches
              .open(CACHE_NAME)

              .then(
                function (cache) {

                  cache.put(
                    event.request,
                    responseClone
                  );

                }
              );


            return networkResponse;

          }
        )


        .catch(
          function () {

            return caches
              .match(
                event.request
              )

              .then(
                function (cachedResponse) {

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

                }
              );

          }
        )

    );

  }
);
