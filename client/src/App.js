import Header from './components/Header';
import Excursions from './components/Excursions';
import ExcursionInfo from './components/ExcursionInfo';
import Cart from './components/Cart';
import Form from 'react-bootstrap/Form'


import Button from "./components/Button.js";
import {Link} from "react-router-dom"
import "./components/styling/CartCSS.css"
import {useState} from 'react'
import Axios from "axios"

import {useEffect } from 'react';
import CalendarPage from './components/CalendarPage';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import CustomerDashboard from './components/CustomerDashboard';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {

  const [eventTimes] = useState([
    { title: '2 Hour Guided Hike', start: '2022-01-16T8:00:00', end: '2022-01-16T10:00:00' },
    { title: 'Ice Skating', start: '2022-01-03T13:00:00', end: '2022-01-03T16:00:00' },
    { title: 'Adult Ski Lessons', start: '2022-01-07T8:00:00', end: '2022-01-07T16:00:00' },
    { title: 'Kids Ski Lessons', start: '2022-01-12T10:00:00', end: '2022-01-12T14:00:00' }
  ])
  const [excursionDescriptions] = useState([
    {   imgURL: 'https://i.imgur.com/LmF0aVw.jpg',
        snip: 'Take a journey through the Canadian wilderness with our expert tour guides. You never know what you might see in your own backyard!',
        description:'Join our expert tour guides in this one-of-a-kind 5km hike through the Canadian wilderness. Every path leads to a different destination, so our hikes are sure to keep you coming back for more. The hikes are fairly moderate, so most adults are fully capable of embarking on this hike. Children are welcome, however the length of hike can be challenging. Our winter and summer hikes are quite different, as you can see different scenery during each season. This hike also includes a classic picnic lunch. Be sure to book this one soon, as it is a popular choice!', 
        path: '/hiking'
    },
    {   imgURL: 'https://i.imgur.com/AP7pSHG.jpg',
        snip: 'This 8-hour ski lesson will take you to the tops of the mountain peaks and then traverse through the mountain terrain as you ski down the slopes. The views from the top are one-of-a-kind!',
        description:'This set of ski lessons is designed for mature skiers. Our 8 hour lesson covers the basics and will be sure to get you comfortable on the hill.  Our lessons are run at Sunshine Village where there are many different levels of runs for all skills and abilities. Be sure to check the forecast before you come and be prepared for lots of powder! Ski rentals are not included, however, lunch is included at the village restaurant.', 
        path: '/adultski'
    },
    {   imgURL: 'https://i.imgur.com/TIu5EON.jpg',
        snip: 'Travel down the tranquil mountain rivers in a canoe for two while listening to stories about Canada and its heritage. No experience is needed!',
        description:'Enjoy the tranquil mountain waters of Canada while canoeing around Lake Louise. Our canoeing tour guides will tell you stories about legendary Canadians while on your journey. This excursion is perfect for adventure seekers, as you will be sure to see new places and meet new faces. This excursion includes some Indigenous snacks as well, so be sure to sign up for this excursion if you would like to learn more about Canada\'s heritage.', 
        path: '/canoeing'
    },
    {   imgURL: 'https://i.imgur.com/s7wSPDg.jpg',
        snip: 'Enjoy ice skating on Lake Louise with your friends and family. This excursion is catered towards families who want to enjoy beautiful views while having a fun-filled day',
        description:'Feel the breeze of the mountain air and take in the breathtaking scenery as you skate around Lake Louise. This excursion is ideal for any age, and skate rentals are included in the price of your ticket. Hoping to play ice hockey on the lake? We have sticks available for rental and there are surely others who will play along with you. At the end of your skate, take a break near our bonfire  by the lake and enjoy a cup of homemade hot chocolate from a local vendor. Please dress appropriately for this excursion as there can be gusty winds in the valley.', 
        path: '/skating'
    },
    {   imgURL: 'https://i.imgur.com/WL3q1uH.jpg',
        snip: 'This 4-hour kids ski lesson will teach your kids the basics of skiing and help them gain confidence on the ski hill. They will get to experience a slice of freedom while being supervised by our experienced instructors.',
        description:'This half-day ski lesson for kids is designed for beginner skiers. It will help them gain confidence on the hill and learn the basics of skiing. Our kids lessons are run on the green runs at Sunshine Village by our expert ski instructors. Your child will get to meet other new skiers and experience the thrills of skiing on a mountain while prioritizing safety. Sign up soon, as this excursion fills up quickly!', 
        path: '/kidSki'
    },
    {   imgURL: 'https://i.imgur.com/2Jtfqy3.jpg',
        snip: 'Strap on some snowshoes and trvel through the Canadian Rockies while learning about and looking for wildlife. This excursion is designed for any age and ability, so sign up today!',
        description:'Explore the Canadian Rockies while travelling through snowbanks and snowy fields. Learn about the different mountain animals as you journey through the snow and keep an eye out to see if you can spot any of them! This activity is sure to be enjoyed by any age and any skill level. There will be a stop halfway at a local shop where you can pick up some Canadian curiosities, or stop and have lunch. Book your snowshoeing journey now!', 
        path: '/snowshoeing'
    }
  ])

  const [excursionList, setExcursionList] = useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:3001/excursions').then((response) => {
      setExcursionList(response.data);
    });
  }, []);

  const [hikingSlots, setHikingSlots] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/hikingSlots').then((response) => {
          setHikingSlots(response.data);
    });
  }, []);

  
  const [aSkiingSlots, setASkiingSlots] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/adultSkiingSlots').then((response) => {
          setASkiingSlots(response.data);
    });
  }, []);

  const [canoeingSlots, setCanoeingSlots] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/canoeingSlots').then((response) => {
          setCanoeingSlots(response.data);
    });
  }, []);

  const [skatingSlots, setSkatingSlots] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/skatingSlots').then((response) => {
          setSkatingSlots(response.data);
    });
  }, []);


  const [kSkiingSlots, setKSkiingSlots] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/kidSkiingSlots').then((response) => {
          setKSkiingSlots(response.data);
    });
  }, []);

  const [snowshoeingSlots, setSnowshoeingSlots] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/snowshoeingSlots').then((response) => {
          setSnowshoeingSlots(response.data);
    });
  }, []);




  const BookingID = "TestID12"
  const NumAdults = 3;                //change in DB?
  const NumMinors = 0;
  const Cost = 35;
  const TimeSlot = "HIKE1"
  const ExcursionName = "2 Hour Guided Hike";
  const Participants = 3;
  const Receipt = "I will pay onsite"
  const AgreementSignature = "John Smith"
  const CustomerID = 2;                       //get after login


  const [bookingList, setBookingList] = useState([]);
  const [booksList, setBooksList] = useState([]);
  const [makesList, setMakesList] = useState([]);

  Axios.post("http://localhost:3001/createBooking", {
            
            BookingID: BookingID,
            NumAdults : NumAdults,
            NumMinors : NumMinors,
            Cost : Cost,
            TimeSlot : TimeSlot,

        }).then(() => {
            setBookingList([
                ...bookingList,
                {
                    BookingID: BookingID,
                    NumAdults : NumAdults,
                    NumMinors : NumMinors,
                    Cost : Cost,
                    TimeSlot : TimeSlot,
                },
            ]);
        });

        Axios.post("http://localhost:3001/Books", {
            BookingID: BookingID,
            ExcursionName: ExcursionName,
            Participants: Participants,
        }).then(() => {
            setBooksList([
                ...booksList,
                {
                    BookingID: BookingID,
                    ExcursionName: ExcursionName,
                    Participants: Participants,
                },
            ]);
        });

        Axios.post("http://localhost:3001/MakesBooking", {
            CustomerID: CustomerID,
            BookingID: BookingID,
            Receipt: Receipt,
            AgreementSignature: AgreementSignature
        }).then(() => {
            setMakesList([
                ...makesList,
                {
                    CustomerID: CustomerID,
                    BookingID: BookingID,
                    Receipt: Receipt,
                    AgreementSignature: AgreementSignature
                },
            ]);
        });

        const submitBooking =()=> {
          console.log("Time Slot:" + TimeSlot);
          console.log("BookingID:" + BookingID);
          console.log("Cost:" + Cost);
          console.log("Participants:" + Participants);
          console.log("Agreement Signature:" + AgreementSignature);
  
          if(Participants !== 0){

            Axios.post("http://localhost:3001/Books", {
              BookingID: BookingID,
              ExcursionName: ExcursionName,
              Participants: Participants,
          }).then(() => {
              setBooksList([
                  ...booksList,
                  {
                      BookingID: BookingID,
                      ExcursionName: ExcursionName,
                      Participants: Participants,
                  },a
              ]);
          });

          Axios.post("http://localhost:3001/createBooking", {
              
              BookingID: BookingID,
              NumAdults : NumAdults,
              NumMinors : NumMinors,
              Cost : Cost,
              TimeSlot : TimeSlot,
  
          }).then(() => {
              setBookingList([
                  ...bookingList,
                  {
                      BookingID: BookingID,
                      NumAdults : NumAdults,
                      NumMinors : NumMinors,
                      Cost : Cost,
                      TimeSlot : TimeSlot,
                  },
              ]);
          });
  
         
          Axios.post("http://localhost:3001/MakesBooking", {
              CustomerID: CustomerID,
              BookingID: BookingID,
              Receipt: Receipt,
              AgreementSignature: AgreementSignature
          }).then(() => {
              setMakesList([
                  ...makesList,
                  {
                      CustomerID: CustomerID,
                      BookingID: BookingID,
                      Receipt: Receipt,
                      AgreementSignature: AgreementSignature
                  },
              ]);
          });
      }
      };

  return (
    <Router>
      <div className='container-fluid'>
        <Header />
        {/* <CustomerDashboard name="John"/> */}

      
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/excursions" exact element={<Excursions excursionList={excursionList} excursionDescriptions = {excursionDescriptions} />} />
          <Route path="/bookNow" exact element={<CalendarPage times={eventTimes} />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/register" exact element={<RegistrationPage />} />
          <Route path="/cart/hiking" exact element={<Cart excursionList={excursionList} excursionDescriptions={excursionDescriptions[0]}excursionIndex={0} slots={hikingSlots}> 

          </Cart>} />
          <Route path="/cart/adultski" exact element={<Cart excursionList={excursionList} excursionDescriptions={excursionDescriptions[1]}excursionIndex={1} slots={aSkiingSlots}>
            
          </Cart>} />
          <Route path="/cart/canoeing" exact element={<Cart excursionList={excursionList} excursionDescriptions={excursionDescriptions[2]}excursionIndex={2} slots={canoeingSlots}>
            
          </Cart>} />
          <Route path="/cart/skating" exact element={<Cart excursionList={excursionList} excursionDescriptions={excursionDescriptions[3]}excursionIndex={3} slots={skatingSlots}>
            
          </Cart>} />
          <Route path="/cart/kidSki" exact element={<Cart excursionList={excursionList} excursionDescriptions={excursionDescriptions[4]}excursionIndex={4} slots={kSkiingSlots}>
            
          </Cart>} />
          <Route path="/cart/snowshoeing" exact element={<Cart excursionList={excursionList} excursionDescriptions={excursionDescriptions[5]}excursionIndex={5} slots={snowshoeingSlots}>
            
          </Cart>} />
          <Route path="/hiking" exact element={<ExcursionInfo excursion={excursionList} excursionDetails={excursionDescriptions[0]} excursionIndex={0}>
          </ExcursionInfo>} />
          <Route path="/adultSki" exact element={<ExcursionInfo excursion={excursionList} excursionDetails={excursionDescriptions[1]} excursionIndex={1}>
          </ExcursionInfo>} />
          <Route path="/canoeing" exact element={<ExcursionInfo excursion={excursionList} excursionDetails={excursionDescriptions[2]} excursionIndex={2}>
          </ExcursionInfo>} />
          <Route path="/skating" exact element={<ExcursionInfo excursion={excursionList} excursionDetails={excursionDescriptions[3]} excursionIndex={3}>
          </ExcursionInfo>} />          
          <Route path="/kidSki" exact element={<ExcursionInfo excursion={excursionList} excursionDetails={excursionDescriptions[4]} excursionIndex={4}>
          </ExcursionInfo>} />
          <Route path="/snowshoeing" exact element={<ExcursionInfo excursion={excursionList} excursionDetails={excursionDescriptions[5]} excursionIndex={5}>
          </ExcursionInfo>} />
          {/* <Route path="/custDash" exact element={<CustomerDashboard/>}/> */}
          
        </Routes>

        {/* TESTING CART */}
        {/* <div className='cartBlock'>
            <div className='cartHeader'>
                <h2>Cart</h2>
            </div>
            <div className='cartExcursionDetails'>
                    <div className='cartExcursionImg'>
                        <img src="https://i.imgur.com/LmF0aVw.jpg"/>
                    </div>
                    <div className='cartExcursionDetailsText'>
                    <div className='cartExcursionDetailsTitle'>
                        <h3>2 Hour Guided Hike</h3>
                    </div>
                    <div className='cartExcursionDetailsDate'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Booking Date: </Form.Label>
                            <Form.Select type="email" placeholder="Email Address"  required>
                                <option> 2022-01-03 @ 10:00 </option>
                                 
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Number of Participants: </Form.Label>
                            <Form.Select id="numPart" type="email" placeholder="Email Address" required>
                                <option value="1" >1</option>
                                <option value="2" >2</option>
                                <option value="3" >3</option>
                                <option value="4" >4</option>
                                <option value="5" >5</option>
                                <option value="6" >6</option>
                                <option value="7" >7</option>
                                <option value="8" >8</option>
                                <option value="9" >9</option>
                                <option value="10" >10</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>

                        <h4>Cost Per Person: ${Cost}.00</h4>
                    </div>
                    </div>
                </div>
                 
            <div className='cartFooter'>
            <form>
                <label>
                    I understand the risk associated with the above activities. <br/><br/>I understand the terms and conditions of service: <br/><br/>

                    <input size="40" type="text" name="name" placeholder="Signature" required />
                </label>
                    <Button text="Complete Order" buttonType="completeButton" buttonStyle="completeStyle"  onClick={submitBooking()}></Button>
                    <Link to="/bookingConf">
                    <Button text="Finalize" buttonType="completeButton" buttonStyle="completeStyle"  onClick={submitBooking()}></Button>
                    </Link>
            </form>
            <div>
                <h4>Subtotal: ${Cost}.00</h4>
       
            </div>
            </div>
        </div> */}
        {/* END OF TESTING */}

      </div>
    </Router>
  )
}

export default App;
