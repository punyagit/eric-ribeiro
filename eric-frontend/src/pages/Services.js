import React from 'react';
import './Services.css'
import ServiceCard from '../components/ServiceCard';
import { Button } from 'reactstrap';
import axios from 'axios';
import NavComponent from '../components/NavComponent';
import FooterComponent from '../components/FooterComponent';

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: []
    }
  }
 
  // see state of the component - should be an array of all services
  handleClick = () => {
    console.log(this.state);
  }

  // get request for services data from backend
  componentDidMount() {
    console.log('Did mount');
    axios
    .get(`http://localhost:8081/services`)
    .then(res => this.setState({ services: res.data.services }))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="servicesPage">
        <NavComponent />
        <div className="servicesCards">
          {this.state.services.map((services, i) => {
            return(
              <div key={i}>
                    <ServiceCard services={services} />
              </div>
            )
          })}
        </div>
        <Button onClick={this.handleClick}>Create</Button>
        <FooterComponent />
      </div>
    );
  }
};

export default Services;