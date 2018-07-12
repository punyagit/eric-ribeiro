import React, { Component } from 'react';
import BookInfo from './BookInfo';
import Calendar from 'react-calendar-material';
import NavComponent from '../components/NavComponent';
import FooterComponent from '../components/FooterComponent';

class BookCal extends Component {
  constructor(props){
    super(props);
    this.state = {
      day: this.day,
      month: this.month,
      year: this.year,
      duration: this.duration,
      timeslots: ["Timeslot 1","Timeslot 2"]
    }

    // binding "this" so the property won't be lost when passed
    this.changeBooking = this.changeBooking.bind(this);
  }

  changeBooking (day,month,year,duration) {
    this.setState({
      day: day,
      month: month,
      year: year,
      duration:duration,
      //timeslots: ["time1","time2","time3"]
      
     })

    // to see the data that has been passed....
      console.log("the state has been changed to:")
      console.log(day)
      console.log(month)
      console.log(year)
      console.log(duration)
     //console.log(timeslots)
      
  }

  render() {
       let arr = ["time1","time2","time3"]
    return (
      <div>
    <NavComponent />
    <Calendar
      accentColor={'blue'}
      orientation={'flex-col'}
      showHeader={false}
      onDatePicked={(d) => {
        var date = new Date(d);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var duration= 7;
        
        
        this.changeBooking(day,month,year,duration);
        
    }}/>
    <BookInfo
    day={this.state.day}
    month={this.state.month}
    year={this.state.year}
    timeslots={this.state.timeslots}
    duration = {this.state.duration}
    
    />
    <FooterComponent />
      
     </div>
    );
  }
}



export default BookCal;

