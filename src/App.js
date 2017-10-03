import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SlideController from './containers/SlideController';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: window.innerHeight }}>
        <SlideController>
          <div style={{ color: 'white' }}>one</div>
          <div style={{ color: 'white' }}>two</div>
          <div style={{ color: 'white' }}>three</div>
        </SlideController>
      </div>
    );
  }
}

export default App;
