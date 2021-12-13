
import {Link} from "react-router-dom";
import Button from "./Button.js";
import "./styling/ExcursionsCSS.css";


const Excursions = ({excursionList, excursionDescriptions}) => {
        
    return (
     
        <div >
            <h2 className='excursionHeading'> Excursions </h2>
            
            {excursionList.map((val, key) => {
                return (
                    <div className='excursionBlock'>
                        <div className='excursionImg'>
                            <img src={excursionDescriptions[key].imgURL}/>
                        </div>
            
                        <div className='excursion'>
                            <div className='excursionTitle'>
                                <h2>{val.Name}</h2>
                            </div>
                            <div className='excursionDetails'>
                                <h4>Cost: ${val.Cost}</h4>
                                <h4>Duration: {val.Duration}</h4>
                            </div>
                            <div className='excursionDescription'>
                                <p>{excursionDescriptions[key].snip}</p>
                            </div>
                            <div className = "learnMore">
                                <Link to={excursionDescriptions[key].path}>
                                    <Button text="Learn More" buttonStyle="learnMoreButton"/>
                                </Link>
                            </div>

                        </div>
                    </div>
                );
                 } ) }
        
        </div>
    )
}
export default Excursions 