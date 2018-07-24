import React from 'react';
import './ServiceCard.css';

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Container, CardDeck, Button, Col, Row } from 'reactstrap';


import { Link } from 'react-router-dom';

class ServiceCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      service: {
        name: this.props.services.name,
        description: this.props.services.description,
        duration: this.props.services.duration,
        price: this.props.services.price,
        _id: this.props.services._id
      }
    };
  }

  // check to see that props match service item
  handleClick = () => {
    //console.log(this.state.service);
  }

  render() {
    return (
    
        <Card>
          <CardBody>
            <CardImg top width="100%" img src={"https://www.google.com.au/imgres?imgurl=http%3A%2F%2Fwww.modelhideout.com%2Fwordpress%2Fwp-content%2Fuploads%2F2014%2F06%2FWhat-is-a-Hair-Model.jpg&imgrefurl=http%3A%2F%2Fwww.modelhideout.com%2Fwhat-is-a-hair-model%2F&docid=7i7UoEIax-2-eM&tbnid=kOvLZ-NqcE3JqM%3A&vet=10ahUKEwjZ6e74hrfcAhUpEqYKHRo9DUMQMwjUASgCMAI..i&w=600&h=420&safe=off&bih=748&biw=866&q=hair%20model&ved=0ahUKEwjZ6e74hrfcAhUpEqYKHRo9DUMQMwjUASgCMAI&iact=mrc&uact=8"} alt="Card image cap" />
            <hr/>
            <CardTitle>{this.state.service.name}</CardTitle>
            <CardSubtitle className="cardsubtitle">Duration: {this.state.service.duration} hours | Price: ${this.state.service.price}</CardSubtitle>
            <CardText className="cardtext">{this.state.service.description}</CardText>
            <Button Link to={`/booking/${this.state.service.name}/${this.state.service.duration}/${this.state.service.price}`}>Book Now</Button>
          </CardBody>
        </Card>
     
      
    )
  }
}


export default ServiceCard;