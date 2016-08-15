import React, { Component } from 'react';
import logo from './logo.svg';
import App-header from './components/App-header.js';
import Intro-head from './components/Intro-head.js';
import docList from './components/docList.js';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <App-header />
        <div className="App-intro">
          <Intro-head />
          <doctorList />   
        </div>
      </div>
    );
  }
}

export default App;