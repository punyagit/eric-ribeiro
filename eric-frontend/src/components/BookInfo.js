import React, { Component } from 'react';
import { Row, Col, Button, CardImg, CardBody, Card, Form, Label, Input} from 'reactstrap';

class BookInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // day: "",
            // month: "",
            // year: "",
            // duration: "",
            selectedTime: "Not Selected",
            isActive: true, 
            collapse: false
            //productName: "",
            //price:""
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
            isActive: false
        })
    }
    
    postOrder(){
        let orderConfirmation = {
            productName: this.props.productName,
            price: this.props.price,
            date:`${this.props.day}/${this.props.month}/${this.props.year}`,
            time:this.state.selectedTime,
            duration: this.props.duration
        }
        // var data = new FormData();
        // data.append( "json", JSON.stringify( orderConfirmation ) );
        
        fetch("http://localhost:8081/orders",{
        method: "POST",
        body: JSON.stringify({orderConfirmation})
    })
    //.then(function(resp){ return resp.json(); })
    .then(function(orderConfirmation){   })
    console.log(orderConfirmation)
}


render(){
    
    
    
    const style = {
        background: "linear-gradient(rgba(120, 120, 120, 120) 1%, rgb(147, 147, 147) 0%, rgba(0, 0, 0, 0) 100%)",
    }
    
    let day = this.props.day
    let timeslot = this.props.timeslot
    let month = this.props.month
    let year = this.props.year
    let duration = this.props.duration
    let productName = this.props.productName
    let price = this.props.price
    let available = this.props.available
    
    
    
    return (
    <Card>

        <h2>Booking Confirmation</h2>
            <CardBody>

            <Row>
                <Col style={{textAlign: 'left'}}>
                    <p><strong>Product :</strong> {productName}</p>
                    <p><strong>Amount :</strong> {price}</p>
                    <p><strong>Date :</strong> {day}/{month}/{year}</p>
                    <p><strong>Selected Duration :</strong> {duration}</p>
                    <p><strong>Selected Timeslot :</strong> {this.state.selectedTime}</p>
                    <Button onClick={f => this.postOrder()} color="success" disabled={this.state.isActive}>Book Now</Button>
                </Col>
            
                <Col style={{textAlign: 'left'}}>
                    <p>{available}</p>
                    {timeslot.map(x => 
                        <Button outline color="secondary" style={{width:100}} value={x} onClick={e => this.selectTime(e)}> {x} </Button>
                    )}
                </Col>
                
            </Row>
            </CardBody>
    
    </Card>   
    )
}
}





export default BookInfo;
