import React from 'react';
import SlideWrapper from '../containers/SlideWrapper';
import SlideHeader from '../components/SlideHeader';
import SlideBody from '../components/SlideBody';
import List from '../components/List';

const bullets = [
  `Require https`,
  `Will not reboot as expected on reload (use 'Update on Reload')`,
  `Scope!`,
  `Never rename service worker file - cached html files will refer to old service worker`,
  `Set cache headers to a short (or 0) max age`,
  `Want to choose an idle time for the service worker to register`,
  `Not a reliable way to manage global state`,
  `Specification is still experimental - guard against missing apis`,
  `You should still test :)`,
];

const Gotchas = () => (
  <SlideWrapper>
    <SlideHeader>
      Gotchas
    </SlideHeader>
    <SlideBody>
      <List
        useBullets
        items={bullets}
      />
    </SlideBody>
  </SlideWrapper>
);

export default Gotchas;
