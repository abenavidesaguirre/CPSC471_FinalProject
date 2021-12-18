import NavigationBar from './components/NavigationBar/NavigationBar';
import Landing from './pages/Landing/Landing';
import Excursions from './pages/Excursions/Excursions';
import Hiking from './pages/Excursions/ExcursionPages/Hiking';
import AdultSki from './pages/Excursions/ExcursionPages/AdultSki';
import Canoeing from './pages/Excursions/ExcursionPages/Canoeing';
import Skating from './pages/Excursions/ExcursionPages/Skating';
import KidSki from './pages/Excursions/ExcursionPages/KidSki';
import Snowshoeing from './pages/Excursions/ExcursionPages/Snowshoeing';
import HikingCart from './pages/Cart/HikingCart'
import AdultSkiCart from './pages/Cart/AdultSkiCart';
import CanoeingCart from './pages/Cart/CanoeingCart';
import SkatingCart from './pages/Cart/SkatingCart';
import KidSkiCart from './pages/Cart/KidSkiCart';
import SnowshoeingCart from './pages/Cart/SnowshoeingCart';
import BookingConf from './pages/BookingConfirmation/BookingConf';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import CustomerDash from './pages/CustomerDash/CustomerDash';
import StaffDash from './pages/StaffDash/StaffDash';
import Calendar from './pages/Calendar/Calendar';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const App = () => {

  return (
    <Router>
      <div className='container-fluid'>
       
          <NavigationBar/>
       
        <Routes>
          <Route path="/" exact element={<Landing/>} />
          <Route path="/excursions" exact element={<Excursions/>} />

          <Route path="/calendar" exact element={<Calendar/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/register" exact element={<Registration/>} /> 

          <Route path="/cart/hiking" exact element={<HikingCart/>}/>
          <Route path="/cart/adultSki" exact element={<AdultSkiCart/>} />
          <Route path="/cart/canoeing" exact element={<CanoeingCart/>} />
          <Route path="/cart/skating" exact element={<SkatingCart/>} />   
          <Route path="/cart/kidSki" exact element={<KidSkiCart/>} />
          <Route path="/cart/snowshoeing" exact element={<SnowshoeingCart/>} />
          <Route path="/hiking" exact element={<Hiking/>}/>
          <Route path="/adultSki" exact element={<AdultSki/>} />
          <Route path="/canoeing" exact element={<Canoeing/>} />
          <Route path="/skating" exact element={<Skating/>} />          
          <Route path="/kidSki" exact element={<KidSki/>} />
          <Route path="/snowshoeing" exact element={<Snowshoeing/>} />
          <Route path="/bookingConf" exact element={<BookingConf/>}/>
          <Route path="/customerDash" exact element={<CustomerDash/>}/>
          <Route path="/staffDash" exact element={<StaffDash/>} />
          
        </Routes>
      </div>
    </Router>
  )
}

export default App;
