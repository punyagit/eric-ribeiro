import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Board.css";
import axios from 'axios'
const url = 'https://calendar-booking-api.herokuapp.com'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      email_s: "",
      password_s: "",
	  confirm_password_s: "",
      phone_s: Number,
      name_s: "",

      
      token: String,
      tokenPresent: Boolean,
	    isAdmin: Boolean

    };
  }


validateFormSignup() {
    return this.state.email_s.length > 0 && this.state.password_s.length > 0;
  }


  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }


   handleSubmitSignUp = event => {
    event.preventDefault();

     const newValidation = Object.assign({}, this.state, {
        email: this.state.email_s,
        password: this.state.password_s
        
      });

    axios.post(url+'/user/signup', newValidation )
    .then(res => {

     console.log('SIGNUP DATA description:', res)
      window.alert('LOGIN SUCCESSS YEAHHHHHHHHHH')

      })
    .catch(Error)
  }

  render() {
    return (
      <div className="board">
      
        <div className="SignUp">
      
        <form onSubmit={this.handleSubmitSignUp}>
          <FormGroup controlId="user_s" bsSize="large">
          <label>Signup</label>
          <br />
               <ControlLabel>Username</ControlLabel>
            <br />

            <FormControl
              autoFocus
              type="string"
              value={this.state.user_s}
              onChange={this.handleChange}
            />
            
          </FormGroup>
        <FormGroup controlId="email_s" bssize="large">
            <ControlLabel>Email</ControlLabel>
            <br />

            <FormControl
              autoFocus
              type="email"
              value={this.state.email_s}
              onChange={this.handleChange}
            />
            
          </FormGroup>
          <FormGroup controlId="password_s" bssize="large">
            <ControlLabel>Password</ControlLabel>
            <br />
            <FormControl
              value={this.state.password_s}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
            <FormGroup controlId="confirm_password_s" bssize="large">
            <ControlLabel>Confirm Password</ControlLabel>
            <br />
            <FormControl
              value={this.state.password_s}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
            <FormGroup controlId="name_s" bsSize="large">
          <label>Signup</label>
          <br />
               <ControlLabel>Full name</ControlLabel>
            <br />

            <FormControl
              autoFocus
              type="string"
              value={this.state.user_s}
              onChange={this.handleChange}
            />
            </FormGroup>
            <FormGroup controlId="phone_s" bssize="large">
            <ControlLabel>Phone</ControlLabel>
            <br />
            <FormControl
              value={this.state.password_s}
              onChange={this.handleChange}
              type="number"
            />
          </FormGroup>
          <Button
            block
            bssize="large"
            color="success"
            disabled={!this.validateFormSignup}
            type="button" onClick={this.handleSubmitSignUp}
          >
            SignUp
          </Button>
          <a className="changePassword" href="/forgot">Forgot Password?</a>
          <a className="changePassword" href="/reset">Reset Password</a>
          </form>

       
       
      </div>
      </div>
    );
  }
}