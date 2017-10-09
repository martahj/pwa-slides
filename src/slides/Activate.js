import React from 'react';

const Activate = () => (
  <div>
  Activate
  {`
    Activate
    this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v2').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',

        …

        // include other new resources for the new version...
      ]);
    })
  );
});

this.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});
   - happens after a successful install
    - If you update your sw, the new one will be installed, and will activate
    when there are no longer any pages loaded using the old sw
    - Update cache number
    - Do stuff that would have broken the previous one
    - delete old caches; browser has a limit of the amount of data any particular sw can store, and may delete the cache for a particular origin
  `}
  </div>
);

export default Activate;
