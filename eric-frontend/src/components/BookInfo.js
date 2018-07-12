import React, { Component } from 'react';
import BookCal from '../pages/BookCal';
import {Button, CardBody, Card, Form, Label, Input} from 'reactstrap';


class BookInfo extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
      }

      onSubmit(e){
        e.preventDefault();
        this.props.onSubmit();
        console.log(this.state)
      }
      
    render(){
        const style = {
            background: "linear-gradient(rgba(120, 120, 120, 120) 1%, rgb(147, 147, 147) 0%, rgba(0, 0, 0, 0) 100%)",
            padding: 20,
        }

        let day = this.props.day;
        let month = this.props.month;
        let year = this.props.year;
        let timeslots = this.props.timeslots;
        let duration = this.props.duration

        return (
        <div>
        
          <Card>

                <CardBody style={style}>
                    
                    <Form>
                    <Label for="day">Day</Label>
                    <Input value={day} name="day" readOnly/>
                    <Label for="month">Month</Label>
                    <Input value={month} name="month" readOnly/>
                    <Label for="year">Year</Label>
                    <Input value={year} name="year" readOnly/>
                    <Label for="duration">Duration</Label>
                    <Input value={duration} name="duration" readOnly/>
                    <Label for="timeslots">Timeslots</Label>
                    <Input type="select" name="timeslots">
                            {timeslots.map(x => <option>{x}</option>)}
                    </Input>
                    <Button color="info" onClick={e => this.onSubmit(e)}>Submit!</Button>
                </Form >
                </CardBody>

                <CardBody>
                    <h2>Product Description</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </CardBody>

            </Card>


            

        </div>
        )
    }
}


export default BookInfo;