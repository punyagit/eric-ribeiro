import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Forgot.css";
import axios from 'axios'
const url = 'https://calendar-booking-api.herokuapp.com'

export default class Forgot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      
      email_s: "",
      password_s: "",

      email_f: "",
      
      token: String,
      tokenPresent: Boolean
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

validateFormSignup() {
    return this.state.email_s.length > 0 && this.state.password_s.length > 0;
  }


validateFormForgot() {
    return this.state.email_f.length > 0;
  }

validateLogout() {
    return this.state.token === true
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }


  handleLogout = event => {
      localStorage.removeItem('token');
     window.location.reload()

     const tk = Object.assign({}, this.state, {
        tokenPresent: false

      })
     return this.setState(tk)


   };

  handleSubmit = event => {

     const newValidation = Object.assign({}, this.state, {
        email: this.state.email,
        password: this.state.password

      });
    axios.post(url+'/user/login', newValidation )
    .then(res => {

      const tokenPresent = res.data.token
     
      this.setState({token: tokenPresent, tokenPresent: true})
      window.alert('LOGIN SUCCESSS YEAHHHHHHHHHH')
      window.location.reload()

       return localStorage.setItem('token', res.data.token);
      


      }).catch(Error)  
    
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
   handleSubmitForgotPass = event => {
    event.preventDefault();


     const newValidation = Object.assign({}, this.state, {
        email_f: this.state.email_f

      });
              console.log('ForgotPass E:', newValidation)

    axios.post('http://localhost:4000/user/forgot', newValidation )
    .then(res => {
    

      })
    .catch(Error)
  }

  render() {
    return (
      <div className="board">

        <div>
        <form onSubmit={this.handleSubmitForgotPass}>
      <legend>Forgot Password</legend>
   
          <FormGroup controlId="email_f" bssize="large">
            <ControlLabel>Email</ControlLabel>
            <br />
            <FormControl
              value={this.state.email_f}
              onChange={this.handleChange}
              type="email"
            />
          </FormGroup>
       <Button

            bssize="large"
            type="button" onClick={this.handleSubmitForgotPass}
          >
            Reset
          </Button>


        
        </form>
      
       
      </div>
      </div>
    );
  }
}