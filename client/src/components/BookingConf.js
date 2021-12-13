import CartExcursions from "./CartExcursions"
import "./styling/BookingConfCSS.css"

const BookingConf = ({ booking, excursionList, bookingIndex, excursionIndex }) => {
    return (

        <div className='bookingConfBlock'>
            <div className='bookingConfHeader'>
                <h2>Thank You!</h2>
                <h3>Your Booking Has Been Confirmed!</h3>
                <h4>Booking ID: {booking[bookingIndex].bookingid}</h4>
            </div>
            <CartExcursions booking={booking} excursionList={excursionList}
                bookingIndex={bookingIndex} excursionIndex={excursionIndex} />
        </div>

    )
}

export default BookingConf