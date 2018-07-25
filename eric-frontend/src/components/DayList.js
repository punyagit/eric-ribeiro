import React from "react";
import Day from "./Day";

function DayList(props) {

  return (

    <div>
      {
      	props.days.map((day, d) => 
      	<Day key={d} 
      
      _id={day._id} 

      	date={day.date} 
      	month={day.month} 
      	year={day.year}
      
      time={day.time} 
      duration={day.duration} 
      description={day.description} />

      )}
      	
     </div> 
  ); 
} 

export default DayList;