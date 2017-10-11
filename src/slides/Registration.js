import React from 'react';
import SlideWrapper from '../containers/SlideWrapper';
import SlideHeader from '../components/SlideHeader';
import SlideBody from '../components/SlideBody';
import CodeBlock from '../components/CodeBlock';
import List from '../components/List';

const code = `
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw-test/sw.js', {scope: '/sw-test/'})
  .then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}
`;

const bullets = [
  'Feature detect prevents errors in browsers without service worker support',
  'Scope parameter (optional) specifies the subset of content the service worker will control',
  'Each time a page within your scope is loaded, the service worker is installed against that page and operates on it',
  'Service workers are shared across pages',
  'The path to the service worker should be written relative to the origin',
  'eg is website is https://my-name and sw is at https://my-name/sw.js, then ./sw.js',
  'eg if website is : https://mdn.github.io/my-app, and sw is at https://mdn.github.io/my-app/sw.js, then /my-app/sw.js'
];

const Registration = () => (
  <SlideWrapper>
    <SlideHeader>Registration Event</SlideHeader>
    <SlideBody>
      <CodeBlock>
        {code}
      </CodeBlock>
      {/* <List
        items={bullets}
        useBullets
      /> */}
      <div>
        <List
          items={bullets}
          useBullets
        />
      </div>
    </SlideBody>
  </SlideWrapper>
);

export default Registration;
