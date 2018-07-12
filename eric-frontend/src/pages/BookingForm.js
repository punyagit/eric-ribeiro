//mport React from 'react'
import React, { Component } from 'react';

const date = {
    year: "2012",
    month: "7",
    day: "21"
}

const BookingForm = () => {
    
    
    
    return(
        <div>
            <form>
            
                    <input defaultValue={date.year} name="year" readOnly/>
                    <input defaultValue={date.month} name="year" readOnly/>
                    <input defaultValue={date.day} name="year" readOnly/>
                </form>
            </div>
    )
}

  export default BookingForm