import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom' 
import './App.css';
import HomePage from './pages/HomePage';
import BookCal from './pages/BookCal';
import SignUpPage from './pages/SignUpPage';
import Services from './pages/Services';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/booking' component={BookCal} />
          <Route exact path='/signup' component={SignUpPage} />
        </div>
      </Router>
    
    );
  }
}


export default App;

