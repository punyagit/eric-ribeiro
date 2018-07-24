import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom' 
import NavComponent from '../components/NavComponent';
import FooterComponent from '../components/FooterComponent';
import ContactForm from '../components/ContactForm';
//import './App.css';

class HomePage extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <ContactForm />
        </div>
      </Router>
    
    );
  }
}


export default HomePage;
