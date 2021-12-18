import {Link} from "react-router-dom"
import "./BookingConf.css"

const BookingConf = () => {
    return (

        <div className='bookingConfBlock'>
            <div className='bookingConfHeader'>
                <h2>Thank You!</h2>
                <h3>Your Booking Has Been Confirmed!</h3>
                <div className="homeButton">
                    <Link to="/">
                        <button className="homeStyle">Return Home</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default BookingConf