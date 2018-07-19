import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom' 
import NavComponent from '../components/NavComponent';
import FooterComponent from '../components/FooterComponent';
import CarouselComponent from '../components/CarouselComponent';
//import './App.css';

class HomePage extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <NavComponent />
          <CarouselComponent />
          <FooterComponent />
        </div>
      </Router>
    
    );
  }
}


export default HomePage;
