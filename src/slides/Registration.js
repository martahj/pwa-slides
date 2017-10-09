import React from 'react';

const Registration = () => (
  <div>{`
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw-test/sw.js', {scope: '/sw-test/'})
      .then(function(reg) {
        // registration worked
        console.log('Registration succeeded. Scope is ' + reg.scope);
      }).catch(function(error) {
        // registration failed
        console.log('Registration failed with ' + error);
      });
    }

    The outer block performs a feature detection test to make sure service workers are supported before trying to register one.
    The scope parameter is optional, and can be used to specify the subset of your content that you want the service worker to control. In this case, we have specified '/sw-test/', which means all content under the app's origin. If you leave it out, it will default to this value anyway, but we specified it here for illustration purposes.
    - Each time a page within your scope is loaded, the service worker is installed against that page and operates on it.
    - So sws are shared across pages
    - The service worker will only catch requests from clients under the service worker's scope.
    - path to sw should be written relative to the origin
      - eg is website is https://my-name and sw is at https://my-name/sw.js, then ./sw.js
      - eg if website is : https://mdn.github.io/my-app, and sw is at https://mdn.github.io/my-app/sw.js, then /my-app/sw.js
    `}</div>
);

export default Registration;
