import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavComponent from '../components/NavComponent';
import FooterComponent from '../components/FooterComponent';
import Service from '../components/Service';
import axios from 'axios';

class ServicesPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      services: []
    }
  }

  componentDidMount() {
    console.log('Did mount');
    axios
    .get(`http://localhost:8081/services`)
    .then(res => this.setState({ services: res.data.services }))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <div className="servicesPage">
          <div><NavComponent /></div>
            <div className="servicesCards">
              {this.state.services.map((services, i) => {
                return(
                <div key={i}>
                  <Service services={services} />
                </div>
                )
              })}
            </div>
          <div><FooterComponent /></div>
        </div>
      </Router>
    );
  }
};

export default ServicesPage;