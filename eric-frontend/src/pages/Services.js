import React from 'react';
import './Services.css'
import ServiceCard from '../components/ServiceCard';

class Services extends React.Component {
 
  // see state of the component - should be an array of all services
  handleClick = () => {
    console.log(this.props);
  }

  render() {
    console.log(this.props)
    return (
      <div className="servicesPage">
        <div className="servicesCards">
          {this.props.services.map((services, i) => {
            return(
              <div className="serviceCard" key={i}>
                    <ServiceCard services={services} />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
};

export default Services;