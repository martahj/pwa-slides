import React from 'react';
import SlideWrapper from '../containers/SlideWrapper';
import SlideHeader from '../components/SlideHeader';
import SlideBody from '../components/SlideBody';
import CodeBlock from '../components/CodeBlock';
import List from '../components/List';

const code = `
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
`

const bullets = [
  `Schedule event for when the user has connectiviy, which could be now or later`,
  `Works when the page isn't open; protects you against navigations and tab
    closures during data send`,
  `doSomeStuff should return a promise`,
  `Sync names should be unique`,
  `If it fails, another sync will be scheduled`
];
const Sync = () => (
  <SlideWrapper>
    <SlideHeader>Sync Event</SlideHeader>
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

export default Sync;
