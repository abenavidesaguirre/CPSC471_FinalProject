import Axios from "axios";
import { useEffect , useState} from "react";
import {excursionDetails} from "../../../components/excursionDetails"
import {Link} from "react-router-dom"
import "./ExcursionInfo.css";

const Canoeing = ({}) => {          //change
    
    const pathname = "/cart/canoeing"         //added stuff here
    const index = 2;                            //change
    const [excursionInfo, setExcursionInfo] = useState([]);
    const name = "Canoeing"            //change

    useEffect(() => {
        Axios.get(
            `http://localhost:3001/excursionInfo/${name}`
            ).then((response) => {
                setExcursionInfo(response.data);
            });
    });

    return (
        <div className='excursionInfoRoot'>
        {excursionInfo.map((val) => {
            return(
                <>
                    <h2>{val.Name}</h2>
                        <div style={{
                            backgroundImage: "url('" + excursionDetails[index].imgURL + "')"}} className='excursionInfo'>
                                <div className='excursionInfoDiv'>
                                    <div className='excursionInfoDivRows'>
                                        <div className='excursionInfoPoints'>
                                            <h4>Cost: ${val.Cost}</h4>
                                            <h4>Duration: {val.Duration} Hours</h4>
                                            <h4>Months: {val.Months}</h4>
                                        </div>
                                        <div className='excursionInfoDescription'>
                                            <p>{excursionDetails[index].description}</p>
                                            <Link to={pathname}>
                                                <div className="bookNowButton">
                                                    <button className="bookNowStyle">Book Now!</button>
                                                </div>
                                                {/* <Button text="Book Now!" buttonType="bookNowButton" buttonStyle="bookNowStyle"></Button> */}
                                            </Link>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                </>
            );
        })} 
      </div>
    );
  }
  
  export default Canoeing           //change