import React from 'react';

const Sync = () => (
  <div>
  Sync
  {`
    // Register your service worker:
navigator.serviceWorker.register('/sw.js');

// Then later, request a one-off sync:
navigator.serviceWorker.ready.then(function(swRegistration) {
  return swRegistration.sync.register('myFirstSync');
});

self.addEventListener('sync', function(event) {
  if (event.tag == 'myFirstSync') {
    event.waitUntil(doSomeStuff());
  }
});

- schedule event for when the user has connectiviy, which could be now or later
- protects you against navigations and tab closures during data send
- doSomeStuff should return a promise
- if promise resolves, yay
- if it fails, another sync will be scheduled
- works when the page isn't open
- sync names should be unique
  `}
  </div>
);

export default Sync;
