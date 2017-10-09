import React from 'react';

const Fetch = () => (
  <div>
  Fetch
  {`
    this.addEventListener('fetch', function(event) {
      event.respondWith(
        caches.match(event.request).then(function(resp) {
          return resp || fetch(event.request).then(function(response) {
            caches.open('v1').then(function(cache) {
              cache.put(event.request, response.clone());
            });
            return response;
          });
        }).catch(function() {
          return caches.match('/sw-test/gallery/myLittleVader.jpg');
        })
      );
    });

    - Responses can only be read once, so must be cloned in order to return the request to the browser + put it in the cache

  `}
  </div>
);

export default Fetch;
