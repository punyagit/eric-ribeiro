
import React, { Component } from 'react';
//import { BrowserRouter as Router,Redirect } from 'react-router-dom' 
import Calendar from 'react-calendar-material';
import NavComponent from '../components/NavComponent';
import FooterComponent from '../components/FooterComponent';
import BookInfo from '../components/BookInfo';
import {Collapse, Jumbotron} from 'reactstrap';

//const timeSlot = [9.30,10,10.30,11,11.30,12,12.30,13,13.30,14,14.30]




class BookCal extends Component {
  constructor(props){
    super(props);
    this.state = {

    daysData: []
    }

    this.onSubmit = this.onSubmit.bind(this)

    this.toggle = this.toggle.bind(this);
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
    //console.log("Data received: ", e)
  }

  render() {
    
   //const da = this.state.days
       
    return (
      <div>
       {console.log(this.state.daysData)}
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
        
      //   fetch(`${url}/${day}/${month}/${year}`)
      //   .then(resp => resp.json())
      //   .then((data) => {
      //    //console.log(data.day)
      //    this.setState({daysData:data.day })
      //    })
      // //.then(console.log(this.state.daysData))
      // .catch(err => console.log("rong urls",err))
      //   console.log(this.state.daysData)

    
      
      // const url = 'http://localhost:4000/dates'
      // fetch(`${url}/${day}/${month}/${year}`)
      // .then(resp => resp.json())
      // .then((data) => {
      //    //console.log(data.day)
      //    this.setState({datDays:data.day })
      //    })
      // .then(console.log(this.state.daysData))
      // .catch(err => console.log("rong urls",err))


        (async () => {
          const url = 'http://localhost:4000/dates'
          const response = await fetch(`${url}/${day}/${month}/${year}`);
          const json = await response.json();
          await this.setState({daysData:json.day })
          
      })();
      
    }
      
    }/>
    </Jumbotron>
     
    
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
