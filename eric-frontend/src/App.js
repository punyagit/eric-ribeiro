import React, { Component } from 'react';
import './App.css';
import BookCal from './booking/BookCal';
import Display from './booking/booking_display';
import { Button , Jumbotron} from 'reactstrap';

class App extends Component {


  render() {
    
    return (
      <div>
          <BookCal />

      </div>
    );
  }
}




export default App;

