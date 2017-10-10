import React from 'react';
import SlideWrapper from '../containers/SlideWrapper';
import SlideHeader from '../components/SlideHeader';
import SlideBody from '../components/SlideBody';
import CodeBlock from '../components/CodeBlock';
import List from '../components/List';

const code = `
this.addEventListener('install', function(event) {
event.waitUntil(
caches.open('v1').then(function(cache) {
  return cache.addAll([
    '/sw-test/',
    '/sw-test/index.html',
    '/sw-test/style.css',
    '/sw-test/app.js',
    '/sw-test/image-list.js',
    '/sw-test/main-logo.jpg',
  ]);
})
);
});
`;

const bullets = [
  `Ususally used to populate browser's cache with assets for offline`,
  `event.waitUntil means install will not finish until everything inside it finishes running`,
  `caches.open('v1') will creating a new cache, v1, if it does not exist, and open it`,
  `cache.addAll caches the specified files`,
  `If any of the specified files are not cached successfully, the entire install will fail`,
];

const Install = () => (
  <SlideWrapper>
    <SlideHeader>
      Install Event
    </SlideHeader>
    <SlideBody>
      <CodeBlock>
        {code}
      </CodeBlock>
      <List
        useBullets
        items={bullets}
      />
    </SlideBody>
  </SlideWrapper>
);
export default Install;
