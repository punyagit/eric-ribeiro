  import React from 'react';
import './Services.css'
import ServiceCard from '../components/ServiceCard';
import { Col, Row, Container } from 'reactstrap';

class Services extends React.Component {
 
  // see state of the component - should be an array of all services
  handleClick = () => {
    //console.log(this.props);
  }

  render() {
    //console.log(this.props)
    return (
            
      <div className="servicesPage">
        <Row className="servicesCards">
          {this.props.services.map((services, i) => {
            return(
              <Col sm="4"  className="serviceCard" key={i}>
                    <ServiceCard services={services} />
              </Col>
            )
          })}
        </Row>
      </div>
      
    );
  }
};

export default Services;