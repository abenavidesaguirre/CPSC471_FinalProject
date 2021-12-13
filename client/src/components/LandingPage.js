import Button from "./Button.js"
import {Link} from "react-router-dom"
import './styling/LandingPageCSS.css'
import {data} from '../App.js'

const LandingPage = ({ booking, excursionList }) => {
    
    return (
      <div className="landing highlight">
        
        <div className="adventure">
          <h1> ADVENTURE </h1>
          </div>
        <div className="adventure">
          <h1>AWAITS</h1>
          </div>
        
        <div className="adventure">
          <h4>WHAT ARE YOU WAITING FOR?</h4>
        </div>
        <div className="adventure">
          <Link to="/excursions">
            <Button text="View All Excursions" buttonType="viewButton"
             buttonStyle="viewButtonStyle"> </Button>
          </Link>
        </div>
        
      </div>
   
    
    )
  }
  
  export default LandingPage