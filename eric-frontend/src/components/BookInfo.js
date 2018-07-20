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
            timeslots: ["timeslot placeholder"],
            duration: "",
            collapse: false
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
            // timeslots: this.props.timeslots
        })
        // e.preventDefault()
        this.props.onSubmit(this.state);
      }

      selectTime(e){
          this.setState({
              selectedTime: e.target.value
          })
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
                           {/* <Input onChange={e => this.change(e)} defaultValue={duration} name="duration"/>
                            {/* <Input onChange={e => this.change(e)} type="select" name="timeslots">
                                    {timeslots.map(x => <option value={x}>{x}</option>)}
                            </Input> 
                            <Button color="info" onClick={e => this.onSubmit()}>Submit!</Button>*/}
                        </Form>
                    </Col>

                    <Col>
                        <Card>
                            {/* <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
                            <CardBody>
                                <h2>Booking Confirmation</h2>
                                <p>Date of booking : {day}/{month}/{year}</p>
                                <p>Selected Duration : {this.state.selectedTime}</p>
                                <p>Selected Time of Booking</p>
                                

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