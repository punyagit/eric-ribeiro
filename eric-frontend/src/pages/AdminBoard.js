import React from "react";
import "./AdminBoard.css";


import DayList from "../components/DayList";
import Form from "../components/Form";
import Board from "../components/Board";

import axios from "axios"
const url = 'https://calendar-booking-api.herokuapp.com'
// const urlLocal = 'http://localhost:4000/dates'

export default class AdminBoard extends React.Component {

  state = {
    count: '',
    days: [],
    shouldHide: Boolean,
    orders: []
  }

    handleLogout = event => {
      localStorage.removeItem('token');
     window.location.reload()

     const tk = Object.assign({}, this.state, {
        token: false

      })
     return this.setState(tk)

   };
 
    componentDidMount() {
             const token = localStorage.getItem('token');
              
              if (token != null) { this.setState({shouldHide: false}) }

              console.log('token', token) 

// const token = this.state.token

  let config = {
   
    headers: { 'Access-Control-Allow-Origin': '*',
     'Content-Type':'application/json',
      'Authorization':'Bearer '+token  },
  }      


    axios.get(url+'/dates', config)
    .then( response => {
      const newDays = response.data.days.map((day, i) => {
        return {
          _id: day._id,
          date: day.date,
          month: day.month,
           year: day.year,
           time: day.time.time,
           description: day.time.description,
           duration: day.time.duration
           
      };
    });

      const newState = Object.assign({}, this.state, {
        days: newDays
    });

      this.setState(newState);
   })

    .catch(error => console.log('BAD', error))

    fetch('http://localhost:8081/orders')
    .then(resp => resp.json())
    .then((data) => {
      this.setState({orders:data})
    }, )
   .catch(err => console.log("Wrong urls",err))


   }

    render() {
        //console.log(this.state.orders)
    return (
     
   
  <div key={this.board} className='board'>

<div className={this.state.shouldHide ? 'login' : "hidden"}>
     <Board key={this.admin}/></div>
<div></div>

    <div className={this.state.shouldHide ? 'hidden' : "board"}>
      <div className='logout'>
       <button bssize="large" type="button" onClick={this.handleLogout}>Logout</button>

     </div>
    <br />
 
      <div className={this.state.shouldHide ? 'hidden' : "Form"}>
       
      <br />

      <Form key={this.form}/>
   
      
      <br />

      <DayList key={this.day} days={this.state.days} />
         </div>
         <div>
         
         </div> 
    </div>
  </div>
  
    );
  }
}
