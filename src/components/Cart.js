
import CartExcursions from "./CartExcursions";
import Button from "./Button.js";
import {Link} from "react-router-dom"
import "./styling/CartCSS.css"

// const enableCompletion =(linkID)=>{
//     document.getElementById(linkID).disabled = "false";
// }

const Cart = ({ booking, excursionList, bookingIndex, excursionIndex }) => {
       
    return (  
        <div className='cartBlock'>
            <div className='cartHeader'>
                <h2>Cart</h2>
                <h3>{booking[bookingIndex].bookingFName} {booking[bookingIndex].bookingLName}</h3>
            </div>
                <CartExcursions booking={booking} excursionList={excursionList}
                                bookingIndex={bookingIndex} excursionIndex={excursionIndex}/>
                
            <div className='cartFooter'>
            <form>
                <label>
                    I understand the risk associated with the above activities. <br/><br/>I understand the terms and conditions of service: <br/><br/>

                    <input size="40" type="text" name="name" placeholder="Signature" required />
                </label>
                <Link id="bookingConfButton" to="/bookingConf" disabled>
                    <Button type="submit" text="Complete Order" buttonType="completeButton" buttonStyle="completeStyle" disabled></Button>
                </Link>
            </form>
            <div>
                <h4>Subtotal: ${booking[bookingIndex].cost}.00</h4>
                {/* put this in the same form as the input and make an onclick function */}
            </div>
            </div>
        </div>
    );
  }
  
  export default Cart

  



    