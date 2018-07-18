import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavComponent from '../components/NavComponent';
import FooterComponent from '../components/FooterComponent';
import Service from '../components/Service';
import axios from 'axios';
import { Button } from 'reactstrap';

class ServicesPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      services: []
    }
  }

  componentDidMount() {
    console.log('Did mount');
    axios
    .get(`http://localhost:8081/services`)
    .then(res => this.setState({ services: res.data.services }))
    .catch(err => console.log(err));
  }

  createData() {
    const data = {
      name: "test service",
      description: "something",
      duration: 3,
      price: 140
    }
    this.postService(data)
  }

  postService() {
    axios.post('http://localhost:3000/services', {
    })
    .then(function (response) {
      console.log(response);
      this.setState({
        service: response
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <Router>
        <div className="servicesPage">
          <div><NavComponent /></div>
            <div className="servicesCards">
              {this.state.services.map((services, i) => {
                return(
                  <div key={i}>
                    <Service services={services} />
                  </div>
                )
              })}
              <div><Button onClick={this.createData()}>Create</Button></div>
            </div>
          <div><FooterComponent /></div>
        </div>
      </Router>
    );
  }
};

export default ServicesPage;