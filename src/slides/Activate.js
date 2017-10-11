// @flow
import React from 'react';
import SlideWrapper from '../containers/SlideWrapper';
import SlideHeader from '../components/SlideHeader';
import SlideBody from '../components/SlideBody';
import CodeBlock from '../components/CodeBlock';
import List from '../components/List';

const installCode = `
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
`;

const activateCode = `
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
`

const bullets = [
  'Happens after a successful install',
  `Updated service workers will install but will not activate until there
    are no more pages loaded using the old service worker`,
  `Browser will detect that service worker has been updated`,
  `When the service worker updates, it is free to take actions that would have
    broken the previous one, such as deleting old caches`,
  `An updated service worker may update cache number to show that it is using
    the new cache`,
  `Browsers have a limit of the amount of data any particular service worker can
    store, and may delete the cache for a particular origin, particularly if it
    gets too large`
];

const Activate = () => (
  <SlideWrapper>
    <SlideHeader>
      Activate Event
    </SlideHeader>
    <SlideBody>
      <div style={{ display: 'flex' }}>
        <CodeBlock>
          {installCode}
        </CodeBlock>
        <CodeBlock>
          {activateCode}
        </CodeBlock>
      </div>
      <List
        items={bullets}
        useBullets
      />
    </SlideBody>
  </SlideWrapper>
);

export default Activate;
