
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
            
            fetch("/orders",{
                headers: {
                    "Content-Type": "application/json", 
                 },
                 method: "POST",
                 body: JSON.stringify(orderConfirmation),
             
            })
            // .then(resp => resp.json())
            // .then((data) => console.log(data.productName))
        }


render(){
    
    
    
    
    let day = this.props.day
    let timeslot = this.props.timeslot
    let month = this.props.month
    let year = this.props.year
    let duration = this.props.duration
    let productName = this.props.productName
    let price = this.props.price
    let available = this.props.available


    // let selectStyle = '';
    

    // if(available === 'Not Selected'){
    //     selectStyle = {
    //         color: '#212529'
    //     }
    // }else{
    //     selectStyle = {
    //         color: '#d3d3d3'
    //     }
    // }


    
    
    return (
    <Card>

        <CardBody><h2>Booking Confirmation</h2></CardBody>

        <CardBody>
            <Row>

                    <Col style={{textAlign: 'left', border: '1px solid #D3D3D3', padding: 10}}>
                            <p><strong>Product :</strong> {productName}</p>
                            <p><strong>Amount :</strong> {price}</p>
                            <p><strong>Date :</strong> {day}/{month}/{year}</p>
                            <p><strong>Selected Duration :</strong> {duration}</p>
                            <p><strong>Selected Timeslot :</strong> {this.state.selectedTime}</p>
                            <Button onClick={f => this.postOrder()} color="success" disabled={this.state.isActive}>Book Now</Button>
                    </Col>
                    <Col sm="6" style={{textAlign: 'left'}} >
                        <h3>{available}</h3>
                        {timeslot.map(x => 
                            <Button outline color="secondary" style={{width:'50%'}} value={x} onClick={e => this.selectTime(e)}> {x} </Button>
                        )}
                </Col>
                
            </Row>
        </CardBody>
    
    </Card>   
    )
}
}





export default BookInfo;