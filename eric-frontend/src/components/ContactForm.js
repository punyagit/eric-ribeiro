import React, { Component } from "react";
import { Form, Button, FormGroup, Input, Label } from "reactstrap";
require('dotenv').config()

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phnumber: "",
      comment: ""
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
      // displaying the alert
      let log = [];
      Object.entries(this.state).forEach(([key, value]) => {
        log.push(`${key} = ${value} \n`);
      });
      alert('You have submitted :\n' + log);

      // prevent refresh after pressing the submit button once
      e.preventDefault();
    }
    
    render() {
      const sendgrid = process.env.REACT_APP_SENDGRID_API_KEY;
      console.log("My key is : " + sendgrid)


      // const sgMail = require('@sendgrid/mail');
      // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      // const msg = {
      //   name: this.state.name,
      //   email: this.state.email,
      //   phnumber: this.state.phnumber,
      //   comment: this.state.comment,
      // };
      // sgMail.send(msg);




      return (
        <Form onSubmit={this.handleSubmit}>
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
        <FormGroup>
        <Label> Comment </Label>
        <Input type="textarea" name="comment" onChange={e => this.handleChange(e)} />
        </FormGroup>
        <Button type="submit">Submit (Sending with Sendgrid)</Button>
        </Form>
      );
    }
  }


  
