import  Axios  from "axios"
import {useEffect, useState} from "react"
import "./CustomerDash.css"
import { excursionDetails } from "../../components/excursionDetails"
import { useNavigate } from "react-router"

const CustomerDash = () => {
    const navigate = useNavigate();
    const [upcomingExc, setUpcomingExc] = useState([]);
    const [customerInfo, setCustomerInfo] = useState([]);
    const Username = localStorage.getItem("username");      

    useEffect(()=> {
        if(localStorage.getItem("loggedIn")!=="true" || localStorage.getItem("accessLevel")!=="Customer"){
            navigate("/")
        }
        Axios.get(`http://localhost:3001/customer/${Username}`)
        .then((response) => {
            setCustomerInfo(response.data);
        });
    }, [])

    useEffect(() => {
        Axios.get(`http://localhost:3001/customerExcursions/${Username}`)
        .then((response) => {
            setUpcomingExc(response.data);
        });
    }, []);

    return (
        <div className="customerDash">
            <div className="dashHead">
                {customerInfo.map((val) => {
                    return(
                        <div className="customerInfo">
                            <div>
                                <h1>Welcome {val.FirstName} !</h1>
                            </div>
                            <div>
                                <h5>Full Name: {val.FirstName} {val.LastName}</h5>
                                <h5>Address: {val.Address}</h5>
                                <h5>City: {val.City}</h5>
                                <h5>Country: {val.Country}</h5>
                                <h5>Postal Code: {val.PostalCode}</h5>
                                <h5>Phone Number: {val.PhoneNumber}</h5>
                                
                            </div>
                        </div>

                    );
                })}
            </div>

            <h2 className="next">Upcoming Excursions: </h2>
            {upcomingExc.map((val,key) => {
                return (
                    <div className="upcoming">
                        <h4>Booking ID: {val.BookingID}</h4>  
                        <div className="bookingInfo">
                            <div>
                                <p>Excursion Name: </p>
                                <h5>{val.ExcursionName}</h5>
                            </div>
                            <div>
                                <p>Date: </p>
                                <h5>{val.Date.substr(0, 10)}</h5>
                            </div>
                            <div>
                                <p>Time: </p>
                                <h5>{val.Start}:00 MST</h5>
                            </div>
                            <div>
                                <p>Participants: </p>
                                <h5>{val.Participants}</h5>
                            </div>
                            <div>
                                <p>Cost: </p>
                              
                                <h5>${val.Cost}.00</h5>
                            </div>

                        </div>
                    </div>                  
                );
            })}
        </div>
    )
  }
  
  export default CustomerDash