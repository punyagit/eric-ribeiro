import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavComponent from '../components/NavComponent';
import FooterComponent from '../components/FooterComponent';
import ServiceCard from '../components/ServiceCard';
import axios from 'axios';
import { Button } from 'reactstrap';

class Services extends React.Component {
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

  handleClick = () => {
    console.log(this.state.services);
  }

  onCreate = () => {
    const newService = Object.assign({}, this.state.services, {
      name: this.state.services.name,
      description: this.state.services.description,
      duration: this.state.services.duration, 
      price: this.state.services.price
    });

    const headers = {
      'Access-Control-Allow-Origin': '*'
    };

    axios
    .post('http://localhost:8081/services', { newService, headers })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onUpdate = () => {
    axios
    .patch('http://localhost:8081/services')
    .then()
    .catch()
  }

  onDelete = () => {
    axios
    .delete('http://localhost:8081/', {params: { serviceId: this._id}})
    .then(function(response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    })
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
                    <ServiceCard services={services} />
                  </div>
                )
              })}
              <div><Button onClick={this.handleClick}>Create</Button></div>
            </div>
          <div><FooterComponent /></div>
        </div>
      </Router>
    );
  }
};

export default Services;