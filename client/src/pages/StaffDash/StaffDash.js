import  Axios  from "axios"
import {useEffect, useState} from "react"
import "./StaffDash.css"
import { excursionDetails } from "../../components/excursionDetails"
import { useNavigate } from "react-router"

const StaffDash = () => {
    const navigate = useNavigate();
    const [upcomingShift, setUpcomingShift] = useState([]);
    const [staffInfo, setStaffInfo] = useState([]);
    const Username = localStorage.getItem("username");      

    useEffect(()=> {
        if(localStorage.getItem("loggedIn"!=="true") || localStorage.getItem("accessLevel")!=="General Staff"){
            navigate("/");
        }
        Axios.get(`http://localhost:3001/staff/${Username}`)
        .then((response) => {
            setStaffInfo(response.data);
        });
    }, [])

    useEffect(() => {
        Axios.get(`http://localhost:3001/staffShifts/${Username}`)
        .then((response) => {
            setUpcomingShift(response.data);
        });
    }, []);

    return (
        <div className="customerDash">
            <div className="dashHead">
                {staffInfo.map((val) => {
                    return(
                        <div className="customerInfo">
                            <div>
                                <h1>Welcome {val.FirstName} !</h1>
                            </div>
                            <div>
                                <h5>Full Name: {val.FirstName} {val.LastName}</h5>
                                <h5>Address: {val.Address}</h5>
                                <h5>City: {val.City}</h5>
                                <h5>Postal Code: {val.PostalCode}</h5>
                                <h5>Phone Number: {val.PhoneNumber}</h5>
                                
                            </div>
                        </div>
                    );
                })}
            </div>

            <h2 className="next">Upcoming Shifts: </h2>
            {upcomingShift.map((val,key) => {
                return (
                    <div className="upcoming">
                        {/* <h4>Booking ID: {val.BookingID}</h4>   */}
                        <div className="bookingInfo">
                            <div>
                                <p>Shift Date: </p>
                                <h5>{val.Date.substr(0,10)}</h5>
                            </div>
                            <div>
                                <p>Shift Start Time: </p>
                                <h5>{val.Start}:00 MST</h5>
                            </div>
                            <div>
                                <p>Shift End Time: </p>
                                <h5>{val.End}:00 MST</h5>
                            </div>
        
                        </div>
                    </div>                  
                );
            })}
        </div>
    )
  }
  
  export default StaffDash