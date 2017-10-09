import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SlideController from './containers/SlideController';
import {
  Intro,
  ProgressiveWebApp,
  Lifecycle,
  Registration,
  Install,
  Activate,
  Message,
  Fetch,
  Sync,
  Push,
  BrowserSupport,
  Gotchas,
  Resources,
} from './slides/index';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: window.innerHeight }}>
        <SlideController>
          <Intro />
          <ProgressiveWebApp />
          <Lifecycle />
          <Registration />
          <Install />
          <Activate />
          <Message />
          <Fetch />
          <Sync />
          <Push />
          <Gotchas />
          <BrowserSupport />
          <Resources />
        </SlideController>
      </div>
    );
  }
}

export default App;
