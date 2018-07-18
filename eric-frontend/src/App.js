import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom' 
import './App.css';
import HomePage from './pages/HomePage';
import BookCal from './pages/BookCal';
import ContactUs from './pages/ContactUs';
import SignUpPage from './pages/SignUpPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/bookings' component={BookCal} />
          <Route exact path='/contactus' component={ContactUs} />
          <Route exact path='/signup' component={SignUpPage} />
        </div>
      </Router>
    
    );
  }
}


export default App;

