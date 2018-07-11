import React, { Component } from 'react';
import './App.css';
import NavComponent from './components/NavComponent';
import FooterComponent from './components/FooterComponent';
import CarouselComponent from './CarouselComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavComponent />
        <CarouselComponent />
        <FooterComponent />
      </div>
    
    );
  }
}

export default App;

