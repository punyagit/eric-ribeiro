import React, { Component } from "react";
import { Form, Button, FormGroup, Input, Label } from "reactstrap";
export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
      email: "",
      phnumber: ""
      };
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
      this.setState(
        {[e.target.name]: e.target.value}
      );
    }
    
    handleSubmit(e) {
      let log = [];
      Object.entries(this.state).forEach(([key, value]) => {
        log.push(`${key} = ${value} \n`);
      });
      alert('You have submitted :\n' + log);
      e.preventDefault();
    }
    
    render() {
      return (
        <Form onSubmit={this.handleSubmit}>
        <FormGroup>
        <Label> User Name </Label>
        <Input type="text" name="username" onChange={e => this.handleChange(e)} />
        </FormGroup>
        <FormGroup>
        <Label> Password </Label>
        <Input type="password" name="password" onChange={e => this.handleChange(e)} />
        </FormGroup>
        <FormGroup>
        <Label> Name </Label>
        <Input type="text" name="name" onChange={e => this.handleChange(e)} />
        </FormGroup>
        <FormGroup>
        <Label> Email </Label>
        <Input type="text" name="email" onChange={e => this.handleChange(e)} />
        </FormGroup>
        <FormGroup>
        <Label> Phone Number </Label>
        <Input type="text" name="phnumber" onChange={e => this.handleChange(e)} />
        </FormGroup>
        <Button type="submit">Submit </Button>
        </Form>
      );
    }
  }