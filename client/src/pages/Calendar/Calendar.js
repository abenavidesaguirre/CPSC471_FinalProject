import React, {useState, createRef, useEffect} from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins 
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import "./Calendar.css"
import Form from "react-bootstrap/Form"
import  Axios  from 'axios';
import { useNavigate } from 'react-router';

const CalendarPage = () => {

  

      const [timeSlots, setTimeSlots] = useState([]);
      const [eventTimes, setEventTimes] = useState([]);
      const [tourGuideShifts, setTourGuideShifts] = useState([]);
      const [staffInfo, setStaffInfo] = useState([]);
      const [chosenShift, setChosenShift] = useState("");
      const [shifts, setShifts] = useState([]);
      const Username = localStorage.getItem("username")
      var StaffID;

      const navigate = useNavigate();

      useEffect(() => {
        

        Axios.get(`http://localhost:3001/staff/${localStorage.getItem("username")}`)
        .then((response) => {
            setStaffInfo(response.data);
        });


        Axios.get("http://localhost:3001/calendarTimes").then((response) => {
          setTimeSlots(response.data);
        });
       

        Axios.get("http://localhost:3001/tourGuideShifts").then((response) => {
          setTourGuideShifts(response.data);
        });
        
       

      }, [])

      
      const addEvent =(name, start, end)=> {
        setEventTimes([...eventTimes, {
          title: name, start: start, end: end
        }
        ])
        }
      

      const mapTimes=(e)=> {
        e.preventDefault();
    
        timeSlots.map((val) => {
         
          addEvent(val.ExcursionName, val.Date.substr(0,10)+'T'+val.Start+":00:00", val.Date.substr(0,10)+'T'+val.End+":00:00" );
        })

   
      }

      const selectShift=(e)=>{
        e.preventDefault();
       
        

        staffInfo.map((val) => {
          StaffID = val.StaffID;
        })
        
        if(chosenShift!==""){
        Axios.post("http://localhost:3001/shiftSignUp", {
          StaffID: StaffID,
          Shift: chosenShift,
        }).then(()=> {
          setShifts([
            ...shifts,
            {
              StaffID: StaffID,
              Shift: chosenShift,
            },
          ]);
        }); 
        navigate("/staffDash")
      }
      }

      const [times] = useState([
    { title: '2 Hour Guided Hike', start: '2022-01-16T8:00:00', end: '2022-01-16T10:00:00' },
    { title: 'Ice Skating', start: '2022-01-03T13:00:00', end: '2022-01-03T16:00:00' },
    { title: 'Adult Ski Lessons', start: '2022-01-07T8:00:00', end: '2022-01-07T16:00:00' },
    { title: 'Kids Ski Lessons', start: '2022-01-12T10:00:00', end: '2022-01-12T14:00:00' }
  ])

        const calendarRef = createRef();
      return (
        
        <div className="calendar">
          <h2> Activity Calendar </h2>
         <div className="content">
         <FullCalendar
            ref={calendarRef}
            height={750}
            contentHeight={750}
            plugins={[ dayGridPlugin, timeGridPlugin ]}
            initialView="dayGridMonth"
            events={times}
            customButtons = {{
              myTimeDayBtn: {
                text: "timeDay",
                click() {
                  const calendar = calendarRef.current;
                  if(calendar) {
                    const calendarApi = calendar.getApi();
    
                    calendarApi.changeView("timeGridDay");
                  }
                },
              },
              myTimeWeekBtn: {
                text: "timeWeek",
                click() { 
                  const calendar = calendarRef.current;
                  if(calendar) {
                    const calendarApi = calendar.getApi();
    
                    calendarApi.changeView("timeGridWeek");
                  }
                },
              },
            }}
            headerToolbar={{
              left: "prev next",
              center: "title",
              right: "today dayGridDay dayGridWeek dayGridMonth",
            }}
          />
          
         </div>
         <div className="signup">
           <h2> Shift Sign Up</h2>
           <Form.Group className="mb-3" controlId="formBasicShift">
            <Form.Select type="text" onChange={(e)=>setChosenShift(e.target.value)}>
              <option>Select A Shift</option>
              {tourGuideShifts.map((tourGuideShifts=> <option value={tourGuideShifts.TimeSlotID}>{tourGuideShifts.Date.substr(0,10)} : {tourGuideShifts.Start}:00-{tourGuideShifts.End}:00 MST</option>))}
            </Form.Select>
          </Form.Group>
          <div className="selectDiv">
            <button className="selectButton" onClick={(e)=>selectShift(e)}>Select Shift</button>
          </div>
         </div>
        </div>
      );
    }
   
  export default CalendarPage