import Form from 'react-bootstrap/Form'
import "./styling/CartExcursionsCSS.css"

const CartExcursions = ({excursionList, excursionIndex, excursionDescriptions, slots}) => {


    
    return (
                <div className='cartExcursionDetails'>
                    <div className='cartExcursionImg'>
                        <img src={excursionDescriptions.imgURL}/>
                    </div>
                    <div className='cartExcursionDetailsText'>
                    <div className='cartExcursionDetailsTitle'>
                        {/* <h3>{excursionList[excursionIndex].title}</h3> */}
                    </div>
                    <div className='cartExcursionDetailsDate'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Booking Date: </Form.Label>
                            <Form.Select type="email" placeholder="Email Address" required>
                                 <option>Select A Date</option>
                                 {slots.map((slots => <option value={slots.TimeSlot}>{slots.Date.substr(0,10)} @ {slots.Start}:00 MST</option>
                                ) 
                                )}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Number of Participants: </Form.Label>
                            <Form.Select type="email" placeholder="Email Address" required>
                                <option>Select Number of Participants</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>

                        <h4>Cost: $Hardcode.00</h4>
                    </div>
                    </div>
                </div>
    )
  }
  
  export default CartExcursions


  //dates are currently hard coded