import Form from 'react-bootstrap/Form'
import "./styling/CartExcursionsCSS.css"
import CartExcursions from "./CartExcursions";
import Button from "./Button.js";
import {Link} from "react-router-dom"
import "./styling/CartCSS.css"
import {useState} from 'react'
import Axios from "axios"


const Cart = ({excursionList, excursionDescriptions, excursionIndex, slots}) => {

    const [TimeSlot, setTimeSlot] = useState(slots[0].TimeSlot)
    const [Participants, setNumParticipants] = useState(0);
    const [AgreementSignature, setAgreementSignature] = useState("")
    const [total, setTotal] = useState(excursionList[excursionIndex].Cost);

    const BookingID = "TestID11"
    const NumAdults = 3;                //change in DB?
    const NumMinors = 0;
    const Cost = total;
    // const TimeSlot = "HIKE1"
    const ExcursionName = excursionList[excursionIndex].Name;
    // const Participants = 3;
    const Receipt = "I will pay onsite"
    // const AgreementSignature = "John Smith"
    const CustomerID = 2;                       //get after login



    const [bookingList, setBookingList] = useState([]);
    const [booksList, setBooksList] = useState([]);
    const [makesList, setMakesList] = useState([]);

   
    // console.log(excursionList[excursionIndex].Cost)

    // const updateSubtotal =()=> {

    //     total = document.getElementById("numPart").value * excursionList[excursionIndex].Cost;
    //     console.log(document.getElementById("numPart").value)
    //     console.log(excursionList[excursionIndex].Cost)
    //     console.log("Logging Total: " + total);
    // };

    const updateSubtotal = (e) => {
        setTotal(e.target.value * excursionList[excursionIndex].Cost)
    }

    const updatePart = (e) => {
        setNumParticipants(e.target.value)
    }

    const submitBooking =()=> {
        console.log("Time Slot:" + TimeSlot);
        if(Participants !== 0){
        Axios.post("http://localhost:3001/createBooking", {
            
            BookingID: BookingID,
            NumAdults : NumAdults,
            NumMinors : NumMinors,
            Cost : Cost,
            TimeSlot : TimeSlot,

        }).then(() => {
            setBookingList([
                ...bookingList,
                {
                    BookingID: BookingID,
                    NumAdults : NumAdults,
                    NumMinors : NumMinors,
                    Cost : Cost,
                    TimeSlot : TimeSlot,
                },
            ]);
        });

        Axios.post("http://localhost:3001/Books", {
            BookingID: BookingID,
            ExcursionName: ExcursionName,
            Participants: Participants,
        }).then(() => {
            setBooksList([
                ...booksList,
                {
                    BookingID: BookingID,
                    ExcursionName: ExcursionName,
                    Participants: Participants,
                },
            ]);
        });

        Axios.post("http://localhost:3001/MakesBooking", {
            CustomerID: CustomerID,
            BookingID: BookingID,
            Receipt: Receipt,
            AgreementSignature: AgreementSignature
        }).then(() => {
            setMakesList([
                ...makesList,
                {
                    CustomerID: CustomerID,
                    BookingID: BookingID,
                    Receipt: Receipt,
                    AgreementSignature: AgreementSignature
                },
            ]);
        });
    }
    };

    return (  
        <div className='cartBlock'>
            <div className='cartHeader'>
                <h2>Cart</h2>
            </div>
            <div className='cartExcursionDetails'>
                    <div className='cartExcursionImg'>
                        <img src={excursionDescriptions.imgURL}/>
                    </div>
                    <div className='cartExcursionDetailsText'>
                    <div className='cartExcursionDetailsTitle'>
                        <h3>{excursionList[excursionIndex].Name}</h3>
                    </div>
                    <div className='cartExcursionDetailsDate'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Booking Date: </Form.Label>
                            <Form.Select type="email" placeholder="Email Address" onChange={(event) => {setTimeSlot(event.target.value)}} required>
                                 {slots.map((slots => <option value={slots.TimeSlot}>{slots.Date.substr(0,10)} @ {slots.Start}:00 MST</option>
                                ) 
                                )}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Number of Participants: </Form.Label>
                            <Form.Select id="numPart" type="email" placeholder="Email Address" onChange={(event) => {updateSubtotal(event); updatePart(event)} }  required>
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

                        <h4>Cost Per Person: ${excursionList[excursionIndex].Cost}.00</h4>
                    </div>
                    </div>
                </div>
                 
            <div className='cartFooter'>
            <form>
                <label>
                    I understand the risk associated with the above activities. <br/><br/>I understand the terms and conditions of service: <br/><br/>

                    <input size="40" type="text" name="name" placeholder="Signature" onChange={(event) => {setAgreementSignature(event.target.value)}} required />
                </label>
                            {/* <button onClick={submitBooking()}>Tester Button</button> */}
                    <Button text="Complete Order" buttonType="completeButton" buttonStyle="completeStyle"  onClick={submitBooking()}></Button>
    
            </form>
            <div>
                <h4>Subtotal: ${total}.00</h4>
       
            </div>
            </div>
        </div>
    );
  }
  
  export default Cart

//   (event)=>{setNumParticipants(event.target.value)}

// onChange={(event) => {setTotal(event.target.value * excursionList[excursionIndex].Cost)}}