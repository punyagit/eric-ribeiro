import React, { Component } from 'react';
//import { BrowserRouter as Router,Redirect } from 'react-router-dom' 
import Calendar from 'react-calendar-material';
import BookInfo from '../components/BookInfo';
import {Collapse, Jumbotron, Row, Col} from 'reactstrap';
import { withRouter } from 'react-router';

class BookCal extends Component {
  constructor(props){
    super(props);
    this.state = {
      daysData: []
    }
  }

  // componentDidMount() {
  //   //console.log(this.state);
  // }

  // toggle() {
  //   this.setState({ collapse: true });
  // }

  selectBooking (day,month,year) {
    this.setState({
      day: day,
      month: month,
      year: year,
      available: "Available Timeslot :"
    })
}

  
// function to pick the date in calendar
  onDatePicked = (d) => {
    let duration = this.props.match.params.serviceDuration
          let date = new Date(d);
          let year = date.getFullYear();
          let month = date.getMonth() + 1;
          let day = date.getDate();
          this.selectBooking(day,month,year);
          
        let db = [11.30,14.30]
       
        let timeSlot = [9,9.30,10,10.30,11,11.30,12,12.30,13,13.30,14,14.30,15,15.30,16,
                        16.30,17,17.30,18,18.30,19,19.30,20,21]
        const url = '/dates'
        fetch(`${url}/${day}/${month}/${year}`)
        .then(resp => resp.json())
        .then((data) => {
          this.checkDate(data,duration,timeSlot,db)
        }, )
       .catch(err => console.log("Wrong urls",err))
  }

// Display timeslot when ther is no previous booking
  checkTimeSlot = (timeSlot,duration) => {
      let arrLength = timeSlot.length
      let sliceIndex = duration/(.5)
      let newLength = ((arrLength+1)- sliceIndex)
      
      let newArr = timeSlot.slice(0,newLength)
      this.setState({daysData:newArr})
    
      //console.log(this.state.daysData)
  }


// Check to database
  checkDb = (timeSlot,db) => {
    let arr1 = timeSlot.filter(val => !db.includes(val));
    //console.log(arr1)
    this.setState({daysData:arr1})
    

  }

  
  checkDate = (data,duration,timeSlot,db) => {
   
    if ((data.day.length) === 0){
      
     
        
        this.checkTimeSlot(timeSlot,duration)
        //console.log(this.state.daysData)
      
      } else {
     this.checkDb(timeSlot,db)
     //console.log(this.state.daysData)
   }

  }

  

  render() {
    
    return (
    <Row style={{margin: 20, alignItems: 'center'}}>
   
      
      <Col>
      <Calendar
        accentColor={'green'}
        orientation={'flex-col'}
        showHeader={false}
        onDatePicked = {(d) => {
          this.onDatePicked(d)
        }}
      />
      </Col>
      
      
      <Col isOpen={this.state.collapse}>
          <BookInfo
          timeslot = {this.state.daysData}
          day= {this.state.day}
          month= {this.state.month}
          year= {this.state.year}
          available= {this.state.available}
          duration= {this.props.match.params.serviceDuration}
          productName = {this.props.match.params.serviceName}
          price = {this.props.match.params.servicePrice}
          />
      </Col>
     </Row>
    );
  }
}



export default withRouter(BookCal);




