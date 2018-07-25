import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Board.css";
import axios from 'axios'
const url = 'https://calendar-booking-api.herokuapp.com'

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      

      email_f: "",
      token: String,
      tokenPresent: Boolean
    };
  }
  

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
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


 

  render() {
    return (
      <div className="board">
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
          <label>Login</label>
          <br />
            <ControlLabel>Email</ControlLabel>
            <br />

            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />

          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <br />
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="button" onClick={this.handleSubmit}
          >
            Login
          </Button>
       
        </form>
         
      </div>

      </div>
    );
  }
}