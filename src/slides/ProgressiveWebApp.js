// @flow
import React from 'react';
import SlideWrapper from '../containers/SlideWrapper';
import SlideHeader from '../components/SlideHeader';
import SlideBody from '../components/SlideBody';
import List from '../components/List';

const makeAspect = (buzzword, desc) => ({ buzzword, desc });

const aspects = [
  makeAspect(
    `Progressive`,
    `Works for every user, regardless of browser choice because it's built with progressive enhancement as a core tenet.`
  ),
  makeAspect(
    `Responsive`,
    `Fits any form factor: desktop, mobile, tablet, or whatever is next.`,
  ),
  makeAspect(
    `Connectivity independent`,
    `Enhanced with service workers to work offline or on low-quality networks.`,
  ),
  makeAspect(
    `App-like`,
    `Feels like an app, because the app shell model separates the application functionality from application content.`,
  ),
  makeAspect(
    `Fresh`,
    `Always up-to-date thanks to the service worker update process.`,
  ),
  makeAspect(
    `Safe`,
    `Served via HTTPS to prevent snooping and to ensure content hasn't been tampered with.`
  ),
  makeAspect(
    `Discoverable`,
    `Is identifiable as an "application" thanks to W3C manifest and service worker registration scope, allowing search engines to find it.`
  ),
  makeAspect(
    `Re-engageable`,
    `Makes re-engagement easy through features like push notifications.`
  ),
  makeAspect(
    `Installable`,
    `Allows users to add apps they find most useful to their home screen without the hassle of an app store.`,
  ),
  makeAspect(
    `Linkable`,
    `Easily share the application via URL, does not require complex installation.`
  )
];

const ProgressiveWebApp = () => (
  <SlideWrapper>
    <SlideHeader>What is a Progressive Web App?</SlideHeader>
    <SlideBody>
      <List
        items={aspects.map(({ buzzword, desc }) => ({ title: buzzword, text: desc }))}
      />
    </SlideBody>
  </SlideWrapper>
);

export default ProgressiveWebApp;
