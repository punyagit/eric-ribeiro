import React from "react";
import Day from "./Day";

function DayList(props) {

  return (

    <div>
      <h1> Admin Board</h1>
      <table width = "70%" className ="table-display" border = "1px">
  <tr>
    <th>Date</th>
    <th>Product</th>
    <th>Time</th>
    <th>Duration</th>
    <th>Price</th>
    <th>fun</th>
    
  </tr>
  </table>
      {
      	props.days.map((day, d) => 
      	<Day key={d} 
      
      _id={day._id} 

        date={day.date} 
        productName = {day.productName}
      
      
      time={day.time} 
      duration={day.duration} 
      price={day.price} />

      )}
      	
     </div> 
  ); 
} 

export default DayList;