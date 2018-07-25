import React, { Component } from "react";
import { Form, Button, FormGroup, Input, Label, Container, Row, Col } from "reactstrap";

export default class AdminLogin extends Component {
  constructor() {
    super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
      e.preventDefault();
      const data = new FormData(this.handleSubmit);

      fetch('/adminlogin', {
        method: 'POST',
        body: data,
      });
    }
    
    render() {
      return (
      <Container>
        <Row>
        <Col sm="12" md={{ size: 20 }}>
        <h1>Admin Login</h1>
        <Form onSubmit={this.handleSubmit}>
        <FormGroup>
        <Label> Name </Label> 
        <Input type="text" name="name"  />
        </FormGroup>
        <FormGroup>
        <Label> Password </Label>
        <Input type="password" name="password"  />
        </FormGroup>
        <Button type="submit">Submit </Button>
        <Button type="submit">Forgot Password </Button>
        </Form>
        </Col>
        </Row>
      </Container>
      );
    }
  }

