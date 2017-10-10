import React from 'react';
import SlideWrapper from '../containers/SlideWrapper';
import SlideHeader from '../components/SlideHeader';
import SlideBody from '../components/SlideBody';
import List from '../components/List';

const bullets = [
  `Require https`,
  `Will not reboot as expected on reload (use 'Update on Reload')`,
  `Do not rename service worker file`,
];

const Gotchas = () => (
  <SlideWrapper>
    <SlideHeader>
      Gotchas
    </SlideHeader>
    <SlideBody>
      <List
        items={bullets}
      />
    </SlideBody>
  </SlideWrapper>
);

export default Gotchas;
