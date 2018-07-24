import React, { Component } from 'react';
//import BookCal from '../pages/BookCal';
import { Row, Col, Button, CardImg, CardBody, Card, Form, Label, Input} from 'reactstrap';
import '../pages/BookCal.css'




class BookInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // day: "",
            // month: "",
            // year: "",
            // duration: "",
            selectedTime: "Please choose a Time and date",
            val: "",
            collapse: false,
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
          this.setState({selectedTime: e.target.value})
          this.setState({val:"BookNOw"})
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
                headers: {
                    "Content-Type": "application/json", 
                 },
                 method: "POST",
                 body: JSON.stringify(orderConfirmation),
             
            })
            .then(resp => resp.json())
            .then((data) => console.log(data.productName))
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
        let price = this.props.price

        

        return (
        <div>
        {/* forcing bootstrap in it... */}
          <div className="container-fluid">
                <Row>

                    <Col style={style}>
                        
                        

                         {timeslot.map(x => 
                                    <Button className = "button-style" value={x} onClick={e => this.selectTime(e)}> {x} </Button>
                                    )
                                }
                           
                        
                    </Col>

                    <Col>
                        <Card>
                            {/* <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
                            <CardBody>
                                
                                <h2>Booking Confirmation</h2>
                                <p>product: {productName}</p>
                                <p>Amount :{price}</p>
                                <p>Date of booking : {day}/{month}/{year}</p>
                                <p>Selected Duration : {duration}</p>
                                <p>Selected Time of Booking:{this.state.selectedTime}</p>
                                <form>
                                <Button onClick = {f => this.postOrder()}>{this.state.val}</Button>
                                </form>
                                
 
                                

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




// {
//     productName: this.props.productName,
//     price: this.props.price,
//     date:`${this.props.day}/${this.props.month}/${this.props.year}`,
//     time:this.state.selectedTime,
//     duration: this.props.duration
// }