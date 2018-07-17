import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import './App.css';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/services' component={ServicesPage} />

          
        </div>
      </Router>
    
    );
  }
}


export default App;

