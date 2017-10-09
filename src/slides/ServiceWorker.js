import React from 'react';

const ServiceWorker = () => (
  <div>
   {'What is a service worker?'}
   {`  - web worker
     - script run by a browser in the background
     - separate from your web page code
     - can't access the DOM
     - Your service worker functions like a proxy server, allowing you to modify requests and responses, replace them with items from its own cache, and more.
     
     `
   }
  </div>
);

export default ServiceWorker;
