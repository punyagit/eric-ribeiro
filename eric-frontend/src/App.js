import React, { Component } from 'react';
import './App.css';
import BookCal from './booking/BookCal';
import { Button , Jumbotron} from 'reactstrap';

class App extends Component {


  render() {
    
    return (
      <div className='App'>
          <BookCal />

      </div>
    );
  }
}




export default App;

