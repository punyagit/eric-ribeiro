import React, { Component } from 'react';
//import { BrowserRouter as Router,Redirect } from 'react-router-dom' 
import Calendar from 'react-calendar-material';
import NavComponent from '../components/NavComponent';
import FooterComponent from '../components/FooterComponent';
import BookInfo from '../components/BookInfo';
import {Collapse, Jumbotron} from 'reactstrap';






class BookCal extends Component {
  constructor(props){
    super(props);
    this.state = {
      daysData: []
    }

    this.onSubmit = this.onSubmit.bind(this)

    this.toggle = this.toggle.bind(this);
    this.onDatePicked = this.onDatePicked(this);
  }
  toggle() {
    this.setState({ collapse: true });
  }

  selectBooking (day,month,year) {
    this.setState({
      day: day,
      month: month,
      year: year,
    })
}

  onSubmit = e => {
    
  }

  onDatePicked = (d) => {

  }

  checkTimeSlot = (timeSlot,duration) => {
      let arrLength = timeSlot.length
      let newArr = []
      for(let i = 0;i < arrLength-1;i++){
        let cal = timeSlot[i+1] - [timeSlot[i]]
        console.log(cal)
        if(cal >= duration){
          newArr.push(timeSlot[i])

        }
      }
      this.setState({daysData:newArr})
      //console.log(this.state.daysData)
  }

  checkDb = (timeSlot,db) => {
    let arr1 = timeSlot.filter(val => !db.includes(val));
    console.log(arr1)
    this.setState({daysData:arr1})
    //console.log(this.state.daysData)
  }
  
  
  checkDate = (data,duration,timeSlot,db) => {
    if ((data.day.length) === 0){
      if(duration >= 1){
        
        this.checkTimeSlot(timeSlot,duration)
        
      }
   } else {
     this.checkDb(timeSlot,db)
     
   }

  }

  

  render() {
    
    return (
    <div>
    <NavComponent />
    {/* to revert to button style, use Button with color="link" */}
      <Jumbotron onClick={this.toggle} style={{ marginBottom: '1rem',textDecoration: 'none' }}>
      <Calendar
        accentColor={'blue'}
        orientation={'flex-col'}
        showHeader={false}
        
        onDatePicked={(d) => {
      
          
          let date = new Date(d);
          let year = date.getFullYear();
          let month = date.getMonth() + 1;
          let day = date.getDate();
          this.selectBooking(day,month,year);
          
        let db = [11.30,14.30]
        let duration = 3
        let timeSlot = [9.30,10,11.30,12.30,14.30,17,20,21]
        const url = 'http://localhost:8081/dates'
        fetch(`${url}/${day}/${month}/${year}`)
        .then(resp => resp.json())
        .then((data) => {
          this.checkDate(data,duration,timeSlot,db)
          
          //this.setState({daysData:data.day }, () => { console.log(this.state) })
          }, )
        //.then(console.log(this.state.daysData))
        .catch(err => console.log("rong urls",err))

        
        
        //   (async () => {
        //     const url = 'http://localhost:8081/dates'
        //     const response = await fetch(`${url}/${day}/${month}/${year}`);
        //     const json = await response.json();
        //     this.setState({daysData:json.day })
            
        // })();
        
      }
        
      }/>
      </Jumbotron>
      
      
      <Collapse isOpen={this.state.collapse}>
          <BookInfo
          
          day= {this.state.day}
          timeslot= {this.state.daysData}
          month= {this.checkDate}
          year= {this.state.year}
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