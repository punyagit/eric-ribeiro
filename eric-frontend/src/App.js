import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom' 
import './App.css';
import NavComponent from './components/NavComponent';
import FooterComponent from './components/FooterComponent';
import CarouselComponent from './components/CarouselComponent';
import About from './components/About';
import Services from './pages/Services';
import BookCal from './pages/BookCal';
import SignUpForm from './components/SignUpForm';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      services: []
    }
  }

  componentDidMount() {
    //console.log(this.props.children);
    axios
    .get(`http://localhost:8081/services`)
    .then(res => this.setState({ services: res.data.services }))
    .catch(err => console.log(err));
    //console.log(this.state)
  }

  render() {
    return (
      <Router>
        <div>
          <NavComponent />
          <Route exact path='/' component={CarouselComponent} />
          <Route exact path='/about' component={About} />
          <Route exact path='/booking/:serviceName/:serviceDuration/:servicePrice' render={
              () => <BookCal />
            }/>
          <Route exact path='/signup' component={SignUpForm} />
          <Route exact path='/services' render={
              () => <Services services={this.state.services} />
            }/>
          <FooterComponent />
          </div>
      </Router>
      
    
    );
  }
}

export default App;

