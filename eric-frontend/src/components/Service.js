import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row } from 'reactstrap';

class Service extends React.Component {
  render() {
    const name = this.props.services.name;
    const description = this.props.services.description;
    const duration = this.props.services.duration;
    const price = this.props.services.price;
    const image = this.props.services.imageUrl;
    return (
      <Row>
      <Col sm="4">
        <Card>
          <CardBody>
            <CardImg top width="100%" src={image} alt="Card image cap" />
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>Duration: {duration} hours | Price: ${price}</CardSubtitle>
            <CardText>{description}</CardText>
            <Button href="/booking">Book Now</Button>
          </CardBody>
        </Card>
      </Col>
      </Row>
    )
  }
}

export default Service;