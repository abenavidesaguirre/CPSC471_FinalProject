import Button from "./Button.js";
import {Link} from "react-router-dom"
import "./styling/ExcursionInfoCSS.css"

const ExcursionInfo = ({ excursion, excursionDetails, excursionIndex }) => {
    // console.log(excursion);
    const pathname = "/cart" + excursionDetails.path;
    return (
        <div className='excursionInfoRoot'>
        <h2>{excursion[excursionIndex].Name}</h2>
            <div style={{
                backgroundImage: "url('" + excursionDetails.imgURL + "')"}} className='excursionInfo'>
                    <div className='excursionInfoDiv'>
                        <div className='excursionInfoDivRows'>
                            <div className='excursionInfoPoints'>
                                <h4>Cost: ${excursion[excursionIndex].Cost}</h4>
                                <h4>Duration: {excursion[excursionIndex].Duration} Hours</h4>
                                <h4>Months: {excursion[excursionIndex].Months}</h4>
                                <h4>Max. Participants: {excursion[excursionIndex].MaxParticipants}</h4>
                            </div>
                             <div className='excursionInfoDescription'>
                                <p>{excursionDetails.description}</p>
                                <Link to={pathname}>
                                    <Button text="Book Now!" buttonType="bookNowButton" buttonStyle="bookNowStyle"></Button>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
      </div>
    )
  }
  
  export default ExcursionInfo