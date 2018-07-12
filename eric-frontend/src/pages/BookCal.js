import React, { Component } from 'react';
import Calendar from 'react-calendar-material';
import NavComponent from '../components/NavComponent';
import FooterComponent from '../components/FooterComponent';
import BookInfo from '../components/BookInfo';
import {Collapse, Jumbotron, Button} from 'reactstrap';


class BookCal extends Component {
  constructor(props){
    super(props);
    this.state = {
      day: "",
      month: "",
      year: "",
      timeslots: ["timeslot placeholder"],
      duration: "",
      collapse: false
    }

    this.changeBooking = this.changeBooking.bind(this);
    this.toggle = this.toggle.bind(this)
  }


  toggle() {
    this.setState({ collapse: true });
  }

  changeBooking (day,month,year,timeslots,duration) {
    this.setState({
      day: day,
      month: month,
      year: year,
      timeslots: timeslots,
      duration: duration
     })
     console.log(this.state)
  }

  onSubmit = e => {
    console.log("Passed value: ", e)
  }

  render() {
    // test assign new timeslots array
       let arr = ["timeslot 1","timeslot 2","timeslot 3", "timeslot 4", "timeslot 5"]
       
    return (
      <div>
    <NavComponent />
    <Button color="link" onClick={this.toggle} style={{ marginBottom: '1rem',textDecoration: 'none' }}>
    <Calendar
      accentColor={'blue'}
      orientation={'flex-col'}
      showHeader={false}
      onDatePicked={(d) => {
        let date = new Date(d);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let timeslots = arr;
        let duration = "duration placeholder";

        this.changeBooking(day,month,year,timeslots,duration);
        
    }}/>
    </Button>

    
    <Collapse isOpen={this.state.collapse}>
        <BookInfo
        day= {this.state.day}
        month= {this.state.month}
        year= {this.state.year}
        timeslots={this.state.timeslots}
        duration= {this.state.duration}
        onSubmit= {e => this.onSubmit(e)}
        />

    </Collapse>
    <FooterComponent/>
      
     </div>
    );
  }
}



export default BookCal;
