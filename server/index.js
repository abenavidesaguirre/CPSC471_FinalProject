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

app.get("/bookings", (req, res) => {

    db.query(
        "SELECT * FROM Booking",
        (err, result) => {
            if(err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

app.get("/books", (req, res) => {

    db.query(
        "SELECT * FROM Books",
        (err, result) => {
            if(err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

app.get("/makes", (req, res) => {

    db.query(
        "SELECT * FROM Makes_a",
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
    const BookingID = req.body.BookingID
    const NumAdults = req.body.NumAdults
    const NumMinors = req.body.NumMinors
    const Cost = req.body.Cost
    const TimeSlot = req.body.TimeSlot

    db.query(
        "INSERT INTO booking (BookingID, NumAdults, NumMinors, Cost, TimeSlot) VALUES (?,?,?,?,?)",
        [BookingID, NumAdults, NumMinors, Cost, TimeSlot],
        (err,result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});

app.post("/Books", (req, res) => {
    const BookingID = req.body.BookingID
    const ExcursionName = req.body.ExcursionName
    const Participants = req.body.Participants

    db.query(
        "INSERT INTO books (BookingID, ExcursionName, Participants) VALUES (?,?,?)",
        [BookingID, ExcursionName, Participants],
        (err,result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});

app.post("/MakesBooking", (req, res) => {
    const CustomerID = req.body.CustomerID
    const BookingID = req.body.BookingID
    const Receipt = req.body.Receipt
    const AgreementSignature = req.body.AgreementSignature

    db.query(
        "INSERT INTO makes_a (CustomerID, BookingID, Receipt, AgreementSignature) VALUES (?,?,?,?)",
        [CustomerID, BookingID, Receipt, AgreementSignature],
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