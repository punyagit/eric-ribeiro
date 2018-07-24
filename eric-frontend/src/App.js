import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import './App.css';
import NavComponent from './components/NavComponent';
import FooterComponent from './components/FooterComponent';
import CarouselComponent from './components/CarouselComponent';
import About from './components/About';
import Services from './pages/Services';
import BookCal from './pages/BookCal';
import SignUpForm from './components/SignUpForm';
import NoMatch from './components/NoMatch';
import axios from 'axios';
import { Container } from 'reactstrap';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      services: []
    }
  }

  componentDidMount() {
    axios
    .get(`/services`)
    .then(res => this.setState({ services: res.data.services }))
    .catch(err => console.log(err));
    //console.log(this.state)
  }

  render() {
    return (
      <Router>
<<<<<<< HEAD
=======
        <div className="app">
          <NavComponent />




>>>>>>> c2d97d3b576f8b80e3173720fc21231e5984b43f
          <main className="mainWindow">
            <Switch>
              <Route exact path='/' component={CarouselComponent} />
              <Route exact path='/about' component={About} />
              <Route exact path='/booking/:serviceName/:serviceDuration/:servicePrice' render={
                  () => <BookCal />
                }/>
              <Route exact path='/signup' component={SignUpForm} />
              <Route exact path='/services' render={
                  () => <Services services={this.state.services} />
                }/>
              <Route component={NoMatch} />
            </Switch>
          </main>
          <FooterComponent />
<<<<<<< HEAD
=======

          </div>
>>>>>>> c2d97d3b576f8b80e3173720fc21231e5984b43f
      </Router>
      
    );
  }
}

export default App;

