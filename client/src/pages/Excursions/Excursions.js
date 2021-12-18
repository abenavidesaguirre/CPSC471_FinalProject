
import {Link} from "react-router-dom";
import "./Excursions.css";
import { excursionDetails } from "../../components/excursionDetails";
import { useState, useEffect } from "react";
import Axios from "axios";




const Excursions = ({}) => {
    const [excursionList, setExcursionList] = useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:3001/excursions').then((response) => {
        setExcursionList(response.data);
        });
    }, []);
            
    return (
     
        <div >
            <h2 className='excursionHeading'> Excursions </h2>
            
            {excursionList.map((val, key) => {
                return (
                    <div className='excursionBlock'>
                        <div className='excursionImg'>
                            <img src={excursionDetails[key].imgURL}/>
                        </div>
            
                        <div className='excursion'>
                            <div className='excursionTitle'>
                                <h2>{val.Name}</h2>
                            </div>
                            <div className='excursionDetails'>
                                <h4>Cost: ${val.Cost}</h4>
                                <h4>Duration: {val.Duration} Hours</h4>
                            </div>
                            <div className='excursionDescription'>
                                <p>{excursionDetails[key].snip}</p>
                            </div>
                            <div className = "learnMore">
                                {console.log(excursionDetails[key].path)}
                                <Link to={excursionDetails[key].path}>
                                    <div className="learnMore">
                                        <button className="learnMoreButton">Learn More</button>
                                    </div>
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