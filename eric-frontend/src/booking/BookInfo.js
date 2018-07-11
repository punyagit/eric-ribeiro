import React, { Component } from 'react';
import {Jumbotron} from 'reactstrap';
import BookCal from './BookCal';
class BookInfo extends Component {

    

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

    render(){
        const style = {
            // border: '20 solid black',
            background: "linear-gradient(rgba(120, 120, 120, 120) 1%, rgb(147, 147, 147) 0%, rgba(0, 0, 0, 0) 100%)",
            padding: 20,
        }
        const style2 = {
            backgroundColor: 'grey',
            padding: 30
        }

        let day = this.state.day;
        let month = this.state.month;
        let year = this.state.year;
        let timeslots = this.state.timeslots;


        const newTimeslots = [
        day_time1,day_time2,eve_time1,eve_time2,eve_time3
        ]

        return (
        <div>
            <Jumbotron>

                <p>Day : {day} | Month : {month} | Year : {year}</p>
                <p>Timeslots :</p>
                <ul>           
                    {this.props.timeslots.map(x => <button>{x}</button>)}
                </ul>
            </Jumbotron>

            <div style={style2}>
                <h2>Product Description</h2>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>

        </div>
        )
    }
}


export default BookInfo;


