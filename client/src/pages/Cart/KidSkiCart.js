import Form from 'react-bootstrap/Form'
import { useNavigate } from "react-router-dom"
import "./Cart.css"
import { useState, useEffect } from 'react'
import Axios from "axios"
import { excursionDetails } from '../../components/excursionDetails'



const KidSkiCart = () => {

    const navigate = useNavigate();
    const [excursionInfo, setExcursionInfo] = useState([]);
    const [customerID, setCustomerID] = useState([])            //new
    const customerUser = localStorage.getItem("username")       //new
    const [timeSlots, setTimeSlots] = useState([]);


    const name = "Kids Ski Lessons"
    const index = 4;

    useEffect(() => {

        if(localStorage.getItem("loggedIn")==="false"){
            navigate("/login");
        }

        Axios.get(
            `http://localhost:3001/excursionInfo/${name}`
        ).then((response) => {
            setExcursionInfo(response.data);
        });
        Axios.get(                                                          //new
            `http://localhost:3001/customer/${customerUser}`
        ).then((response) => {
            setCustomerID(response.data)
        });
        Axios.get(
            `http://localhost:3001/timeSlots/${name}`)
            .then((response) => {
                setTimeSlots(response.data);
        });
    }, []);

      
    var costPerPerson;

    excursionInfo.map((val) => {
        costPerPerson = val.Cost;
    })

    const [bookingList, setBookingList] = useState([]);
    const [booksList, setBooksList] = useState([]);
    const [makesList, setMakesList] = useState([]);

    const [total, setTotal] = useState(0);
    const [numMinors, setNumMinors] = useState(0);
    const [numAdults, setNumAdults] = useState(0);
    const [numParticipants, setNumParticipants] = useState(0);
    

    const viewUpdateSubtotal = (e) => {
        e.preventDefault();
        updateParticipants();
        const tot = (parseInt(numMinors) + parseInt(numAdults)) * costPerPerson
        console.log("Printing: " + tot)
        setTotal(tot)
    }

    const updateSubtotal = () => {
        const tot = (parseInt(numMinors) + parseInt(numAdults)) * costPerPerson
        console.log("Printing: " + tot)
        setTotal(tot)
        updateParticipants();
    }

    const updateParticipants = () => {
        const part = parseInt(numMinors) + parseInt(numAdults);
        setNumParticipants(part)
    }

    function makeID(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }

    const [chosenTimeSlot, setChosenTimeSlot] = useState("null");
    const bookingID = makeID(8);
    const cost = total
    const [agreement, setAgreement] = useState("");
    const receipt = "I agree to pay the total cost onsite"



    const submitBooking = (e) => {
            var custID                      //new
            customerID.map((val) => {
                custID = val.CustomerID
            })
            e.preventDefault();
            updateSubtotal();
            updateParticipants();
            console.log("Time Slot:" + chosenTimeSlot);
            console.log("BookingID:" + bookingID);
            console.log("Cost:" + cost);
            console.log("Participants:" + numParticipants);
            console.log("Agreement Signature:" + agreement);
            console.log("Minors: " + numMinors);
            console.log("Adults: " + numAdults);
            console.log("Total: " + total)


            if(numParticipants !== 0 && chosenTimeSlot != "null"){
                if(numAdults!=0 || numMinors!=0){
            Axios.post("http://localhost:3001/createBooking", {

                bookingID: bookingID,
                numAdults : numAdults,
                numMinors : numMinors,
                cost : cost,
                chosenTimeSlot : chosenTimeSlot,

            }).then(() => {
                setBookingList([
                    ...bookingList,
                    {
                        bookingID: bookingID,
                        numAdults : numAdults,
                        numMinors : numMinors,
                        cost : cost,
                        chosenTimeSlot : chosenTimeSlot,
                    },
                ]);
            });

            Axios.post("http://localhost:3001/Books", {
                bookingID: bookingID,
                name: name,
                numParticipants: numParticipants,
            }).then(() => {
                setBooksList([
                    ...booksList,
                    {
                        bookingID: bookingID,
                        name: name,
                        numParticipants: numParticipants,
                    },
                ]);
            });

            Axios.post("http://localhost:3001/MakesBooking", {
                customerID: custID,
                bookingID: bookingID,
                receipt: receipt,
                agreement: agreement
            }).then(() => {
                setMakesList([
                    ...makesList,
                    {
                        customerID: custID,
                        bookingID: bookingID,
                        receipt: receipt,
                        agreement: agreement
                    },
                ]);
            });
            navigate("/bookingConf")
        }
    }
    };

    return (
        <div className='cartBlock'>
            <div className='cartHeader'>
                <h2>Cart</h2>
            </div>
            {excursionInfo.map((val, key) => {
                return (
                    <>
                        <div className='cartExcursionDetails'>
                            <div className='cartExcursionImg'>
                                <img src={excursionDetails[index].imgURL} />
                            </div>
                            <div className='cartExcursionDetailsText'>
                                <div className='cartExcursionDetailsTitle'>
                                    <h3>{val.Name}</h3>
                                </div>
                                <div className='cartExcursionDetailsDate'>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Booking Date: </Form.Label>
                                            <Form.Select type="email" placeholder="Email Address" onChange={(e)=>setChosenTimeSlot(e.target.value)} required>
                                                <option value="null">Date and Time</option>
                                                {timeSlots.map((timeSlots => <option value={timeSlots.TimeSlot}>{timeSlots.Date.substr(0, 10)} @ {timeSlots.Start}:00 MST</option>
                                                )
                                                )}
                                            </Form.Select>
                                        </Form.Group>
                                        <div className="participants">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Number of Adults: </Form.Label>
                                                <Form.Select id="numPart" type="email" placeholder="Email Address" onChange={(e)=>setNumAdults(e.target.value)} required>
                                                    <option value="0" >0</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Number of Minors: </Form.Label>
                                                <Form.Select id="numPart" type="email" placeholder="Email Address" onChange={(e) => setNumMinors(e.target.value)} required>
                                                    <option value="0" >0</option>
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
                                        </div>
                                    </Form>

                                    <h4>Cost Per Person: ${val.Cost}.00</h4>
                                </div>
                            </div>
                        </div>


                    </>
                );
            })};
            <div className='cartFooter'>
                <form>
                    <label>
                        I understand the risk associated with the above activities. <br /><br />I understand the terms and conditions of service: <br /><br />

                        <input size="40" type="text" name="name" placeholder="Signature" onChange={(e)=>setAgreement(e.target.value)}required />
                    </label>
                        <div className="completeButton">
                            <button className="completeStyle" onClick={(e)=>submitBooking(e)} >Complete Order</button>
                        </div>
                </form>
                <div className="subtotal">
                    <div className="recalculate">
                        <button className="recalculateButton" onClick={(e)=>viewUpdateSubtotal(e)}>Update Total Cost</button>
                    </div>
                <h4>Subtotal: ${total}.00</h4>

                </div>
            </div>
        </div>
    );
}

export default KidSkiCart
