import React, { Component } from 'react';
import logo from './logo.svg';
import AppHeader from './components/AppHeader.js';
import IntroHead from './components/IntroHead.js';
import docList from './components/docList.js';
import docItem from './components/docItem.js';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <div className="App-intro">
          <IntroHead />
          <docList />   
        </div>
      </div>
    );
  }
}

export default App;