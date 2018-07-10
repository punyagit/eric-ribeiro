import React, { Component } from 'react';
import './App.css';
import Calendar from 'react-calendar-material';
import Display from './booking/booking_display';
import { Button , Jumbotron} from 'reactstrap';

class App extends Component {

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
    
    let day_time1 = Math.floor(Math.random()*12) + ':00 AM'
    let day_time2 = Math.floor(Math.random()*12) + ':00 AM'
    let eve_time1 = Math.floor(Math.random()*12) + ':00 PM'
    let eve_time2 = Math.floor(Math.random()*12) + ':00 PM'
    let eve_time3 = Math.floor(Math.random()*12) + ':00 PM'
 
    const newTimeslots = [
      day_time1,day_time2,eve_time1,eve_time2,eve_time3
    ]
    return (
      <div className="App">
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

    <Display
    day={this.state.day}
    month={this.state.month}
    year={this.state.year}
    timeslots={this.state.timeslots}
    />

      
     </div>
    );
  }
}




export default App;

