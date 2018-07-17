import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col } from 'reactstrap';

class Service extends React.Component {
  handleClick = () => {
    console.log(this.serviceDetails());
  }

  serviceDetails() {
    return this.props.services;
  }

  render() {
    const name = this.props.services.name;
    const description = this.props.services.description;
    const duration = this.props.services.duration;
    const price = this.props.services.price;
    const image = this.props.services.imageUrl;

    return (
      <Col sm="4">
        <Card>
          <CardBody>
            <CardImg top width="100%" src={image} alt="Card image cap" />
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>Duration: {duration} hours | Price: ${price}</CardSubtitle>
            <CardText>{description}</CardText>
            <Button href="" onClick={this.handleClick}>Book Now</Button>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default Service;