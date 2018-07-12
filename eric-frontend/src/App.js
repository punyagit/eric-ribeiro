import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom' 
import './App.css';
import HomePage from './pages/HomePage';
import BookCal from './pages/BookCal';
import BookingForm from './pages/BookingForm'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/bookings' component={BookCal} />
          <Route exact path='/form' component={BookingForm} />

          
        </div>
      </Router>
    
    );
  }
}


export default App;

