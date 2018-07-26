import React from "react";
import "./Day.css";
import axios from "axios";
// import PropTypes from "prop-types";
  
// const url = 'http://localhost:4000'
 
//const url = 'http://localhost:8081'
function Day(props) {
    
function onDelete() {
      

      const token = localStorage.getItem('token');

      const orderId = props._id; 
      let config = {
   
    headers: { 'Access-Control-Allow-Origin': '*', 
    'Content-Type':'application/json', 
    'Authorization':'Bearer '+token  },
  }
      axios.delete('./orders/'+orderId, config )
      .then(res => {
         window.alert('Deleted', res)
         return window.location.reload();      
      })
      .catch(Error)

}

  return (



 <div >

 

<table width = "70%" className ="table-display" border = "1px">
  
  <tr>
    <td>{props.name}</td>
    <td>{props.phoneNumber}</td>
    <td>{props.date}</td>
    <td>{props.productName}</td>
    <td>{props.time}</td>
    <td>{props.duration}</td>
    <td>{props.price}</td>
    <td><button onClick={onDelete} >Delete</button>
           </td>
  </tr>
  
</table>
           
 {/* <label>Day </label>
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
 <br /> */}

 </div>

 );
}



export default Day;