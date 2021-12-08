import React, {createRef} from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins 
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import "./styling/CalendarPageCSS.css"

const CalendarPage = ({ times }) => {
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
        </div>
      );
    }
   
  export default CalendarPage