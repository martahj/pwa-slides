import React from 'react';
import SlideWrapper from '../containers/SlideWrapper';
import SlideHeader from '../components/SlideHeader';
import SlideBody from '../components/SlideBody';
import List from '../components/List';

const resources = [
  'https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers',
  'https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/',
  'https://developers.google.com/web/updates/2015/12/background-sync',
  'https://www.youtube.com/watch?v=cmGr0RszHc8',
  'https://www.youtube.com/watch?v=e0FjFoyKmtQ&list=PLAwxTw4SYaPmTSxtOWyJVKTUaNBGze2ed',
  'https://www.youtube.com/watch?feature=youtu.be&v=CPP9ew4Co0M&app=desktop',
  'https://www.kollegorna.se/en/2017/06/service-worker-gotchas/',
  'https://jakearchibald.com/2014/offline-cookbook/',
];

const Resources = () => (
  <SlideWrapper>
    <SlideHeader>Resources</SlideHeader>
    <SlideBody>
      <ul style={{ listStyle: 'none' }}>
        {resources.map(item => (
          <li key={item}>
            <a href={item} target="_blank">{item}</a>
          </li>
        ))}
      </ul>
    </SlideBody>
  </SlideWrapper>
);

export default Resources;
