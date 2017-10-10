import React from 'react';
import SlideWrapper from '../containers/SlideWrapper';
import SlideHeader from '../components/SlideHeader';
import SlideBody from '../components/SlideBody';

const BrowserSupport = () => (
  <SlideWrapper>
    <SlideHeader>Browser Support</SlideHeader>
    <SlideBody>
      https://jakearchibald.github.io/isserviceworkerready/index.html
    </SlideBody>
  </SlideWrapper>
);

export default BrowserSupport;
