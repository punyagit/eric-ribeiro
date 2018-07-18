import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import './App.css';
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import BookCal from './pages/BookCal'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/booking' component={BookCal} />
        </div>
      </Router>
    
    );
  }
}


export default App;

