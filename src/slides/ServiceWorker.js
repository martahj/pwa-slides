import React from 'react';
import SlideWrapper from '../containers/SlideWrapper';
import SlideHeader from '../components/SlideHeader';
import SlideBody from '../components/SlideBody';

const ServiceWorker = () => (
  <SlideWrapper>
    <SlideHeader>What Is A Service Worker?</SlideHeader>
    <SlideBody>
      {`  - web worker
        - script run by a browser in the background
        - separate from your web page code
        - can't access the DOM
        - Your service worker functions like a proxy server, allowing you to modify requests and responses, replace them with items from its own cache, and more.
        `
      }
    </SlideBody>
  </SlideWrapper>
);

export default ServiceWorker;
