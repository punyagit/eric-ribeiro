import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col } from 'reactstrap';

class ServiceCard extends React.Component {

  handleClick = () => {
    console.log(this.props.services);
  }

  render() {
    return (
      <Col sm="4">
        <Card>
          <CardBody>
            <CardImg top width="100%" src={this.props.services.image} alt="Card image cap" />
            <CardTitle>{this.props.services.name}</CardTitle>
            <CardSubtitle>Duration: {this.props.services.duration} hours | Price: ${this.props.services.price}</CardSubtitle>
            <CardText>{this.props.services.description}</CardText>
            <Button href="" onClick={this.handleClick}>Book Now</Button>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default ServiceCard;