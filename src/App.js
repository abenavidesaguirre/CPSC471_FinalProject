import Header from './components/Header';
import Excursions from './components/Excursions';
import ExcursionInfo from './components/ExcursionInfo';
import Cart from './components/Cart';
import BookingConf from './components/BookingConf';
import { useState } from 'react';
import CalendarPage from './components/CalendarPage';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
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


  const [excursionList] = useState([
    {
      id: 1,
      title: '2 Hour Guided Hike',
      duration: '2 Hours',
      cost: 35,
      seasons: 'All',
      maxPpl: 18,
      ages: 'All',
      tag: 'One of the best ways to experience Canadian beauty is by immersing yourself in its natural lands. Our hikes are designed to help you have the best and most memorable experience in the Canadian Rockies. Join us for a hike up Ha Ling Peak in Alberta complemented by a gourmet lunch to be enjoyed at the summit.',
      dp1: 'Come join us for a breathtaking adventure in the heart of the Canadian mountains! We will depart from the town of Canmore at the designated meeting time and head to the trailhead of Ha Ling Peak.',
      dp2: 'From there we will begin ascending into the mountains. Be preparted to encounter astonishing views and be enveloped by the gorgeous surrounding nature. During the hike we will pause for water breaks and snacks.',
      dp3: 'Once at the summit, enjoy the beautiful Alberta scenery and a delicious chef-packed lunch. This adventure is perfect for everyone, from beginners to seasoned hikers, solo travelers and families alike!',
      imgUrl: 'https://i.imgur.com/LmF0aVw.jpg',
      path: '/hiking'
    },
    {
      id: 2,
      title: 'Ice Skating',
      duration: '3 Hours',
      cost: 50,
      seasons: 'All',
      maxPpl: 18,
      ages: 'All',
      tag: 'A favourite Canadian sport that is fun for all ages and abilities, ice skating in Banff and Lake Louise is a great way to enjoy the fresh mountain air with family and friends. Immerse yourself in the natural beauty of your surroundings or maybe join in a game of pick-up, or “shinny” hockey. Then take a break and warm up with hot cocoa beside a bonfire before heading back out on the ice for more. ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui turpis, sagittis eu finibus id, volutpat in ante. Nam eu ultrices felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce sed elit porttitor, consectetur est sed, congue nisl. Ut eu semper urna. In hac habitasse platea dictumst. Sed consequat enim massa. Vestibulum consectetur consectetur ante, id sagittis erat vestibulum consequat. Nunc pulvinar pulvinar erat, posuere auctor urna hendrerit ut. Ut sollicitudin nisl est, quis rutrum libero bibendum non. Nulla volutpat aliquet turpis eu luctus. Sed blandit justo vitae mi pharetra, id cursus justo imperdiet. Nam in pharetra augue. Vestibulum luctus elit nunc. Vivamus in arcu egestas, lacinia magna eget, sodales mauris.Donec scelerisque maximus convallis. Donec velit augue, tincidunt at fermentum tristique, bibendum sodales justo. Sed efficitur diam vitae tortor gravida semper. Nulla vel congue neque, nec venenatis urna. Quisque placerat laoreet nibh tempus dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat, arcu congue pharetra fringilla, ipsum dolor euismod ex, vitae bibendum tellus mauris et tellus. Duis venenatis rutrum nibh, vitae semper nisl. Phasellus posuere metus at blandit sodales. Vestibulum at tempor sapien, at volutpat turpis. Nulla est dolor, ornare vestibulum vestibulum quis, congue ac dui. Sed interdum consequat velit.',
      dp1: 'Come join us for a breathtaking adventure in the heart of the Canadian mountains! We will depart from the town of Canmore at the designated meeting time and head to the trailhead of Ha Ling Peak.',
      dp2: 'From there we will begin ascending into the mountains. Be preparted to encounter astonishing views and be enveloped by the gorgeous surrounding nature. During the hike we will pause for water breaks and snacks.',
      dp3: 'Once at the summit, enjoy the beautiful Alberta scenery and a delicious chef-packed lunch. This adventure is perfect for everyone, from beginners to seasoned hikers, solo travelers and families alike!',
      imgUrl: 'https://i.imgur.com/s7wSPDg.jpg',
      path: '/skating'
    },
    {
      id: 3,
      title: 'Canoeing',
      duration: '2 Hours',
      cost: 35,
      seasons: 'May - August',
      maxPpl: 18,
      ages: 'All',
      tag: 'Canada is famous for its countless rivers and lakes, making it the perfect destination for canoeing adventures! Sit back in your boat for a relaxing vacation exploring Canada’s vast wilderness while paddling on tranquil lakes. Adventure seekers will also not be disappointed, as exciting whitewater journeys on the wildest North American rivers await!      ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui turpis, sagittis eu finibus id, volutpat in ante. Nam eu ultrices felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce sed elit porttitor, consectetur est sed, congue nisl. Ut eu semper urna. In hac habitasse platea dictumst. Sed consequat enim massa. Vestibulum consectetur consectetur ante, id sagittis erat vestibulum consequat. Nunc pulvinar pulvinar erat, posuere auctor urna hendrerit ut. Ut sollicitudin nisl est, quis rutrum libero bibendum non. Nulla volutpat aliquet turpis eu luctus. Sed blandit justo vitae mi pharetra, id cursus justo imperdiet. Nam in pharetra augue. Vestibulum luctus elit nunc. Vivamus in arcu egestas, lacinia magna eget, sodales mauris.Donec scelerisque maximus convallis. Donec velit augue, tincidunt at fermentum tristique, bibendum sodales justo. Sed efficitur diam vitae tortor gravida semper. Nulla vel congue neque, nec venenatis urna. Quisque placerat laoreet nibh tempus dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat, arcu congue pharetra fringilla, ipsum dolor euismod ex, vitae bibendum tellus mauris et tellus. Duis venenatis rutrum nibh, vitae semper nisl. Phasellus posuere metus at blandit sodales. Vestibulum at tempor sapien, at volutpat turpis. Nulla est dolor, ornare vestibulum vestibulum quis, congue ac dui. Sed interdum consequat velit.',
      dp1: 'Come join us for a breathtaking adventure in the heart of the Canadian mountains! We will depart from the town of Canmore at the designated meeting time and head to the trailhead of Ha Ling Peak.',
      dp2: 'From there we will begin ascending into the mountains. Be preparted to encounter astonishing views and be enveloped by the gorgeous surrounding nature. During the hike we will pause for water breaks and snacks.',
      dp3: 'Once at the summit, enjoy the beautiful Alberta scenery and a delicious chef-packed lunch. This adventure is perfect for everyone, from beginners to seasoned hikers, solo travelers and families alike!',
      imgUrl: 'https://i.imgur.com/TIu5EON.jpg',
      path: '/canoeing'
    },
    {
      id: 4,
      title: 'Adult Ski Lessons',
      duration: '8 Hours',
      cost: 125,
      seasons: 'November - April',
      maxPpl: 18,
      ages: 'All',
      tag: 'Designed for a more mature group looking to discover the basics of skiing, this program covers the fundamentals but with slightly more technical insight into skiing progression and a slightly quicker pace than our youth program. This single 90-minute lesson includes hill access and rentals for the program time.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui turpis, sagittis eu finibus id, volutpat in ante. Nam eu ultrices felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce sed elit porttitor, consectetur est sed, congue nisl. Ut eu semper urna. In hac habitasse platea dictumst. Sed consequat enim massa. Vestibulum consectetur consectetur ante, id sagittis erat vestibulum consequat. Nunc pulvinar pulvinar erat, posuere auctor urna hendrerit ut. Ut sollicitudin nisl est, quis rutrum libero bibendum non. Nulla volutpat aliquet turpis eu luctus. Sed blandit justo vitae mi pharetra, id cursus justo imperdiet. Nam in pharetra augue. Vestibulum luctus elit nunc. Vivamus in arcu egestas, lacinia magna eget, sodales mauris.Donec scelerisque maximus convallis. Donec velit augue, tincidunt at fermentum tristique, bibendum sodales justo. Sed efficitur diam vitae tortor gravida semper. Nulla vel congue neque, nec venenatis urna. Quisque placerat laoreet nibh tempus dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat, arcu congue pharetra fringilla, ipsum dolor euismod ex, vitae bibendum tellus mauris et tellus. Duis venenatis rutrum nibh, vitae semper nisl. Phasellus posuere metus at blandit sodales. Vestibulum at tempor sapien, at volutpat turpis. Nulla est dolor, ornare vestibulum vestibulum quis, congue ac dui. Sed interdum consequat velit.',
      dp1: 'Come join us for a breathtaking adventure in the heart of the Canadian mountains! We will depart from the town of Canmore at the designated meeting time and head to the trailhead of Ha Ling Peak.',
      dp2: 'From there we will begin ascending into the mountains. Be preparted to encounter astonishing views and be enveloped by the gorgeous surrounding nature. During the hike we will pause for water breaks and snacks.',
      dp3: 'Once at the summit, enjoy the beautiful Alberta scenery and a delicious chef-packed lunch. This adventure is perfect for everyone, from beginners to seasoned hikers, solo travelers and families alike!',
      imgUrl: 'https://i.imgur.com/AP7pSHG.jpg',
      path: '/adultSki'
    },
    {
      id: 5,
      title: 'Kids Ski Lessons',
      duration: '4 Hours',
      cost: 75,
      seasons: 'November - April',
      tag: 'Watch your child\s passion for skiing take off in our Radical Riders ski programs. These lessons are for active kids to have a blast on snow, gain confidence, improve their riding skills, and build friendships in a safe learning environment.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui turpis, sagittis eu finibus id, volutpat in ante. Nam eu ultrices felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce sed elit porttitor, consectetur est sed, congue nisl. Ut eu semper urna. In hac habitasse platea dictumst. Sed consequat enim massa. Vestibulum consectetur consectetur ante, id sagittis erat vestibulum consequat. Nunc pulvinar pulvinar erat, posuere auctor urna hendrerit ut. Ut sollicitudin nisl est, quis rutrum libero bibendum non. Nulla volutpat aliquet turpis eu luctus. Sed blandit justo vitae mi pharetra, id cursus justo imperdiet. Nam in pharetra augue. Vestibulum luctus elit nunc. Vivamus in arcu egestas, lacinia magna eget, sodales mauris.Donec scelerisque maximus convallis. Donec velit augue, tincidunt at fermentum tristique, bibendum sodales justo. Sed efficitur diam vitae tortor gravida semper. Nulla vel congue neque, nec venenatis urna. Quisque placerat laoreet nibh tempus dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat, arcu congue pharetra fringilla, ipsum dolor euismod ex, vitae bibendum tellus mauris et tellus. Duis venenatis rutrum nibh, vitae semper nisl. Phasellus posuere metus at blandit sodales. Vestibulum at tempor sapien, at volutpat turpis. Nulla est dolor, ornare vestibulum vestibulum quis, congue ac dui. Sed interdum consequat velit.',
      dp1: 'Come join us for a breathtaking adventure in the heart of the Canadian mountains! We will depart from the town of Canmore at the designated meeting time and head to the trailhead of Ha Ling Peak.',
      dp2: 'From there we will begin ascending into the mountains. Be preparted to encounter astonishing views and be enveloped by the gorgeous surrounding nature. During the hike we will pause for water breaks and snacks.',
      dp3: 'Once at the summit, enjoy the beautiful Alberta scenery and a delicious chef-packed lunch. This adventure is perfect for everyone, from beginners to seasoned hikers, solo travelers and families alike!',
      imgUrl: 'https://i.imgur.com/WL3q1uH.jpg',
      path: '/kidSki'
    },
    {
      id: 6,
      title: 'Snowshoeing',
      duration: '4 Hours',
      cost: 75,
      seasons: 'November - March',
      tag: 'Snowshoeing is the perfect winter activity that’s fun and accessible for everyone! Join in on this one-of-a-kind way to explore the wonderland that is the Canadian Rockies with the help of our experienced guides. Learn about the history of the region, keep an eye out for wildlife, and prepare for a day full of laughter as you conquer the snow, one step at a time!',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui turpis, sagittis eu finibus id, volutpat in ante. Nam eu ultrices felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce sed elit porttitor, consectetur est sed, congue nisl. Ut eu semper urna. In hac habitasse platea dictumst. Sed consequat enim massa. Vestibulum consectetur consectetur ante, id sagittis erat vestibulum consequat. Nunc pulvinar pulvinar erat, posuere auctor urna hendrerit ut. Ut sollicitudin nisl est, quis rutrum libero bibendum non. Nulla volutpat aliquet turpis eu luctus. Sed blandit justo vitae mi pharetra, id cursus justo imperdiet. Nam in pharetra augue. Vestibulum luctus elit nunc. Vivamus in arcu egestas, lacinia magna eget, sodales mauris.Donec scelerisque maximus convallis. Donec velit augue, tincidunt at fermentum tristique, bibendum sodales justo. Sed efficitur diam vitae tortor gravida semper. Nulla vel congue neque, nec venenatis urna. Quisque placerat laoreet nibh tempus dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat, arcu congue pharetra fringilla, ipsum dolor euismod ex, vitae bibendum tellus mauris et tellus. Duis venenatis rutrum nibh, vitae semper nisl. Phasellus posuere metus at blandit sodales. Vestibulum at tempor sapien, at volutpat turpis. Nulla est dolor, ornare vestibulum vestibulum quis, congue ac dui. Sed interdum consequat velit.',
      dp1: 'Come join us for a breathtaking adventure in the heart of the Canadian mountains! We will depart from the town of Canmore at the designated meeting time and head to the trailhead of Ha Ling Peak.',
      dp2: 'From there we will begin ascending into the mountains. Be preparted to encounter astonishing views and be enveloped by the gorgeous surrounding nature. During the hike we will pause for water breaks and snacks.',
      dp3: 'Once at the summit, enjoy the beautiful Alberta scenery and a delicious chef-packed lunch. This adventure is perfect for everyone, from beginners to seasoned hikers, solo travelers and families alike!',
      imgUrl: 'https://i.imgur.com/2Jtfqy3.jpg',
      path: '/snowshoeing'
    }
  ])

  const [bookingList] = useState([
    {
      id: 1,
      bookingid: 'XYZ123ABC456',
      bookingFName: 'John',
      bookingLName: 'Smith',
      bookingExcurions: 0,
      numParticipants: 3,
      cost: (35.00 * 3.00),
      date: 'May 22, 2023 @ 1:00 PM'
    }
  ])

  return (
    <Router>
      <div className='container-fluid'>
        <Header />

        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/excursions" exact element={<Excursions excursionList={excursionList} />} />
          <Route path="/bookNow" exact element={<CalendarPage times={eventTimes} />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/register" exact element={<RegistrationPage />} />
          <Route path="/cart" exact element={<Cart booking={bookingList} excursionList={excursionList} bookingIndex={0}
            excursionIndex={0}></Cart>} />
          <Route path="/bookingConf" exact element={<BookingConf booking={bookingList} excursionList={excursionList}
            bookingIndex={0} excursionIndex={0}></BookingConf>} />
          <Route path="/hiking" exact element={<ExcursionInfo excursion={excursionList[0]}>
          </ExcursionInfo>} />
          <Route path="/skating" exact element={<ExcursionInfo excursion={excursionList[1]}>
          </ExcursionInfo>} />
          <Route path="/canoeing" exact element={<ExcursionInfo excursion={excursionList[2]}>
          </ExcursionInfo>} />
          <Route path="/adultSki" exact element={<ExcursionInfo excursion={excursionList[3]}>
          </ExcursionInfo>} />
          <Route path="/kidSki" exact element={<ExcursionInfo excursion={excursionList[4]}>
          </ExcursionInfo>} />
          <Route path="/snowshoeing" exact element={<ExcursionInfo excursion={excursionList[5]}>
          </ExcursionInfo>} />
        </Routes>

      </div>

    </Router>
  )
}

export default App;
