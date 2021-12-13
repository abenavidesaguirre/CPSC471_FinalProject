import Button from "./Button.js";
import {Link} from "react-router-dom"
import "./styling/ExcursionInfoCSS.css"

const ExcursionInfo = ({ excursion }) => {
    return (
        <div className='excursionInfoRoot'>
        <h2>{excursion.title}</h2>

            <div style={{
                backgroundImage: "url('" + excursion.imgUrl + "')"}} className='excursionInfo'>
                    <div className='excursionInfoDiv'>
                        <div className='excursionInfoDivRows'>
                            <div className='excursionInfoPoints'>
                                <h4>Cost: ${excursion.cost}</h4>
                                <h4>Duration: {excursion.duration}</h4>
                                <h4>Seasons: {excursion.seasons}</h4>
                                <h4>Ages: {excursion.ages}</h4>
                                <h4>Max. Participants: {excursion.maxPpl}</h4>
                            </div>
                             <div className='excursionInfoDescription'>
                                <p>{excursion.dp1}</p>
                                <p>{excursion.dp2}</p>
                                <p>{excursion.dp3}</p>
                                <Link to="/cart">
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