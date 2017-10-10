import React from 'react';
import SlideWrapper from '../containers/SlideWrapper';
import SlideHeader from '../components/SlideHeader';
import SlideBody from '../components/SlideBody';
import List from '../components/List';

const resources = [
  'https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers',
  'https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/',
  'https://developers.google.com/web/updates/2015/12/background-sync'
]
const Resources = () => (
  <SlideWrapper>
    <SlideHeader>Resources</SlideHeader>
    <SlideBody>
      <List
        items={resources}
      />
    </SlideBody>
  </SlideWrapper>
);

export default Resources;
