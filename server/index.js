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

app.post("/login", (req, res) => {
    const Username = req.body.Username;
    const Password = req.body.Password;
  
    db.query(
      "SELECT * FROM Account WHERE Username = ?",
      Username,
      (err, results) => {
        if (err) {
          console.log(err);
        }
        if (results.length > 0) {
          if (Password == results[0].Password) {
            res.json({ loggedIn: true, username: Username });
          } else {
            res.json({
              loggedIn: false,
              message: "Wrong Username Or Password",
            });
          }
        } else {
          res.json({ loggedIn: false, message: "User Does Not Exist" });
        }
      }
    );
  });

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

app.get("/hotels", (req, res) => {

    db.query(
        "SELECT * FROM hotel",
        (err, result) => {
            if(err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

app.get("/excursionInfo/:name", (req, res) => {
    const name = req.params.name;
    db.query(
        "SELECT * FROM excursion WHERE Name = ?;",
        name,
        (err, results) => {
            if(err) {
                console.log(err);
            }
            res.send(results);
        }
    );
});

app.get("/timeSlots/:name", (req, res)=> {
    const name = req.params.name;
    db.query(
        "SELECT * FROM offers, schedule WHERE offers.ExcursionName = ? AND offers.TimeSlot = schedule.TimeSlotID; ",
        name,
        (err, result) => {
            if(err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

app.get("/customerExcursions/:Username", (req, res)=> {
    const Username = req.params.Username;
    db.query(
        "SELECT * FROM Booking, Books, Makes_a, Customer, Schedule WHERE Customer.AccountUsername = ? AND Customer.CustomerID = Makes_a.CustomerID AND Makes_a.BookingID = Books.BookingID AND Makes_a.BookingID = Booking.BookingID AND Booking.TimeSlot=Schedule.TimeSlotID; ",
        Username,
        (err, result) => {
            if(err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

app.get("/customer/:Username", (req, res)=> {
    const Username = req.params.Username;
    db.query(
        "SELECT * FROM Customer WHERE Customer.AccountUsername = ?",
        Username,
        (err, result) => {
            if(err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

app.get("/staff/:Username", (req, res)=> {
    const Username = req.params.Username;
    db.query(
        "SELECT * FROM Staff WHERE Staff.AccountUsername = ?",
        Username,
        (err, result) => {
            if(err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

app.get("/staffShifts/:Username", (req, res)=> {
    const Username = req.params.Username;
    db.query(
        "SELECT * FROM Staff, Tour_Guide, Schedule WHERE Staff.AccountUsername = ? AND Staff.StaffID = Tour_Guide.StaffID AND Tour_Guide.Shift = Schedule.TimeSlotID; ",
        Username,
        (err, result) => {
            if(err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});


app.post("/customerAccess", (req, res)=> {
    const Username = req.body.Username;
    // const Password = req.body.Password;
    db.query(
        "SELECT * FROM Account WHERE Account.Username = ?",
        Username,
        (err, result) => {
            if(err) {
                console.log(err);
            }
            res.send(result);
        }
    );
});

app.get("/customerCount", (req, res) => {
    db.query(
        "SELECT COUNT(*) as Count FROM Customer;",
        (err, result) => {
            if(err) {
                console.log(err)
            }
            res.send(result);
        }
    );
});

app.get("/schedule", (req, res) => {
    db.query (
      "SELECT * FROM Schedule", 
      (err, result) => {
        if(err) {
            console.log(err);
        }
        res.send(result);
      }
    );
  });

app.post("/registerCustomer", (req, res) => {
    const CustomerID = req.body.CustomerID
    const FirstName =  req.body.FirstName
    const LastName =  req.body.LastName
    const Address =  req.body.Address
    const City =  req.body.City
    const Country =  req.body.Country
    const PostalCode =  req.body.PostalCode
    const PhoneNumber =  req.body.PhoneNumber
    const DOB =  req.body.DOB
    const HotelID =  req.body.HotelID
    const AccountUsername =  req.body.AccountUsername

    db.query(
        "INSERT INTO Customer (CustomerID, FirstName, LastName, Address, City, Country, PostalCode, PhoneNumber, DOB, HotelID, AccountUsername) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
        [CustomerID, FirstName, LastName, Address, City, Country, PostalCode, PhoneNumber, DOB, HotelID, AccountUsername],
        (err,result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});

app.post("/registerAccount", (req, res) => {
    const Username = req.body.Username
    const Password = req.body.Password
    const Email = req.body.Email
    const AccessLevel = req.body.AccessLevel

    db.query(
        "INSERT INTO Account (Username, Password, Email, AccessLevel) VALUES (?,?,?,?)",
        [Username, Password, Email, AccessLevel],
        (err,result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});

app.post("/registerEmergContact", (req, res) => {
    const Name = req.body.EmergencyName
    const PhoneNumber = req.body.EmergencyPhone
    const Relationship = req.body.Relationship
    const CustomerID = req.body.CustomerID

    db.query(
        "INSERT INTO Emergency_Contact (Name, PhoneNumber, Relationship, CustomerID) VALUES (?,?,?,?)",
        [Name, PhoneNumber, Relationship, CustomerID],
        (err,result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});

app.post("/createBooking", (req, res) => {
    const bookingID = req.body.bookingID
    const numAdults = req.body.numAdults
    const numMinors = req.body.numMinors
    const cost = req.body.cost
    const chosenTimeSlot = req.body.chosenTimeSlot

    db.query(
        "INSERT INTO booking (BookingID, NumAdults, NumMinors, Cost, TimeSlot) VALUES (?,?,?,?,?)",
        [bookingID, numAdults, numMinors, cost, chosenTimeSlot],
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
    const bookingID = req.body.bookingID
    const name = req.body.name
    const numParticipants = req.body.numParticipants

    db.query(
        "INSERT INTO books (BookingID, ExcursionName, Participants) VALUES (?,?,?)",
        [bookingID, name, numParticipants],
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
    const customerID = req.body.customerID
    const bookingID = req.body.bookingID
    const receipt = req.body.receipt
    const agreement = req.body.agreement

    db.query(
        "INSERT INTO makes_a (CustomerID, BookingID, Receipt, AgreementSignature) VALUES (?,?,?,?)",
        [customerID, bookingID, receipt, agreement],
        (err,result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});

app.get("/calendarTimes", (req,res) => {
    db.query(
        "SELECT * FROM Schedule, Offers WHERE Schedule.TimeSlotID = Offers.TimeSlot",
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result)
            }
        }
    )
})

app.get("/tourGuideShifts", (req,res) => {
    db.query(
        "SELECT * FROM Schedule LEFT JOIN Tour_Guide On Tour_Guide.Shift=Schedule.TimeSlotID WHERE Tour_Guide.Shift IS NULL AND Schedule.TimeSlotID Like 'TG%';",
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result)
            }
        }
    )
})

app.post("/shiftSignUp", (req,res) => {
    const StaffID = req.body.StaffID
    const Shift = req.body.Shift
    db.query(
        "INSERT INTO Tour_Guide (StaffID, Shift) VALUES (?, ?)",
        [StaffID, Shift],
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