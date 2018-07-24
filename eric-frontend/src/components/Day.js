import React from "react";
import "./Day.css";
import axios from "axios";
// import PropTypes from "prop-types";
  
// const url = 'http://localhost:4000'
 
const url = 'https://calendar-booking-api.herokuapp.com'
function Day(props) {
    
function onDelete() {
      

      const token = localStorage.getItem('token');

      const dateId = props._id; 
      let config = {
   
    headers: { 'Access-Control-Allow-Origin': '*', 
    'Content-Type':'application/json', 
    'Authorization':'Bearer '+token  },
  }
      axios.delete(url+'/dates/'+dateId, config )
      .then(res => {
         window.alert('Deleted', res)
         return window.location.reload();      
      })
      .catch(Error)

}

  return (

 <div className="day">
            <br />
 <label>Day </label>
   <div className="props">{props.date}</div>
   <label>Month </label>
    <div className="props">{props.month}</div>
      <label>Year </label>
          <div className="props">{props.year}</div>
          <br /> <br />
          <label>Time </label>
          <div className="props">{props.time}</div>
           <br />
          <label>Duration </label>
          <div className="props">{props.duration}</div>
           <br />
          <label>Description </label>
          <div className="props">{props.description}</div>
           <br />

          <button onClick={onDelete} >Delete</button>
           <br />

          <label>DAY ID </label>
          <div className="props">{props._id}</div>
 <br />

 </div>

 );
}

/// Day.propTypes = {
//   month: PropTypes.integer.isRequired
//   };

export default Day;