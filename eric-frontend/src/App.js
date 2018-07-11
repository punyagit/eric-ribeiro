import React, { Component } from 'react';
import './App.css';
import NavComponent from './components/NavComponent';
import FooterComponent from './components/FooterComponent';

class App extends Component {
  render() {
    return (
      <div>
        <NavComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
