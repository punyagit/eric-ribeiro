import React from 'react';
import './ServiceCard.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Container, CardDeck, Button, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

class ServiceCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      service: {
        _id: this.props.services._id,
        name: this.props.services.name,
        description: this.props.services.description,
        duration: this.props.services.duration,
        price: this.props.services.price,
        image: this.props.services.image
      }
    };
  }

  // check to see that props match service item
  handleClick = () => {
    console.log(this.state.service);
  }

  render() {
    return (
    
        <Card>
          <CardBody>
            <CardImg width="100%" src={this.state.service.image} alt="Card image cap" />
            <hr/>
            <CardTitle>{this.state.service.name}</CardTitle>
            <CardSubtitle className="cardsubtitle">Duration: {this.state.service.duration} hours | Price: ${this.state.service.price}</CardSubtitle>
            <CardText className="cardtext">{this.state.service.description}</CardText>
            <Link className="link" to={`/booking/${this.state.service.name}/${this.state.service.duration}/${this.state.service.price}`}><Button> Book Now </Button> </Link>
          </CardBody>
        </Card>
     
      
    )
  }
}


export default ServiceCard;