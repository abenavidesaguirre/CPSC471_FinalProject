const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const mysql = require('mysql') 

const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: "excursion_company",
});

app.use(bodyParser.urlencoded({extended: true}))

app.get("/excursions", (req, res) => {

    db.query(
        "SELECT * FROM Excursion",
        (err, result) => {
            if(err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

app.get("/hikingSlots", (req, res)=>{
    db.query(
        "SELECT * FROM offers, schedule WHERE offers.ExcursionName = '2 Hour Guided Hike' AND offers.TimeSlot = schedule.TimeSlotID; ",
        (err, result) => {
            if(err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

app.get("/adultSkiingSlots", (req, res)=>{
    db.query(
        "SELECT * FROM offers, schedule WHERE offers.ExcursionName = 'Adult Ski Lessons' AND offers.TimeSlot = schedule.TimeSlotID; ",
        (err, result) => {
            if(err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

app.get("/canoeingSlots", (req, res)=>{
    db.query(
        "SELECT * FROM offers, schedule WHERE offers.ExcursionName = 'Canoeing' AND offers.TimeSlot = schedule.TimeSlotID; ",
        (err, result) => {
            if(err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

app.get("/skatingSlots", (req, res)=>{
    db.query(
        "SELECT * FROM offers, schedule WHERE offers.ExcursionName = 'Ice Skating' AND offers.TimeSlot = schedule.TimeSlotID; ",
        (err, result) => {
            if(err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

app.get("/kidSkiingSlots", (req, res)=>{
    db.query(
        "SELECT * FROM offers, schedule WHERE offers.ExcursionName = 'Kids Ski Lessons' AND offers.TimeSlot = schedule.TimeSlotID; ",
        (err, result) => {
            if(err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

app.get("/snowshoeingSlots", (req, res)=>{
    db.query(
        "SELECT * FROM offers, schedule WHERE offers.ExcursionName = 'Snowshoeing' AND offers.TimeSlot = schedule.TimeSlotID; ",
        (err, result) => {
            if(err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

app.post("/createBooking", (req, res) => {
    const BookingID = req.body.BookingID;
    const ExcursionName = req.body.ExcursionName;
    const Participants = req.body.Participants;

    db.query(
        "INSERT INTO booking (BookingID, ExcursionName, Participants) VALUES (?,?,?)",
        (err,result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});


app.listen(3001, () => {
    console.log("server running on port 3001");
});