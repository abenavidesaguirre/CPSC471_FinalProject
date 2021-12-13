import Button from "./Button.js";
import {Link} from "react-router-dom"
import "./styling/ExcursionCSS.css"

const Excursion = ({ excursion }) => {
    
    return (
      
        <div className='excursionBlock'>
            <div className='excursionImg'>
                <img src={excursion.imgUrl}/>
            </div>
   
            <div className='excursion'>
                <div className='excursionTitle'>
                    <h2>{excursion.title}</h2>
                </div>
                <div className='excursionDetails'>
                    <h4>Cost: ${excursion.cost}</h4>
                    <h4>Duration: {excursion.duration}</h4>
                </div>
                <div className='excursionDescription'>
                    <p>{excursion.tag}</p>
                </div>
                <div className = "learnMore">
                    <Link to={excursion.path}>
                        <Button text="Learn More" buttonStyle="learnMoreButton"/>
                    </Link>
                </div>

            </div>
        </div>
      
    );
  }
  export default Excursion