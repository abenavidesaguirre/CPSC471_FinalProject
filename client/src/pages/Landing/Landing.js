import {useEffect} from "react"
import {Link} from "react-router-dom"
import './Landing.css'

const LandingPage = () => {
    
    useEffect(() => {
      if (!localStorage.getItem("loggedIn")) {
        localStorage.setItem("loggedIn", false);
      }
    }, []);

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
            <div className="viewButton">
              <button className = "viewButtonStyle">View All Excursions</button>
            </div>
          </Link>
        </div>
        
      </div>
   
    
    )
  }
  
  export default LandingPage