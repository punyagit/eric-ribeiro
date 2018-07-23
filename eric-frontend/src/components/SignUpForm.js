// import React, { Component } from "react";
// import { Form, Button, FormGroup, Input, Label, Container, Row, Col } from "reactstrap";
// export default class SignUpForm extends Component {
//   constructor() {
//     super();
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
    
//     handleSubmit(e) {
      
//       e.preventDefault();
//       const data = new FormData(this.handleSubmit);

//       fetch('http://localhost:8081/signup', {
//         method: 'POST',
//         body: data,
//       });
//     }
    
//     render() {
//       return (

//       <Container>
//         <Row>
//         <Col sm="12" md={{ size: 20 }}>
//         <h1>Register</h1>
//         <Form onSubmit={this.handleSubmit}>
//         <FormGroup>
//         <Label> Name </Label> 
//         <Input type="text" name="name"  />
//         </FormGroup>
        

//         <FormGroup>
//         <Label> Password </Label>
//         <Input type="password" name="password"  />
//         </FormGroup>
       
//         <FormGroup>
//         <Label> Email </Label>
//         <Input type="text" name="email"  />
//         </FormGroup>

//         <FormGroup>
//         <Label> Phone Number </Label>
//         <Input type="text" name="phnumber"  />
//         </FormGroup>
        
        
//         <Button type="submit">Submit </Button>

//         </Form>
//         </Col>
//         </Row>
        
//       </Container>
//       );
//     }
//   }


  
