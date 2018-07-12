import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom' 
import './App.css';
import HomePage from './pages/HomePage';
import BookCal from './pages/BookCal';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/bookings' component={BookCal} />

          
        </div>
      </Router>
    
    );
  }
}


export default App;

