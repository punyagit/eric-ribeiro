import React, { Component } from 'react';
import './App.css';
import NavComponent from './components/NavComponent';
import FooterComponent from './components/FooterComponent';
import BookCal from './booking/BookCal';
import CarouselComponent from './components/CarouselComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavComponent />
        <CarouselComponent />
        <BookCal />
        <FooterComponent />
      </div>
    
    );
  }
}

export default App;

