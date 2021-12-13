const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const mysql = require('mysql') 

const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: 'srnkidycfzmrvk',
  host: 'ec2-3-230-219-251.compute-1.amazonaws.com',
  password: 'fe6d632bc3ee59da65cad454da06c31a415ada8a26ecd843bb6f28d46a2577d5',
  database: "dbpae9quth4h5p",
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



app.listen(5432, () => {
    console.log("server running on port 3001");
});