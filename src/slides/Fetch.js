import React from 'react';
import SlideWrapper from '../containers/SlideWrapper';
import SlideHeader from '../components/SlideHeader';
import SlideBody from '../components/SlideBody';
import CodeBlock from '../components/CodeBlock';
import List from '../components/List';

const code = `
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
      return caches.match('/sw-test/error-request.jpg');
    })
  );
});
`

const bullets = [
  `Have total control over the request - can use a cache-first or network-first
    strategy`,
  `Can provide a fallback page or image`,
  `Responses can only be read once, so must be cloned in order to return the
    request to the browser and put it in the cache`,
];

const Fetch = () => (
  <SlideWrapper>
    <SlideHeader>
      Fetch Event
    </SlideHeader>
    <SlideBody>
      <CodeBlock>
        {code}
      </CodeBlock>
      <List
        items={bullets}
        useBullets
      />
    </SlideBody>
  </SlideWrapper>
);

export default Fetch;
