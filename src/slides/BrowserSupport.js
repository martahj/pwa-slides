import React from 'react';
import SlideWrapper from '../containers/SlideWrapper';
import SlideHeader from '../components/SlideHeader';
import SlideBody from '../components/SlideBody';

const onlyUrlStyle = {
  width: '100%',
  textAlign: 'center',
  fontSize: 36,
}

const URL = 'https://jakearchibald.github.io/isserviceworkerready/index.html';
const BrowserSupport = () => (
  <SlideWrapper>
    <SlideHeader>Browser Support</SlideHeader>
    <SlideBody>
      <div style={onlyUrlStyle}>
        <a href={URL} target="_blank">{URL}</a>
      </div>
    </SlideBody>
  </SlideWrapper>
);

export default BrowserSupport;
