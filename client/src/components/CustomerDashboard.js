import Button from "./Button"
import "./styling/CustomerDashCSS.css"

const CustomerDashboard = ({ name }) => {
    return (
        <div className="customerDash">
        
        <div className="dashHead">
            <h2>Welcome {name}!</h2>
            <button>Logout</button>
        </div>

        <h3 className="next">Upcoming Excursions: </h3>
        </div>
    )
  }
  
  export default CustomerDashboard