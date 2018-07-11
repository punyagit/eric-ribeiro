import React, { Component } from 'react';
import Calendar from 'react-calendar-material';

class BookCal extends Component {
  constructor(props){
    super(props);
    this.state = {
      day: "Day Placeholder",
      month: "Month Placeholder",
      year: "Year Placeholder",
      timeslots: ["Timeslot 1","Timeslot 2"]
    }

    // binding "this" so the property won't be lost when passed
    this.changeBooking = this.changeBooking.bind(this);
  }

  changeBooking (day,month,year,timeslots) {
    this.setState({
      day: day,
      month: month,
      year: year,
      timeslots: timeslots
     })

    // to see the data that has been passed....
      console.log("the state has been changed to:")
      console.log(day)
      console.log(month)
      console.log(year)
      console.log(timeslots)
  }

  render() {
    
    return (
    <Calendar
      accentColor={'blue'}
      orientation={'flex-col'}
      showHeader={false}
      onDatePicked={(d) => {
        var date = new Date(d);
        var year = date.getFullYear();
        var month = date.getMonth() + 1
        var day = date.getDate();

        this.changeBooking(day,month,year,newTimeslots);
    }}/>

    <BookInfo
    day={this.state.day}
    month={this.state.month}
    year={this.state.year}
    timeslots={this.state.timeslots}
    />

      
     </div>
    );
  }
}



export default BookCal;

