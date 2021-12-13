import Form from 'react-bootstrap/Form'
import "./styling/CartExcursionsCSS.css"
import CartExcursions from "./CartExcursions";
import Button from "./Button.js";
import {Link} from "react-router-dom"
import "./styling/CartCSS.css"
import {useState} from 'react'
import Axios from "axios"


const Cart = ({excursionList, excursionDescriptions, excursionIndex, slots}) => {

    const BookingID = Math.random().toString(5).replace(/[a-z]+/g, '').substring(0,5);
    // const ExcursionName = excursionList[excursionIndex].Name;
    const [Participants, setParticipants] = useState([]);

    
    const [bookingList, setBookingList] = useState([]);
    const [total, setTotal] = useState(excursionList[excursionIndex].Cost);
   

    const updateSubtotal =()=> {

        // total = document.getElementById("numPart").value * excursionList[excursionIndex].Cost;
        console.log(document.getElementById("numPart").value)
        // console.log(excursionList[excursionIndex].Cost)
        console.log("Logging Total: " + total);
    };

    // const submitBooking =()=> {
    //     Axios.post("http://localhost:3001/createBooking", {
    //         BookingID: BookingID,
    //         ExcursionName: ExcursionName,
    //         Participants: Participants,
    //     }).then(() => {
    //         setBookingList([
    //             ...bookingList,
    //             {
    //                 BookingID: BookingID,
    //                 ExcursionName: ExcursionName,
    //                 Participants: Participants,
    //             },
    //         ]);
    //     });
    // };

    return (  
        <div className='cartBlock'>
            <div className='cartHeader'>
                <h2>Cart</h2>
            </div>
            <div className='cartExcursionDetails'>
                    <div className='cartExcursionImg'>
                        {/* <img src={excursionDescriptions.imgURL}/> */}
                    </div>
                    <div className='cartExcursionDetailsText'>
                    <div className='cartExcursionDetailsTitle'>
                        {/* <h3>{excursionList[excursionIndex].Name}</h3> */}
                    </div>
                    <div className='cartExcursionDetailsDate'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Booking Date: </Form.Label>
                            <Form.Select type="email" placeholder="Email Address" required>
                                 {slots.map((slots => <option value={slots.TimeSlot}>{slots.Date.substr(0,10)} @ {slots.Start}:00 MST</option>
                                ) 
                                )}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Number of Participants: </Form.Label>
                            <Form.Select id="numPart" type="email" placeholder="Email Address"  required>
                                <option value="1" >1</option>
                                <option value="2" >2</option>
                                <option value="3" >3</option>
                                <option value="4" >4</option>
                                <option value="5" >5</option>
                                <option value="6" >6</option>
                                <option value="7" >7</option>
                                <option value="8" >8</option>
                                <option value="9" >9</option>
                                <option value="10" >10</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>

                        {/* <h4>Cost Per Person: ${excursionList[excursionIndex].Cost}.00</h4> */}
                    </div>
                    </div>
                </div>
                 
            <div className='cartFooter'>
            <form>
                <label>
                    I understand the risk associated with the above activities. <br/><br/>I understand the terms and conditions of service: <br/><br/>

                    <input size="40" type="text" name="name" placeholder="Signature" required />
                </label>
                    <Button type="submit" text="Complete Order" buttonType="completeButton" buttonStyle="completeStyle" ></Button>
    
            </form>
            <div>
                <h4>Subtotal: ${total}.00</h4>
       
            </div>
            </div>
        </div>
    );
  }
  
  export default Cart

//   onClick={submitBooking()}



    