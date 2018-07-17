import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavComponent from '../components/NavComponent';
import FooterComponent from '../components/FooterComponent';
import Service from '../components/Service';

class ServicesPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      services: []
    }
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/rhyswoodberry/services-data/master/services-data.json"
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          services: data
        });
      })
  }

  render() {
    return (
      <Router>
        <div className="servicesPage">
          <div><NavComponent /></div>
            <div className="servicesCards">
              {this.state.services.map((services, i) => {
                return <div key={i}><Service services={services} /></div>
              })}
            </div>
          <div><FooterComponent /></div>
        </div>
      </Router>
    );
  }
};

export default ServicesPage;