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
  Fetch,
  Sync,
  BrowserSupport,
  Gotchas,
  Resources,
} from './slides/index';

class App extends Component {
  state = {
    height: window.innerHeight,
  }

  componentWillMount() {
    window.addEventListener('resize', this.updateHeight);
  }

  componentWillUnmount() {
    window.addEventListener('resize', this.updateHeight);
  }

  updateHeight = () => {
    this.setState({ height: window.innerHeight });
  }

  render() {
    return (
      <div className="App" style={{ height: this.state.height }}>
        <SlideController>
          <Intro />
          <ProgressiveWebApp />
          <Lifecycle />
          <Registration />
          <Install />
          <Activate />
          <Fetch />
          <Sync />
          <Gotchas />
          <BrowserSupport />
          <Resources />
        </SlideController>
      </div>
    );
  }
}

export default App;
