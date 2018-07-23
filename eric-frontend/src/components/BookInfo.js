import React, { Component } from 'react';
//import BookCal from '../pages/BookCal';
import { Row, Col, Button, CardImg, CardBody, Card, Form, Label, Input} from 'reactstrap';




class BookInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: "",
            month: "",
            year: "",
            duration: "",
            selectedTime: "Please choose a Time and date",
            val: "",
            collapse: false,
            productName: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
      }

      change(e){
          this.setState({
              [e.target.name]: e.target.value
          })
      }

      onSubmit(){
        this.setState({
            day: this.props.day,
            month: this.props.month,
            year: this.props.year,
            duration: this.props.duration,
            //timeslots: this.props.timeslots
        })
        // e.preventDefault()
        this.props.onSubmit(this.state);
      }

      selectTime(e){
          this.setState({
              selectedTime: e.target.value,
              
          })
          this.setState({val:"BookNOw"})
          
        
      }
      
      
    render(){

        

        const style = {
            background: "linear-gradient(rgba(120, 120, 120, 120) 1%, rgb(147, 147, 147) 0%, rgba(0, 0, 0, 0) 100%)",
        }

        let day = this.props.day;
        let timeslot = this.props.timeslot;
        let month = this.props.month;
        let year = this.props.year;
        let duration = this.props.duration
        let productName = this.props.productName
        console.log(productName)
        

        return (
        <div>
        {/* forcing bootstrap in it... */}
          <div className="container-fluid">
                <Row>

                    <Col style={style}>
                        
                        <Form>

                                {timeslot.map(x => 
                                    <Button value={x} onClick={e => this.selectTime(e)}> {x} </Button>
                                    )
                                }
                           
                        </Form>
                    </Col>

                    <Col>
                        <Card>
                            {/* <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
                            <CardBody>
                                
                                <h2>Booking Confirmation</h2>
                                <p>product: {productName}</p>
                                <p>Date of booking : {day}/{month}/{year}</p>
                                <p>Selected Duration : {duration}</p>
                                <p>Selected Time of Booking:{this.state.selectedTime}</p>
                                <button>{this.state.val}</button>
                               
 
                                

                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </div>

        </div>

        )
        
    }
   
}





export default BookInfo;