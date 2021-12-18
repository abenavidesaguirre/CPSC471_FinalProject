
// const express = require("express");
// const app = express();
// const bodyParser = require('body-parser')
// const mysql = require('mysql') 

// const cors = require('cors')

// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   user: 'root',
//   host: 'localhost',
//   password: 'password',
//   database: "excursion_company",
// });

// app.use(express.urlencoded({extended: true}))





// app.get("/", (req, res) => {
//   res.send("Welcome to the backend - where the magic happens, huehuehue");
// })

// // //Login Page -- match username and password
// // app.post("/login", (req, res) => {

// //   const username = req.body.username;
// //   const password = req.body.password;


// //     db.query(
// //         "SELECT * FROM Account WHERE Username = ? AND Password = ?",
// //         username, password,
// //         (err, result) => {
// //             if(err) {
// //                 res.send({err: err});
// //             }
// //             if (result.length > 0) {
// //             res.send(result);
// //             } else {
// //               res.send ({message: "invalid credentials. Please try again"});
// //             }
// //         }
// //     );
// // });


// // //Registration Page -- make account, customer, and finally emergency contact (requires customerid)

// // //grab hotelID's for dropdown option for customer
// // app.get("/gethotelid", (res) => {
// //   db.query (
// //     "SELECT * FROM Hotel", //or select PartnerID from Hotel
// //     (err, result) => {
// //       if(err) {
// //           res.send({err: err});
// //       }
// //       if (result) {
// //       res.send(result);
// //       } 
// //   }
// //   );
// // });


// // //make account
// // app.post("/account", (req, res) => {
// //   const username = req.body.username;
// //   const password = req.body.password;
// //   const email = req.body.email;
// //   const accessLevel = "Customer";

// //   db.query (
// //     "INSERT INTO account(Username, Password, Email, AccessLevel) VALUES (?,?,?,?)",
// //     (err, result) => {
// //       if(err) {
// //           res.send({err: err});
// //       }
// //       if (result) {
// //       res.send(result);
// //       } else {
// //         res.sent ({message: "Error with fields or username already exists"});
// //       }
// //   }
// //   );
// // });

// // //make customer
// // // app.post("/tempcustomer", (req, res) => { //**CHANGE FROM TEMP CUSTOMER TO CUSTOMER */
// // //   const fName = req.body.fName,
// // //   const lName = req.body.lName,
// // //   const address = req.body.address,
// // //   const city = req.body.city,
// // //   const country = req.body.country,
// // //   const postalCode = req.body.postalCode,
// // //   const phone = req.body.phone,
// // //   const dob = req.body.dob,
// // //   hotelID = req.body.hotelID,
// // //   username = req.body.usernameReg

// // //   db.query (
// // //     "INSERT INTO Customer(FirstName, LastName, Address, City, Country, PostalCode, PhoneNumber, DOB, EContact, HotelID, AccountUsername) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
// // //     (err, result) => {
// // //       if(err) {
// // //           res.send({err: err});
// // //       }
// // //       if (result) {
// // //       res.send(result);
// // //       } else {
// // //         res.sent ({message: "Error with Personal Information fields"});
// // //       }
// // //   }
// // //   );
// // // });

// // //grab customerID

// // app.get("/getid", (res) => {
// //   db.query (
// //     "SELECT CustomerID FROM Customer",
// //     (err, result) => {
// //       if(err) {
// //           res.send({err: err});
// //       }
// //       if (result) {
// //       res.send(result);
// //       } 
// //   }
// //   );
// // });


// // //make emergency contact
// // app.post("/econtact", (req, res) => {
// //   const name = req.body.name;
// //   const phone = req.body.phone;
// //   const relation = req.body.relation;
// //   const customerID = req.body.customerID;

// //   db.query (
// //     "INSERT INTO emergency_contact(Name, PhoneNumber, Relationship, CustomerID) VALUES (?,?,?,?)",
// //     (err, result) => {
// //       if(err) {
// //           res.send({err: err});
// //       }
// //       if (result) {
// //       res.send(result);
// //       } else {
// //         res.sent ({message: "Error with fields or username already exists"});
// //       }
// //   }
// //   );
// // });

// // // app.post("/customer", (req, res) => {
// // //   const eName = req.body.eName;
// // //   const id = req.body.id;

// // //   db.query (
// // //     "UPDATE Customer SET EContact = ? WHERE CustomerID = ?",
// // //     (err, result) => {
// // //       if(err) {
// // //           res.send({err: err});
// // //       }
// // //       if (result) {
// // //       res.send(result);
// // //       } else {
// // //         res.sent ({message: "Error with fields or username already exists"});
// // //       }
// // //   }
// // //   );
// // // });


// //Calendar page -- grab all events from schedule. format = timeslotID, start, end, date
// //TimeSlotID = ADKSI1  Start = 8  End = 16  Date = 2022-01-07
// app.get("/schedule", (req, res) => {
//   db.query (
//     "SELECT * FROM Schedule;", 
//     (err, result) => {
//       if(err) {
//           console.log(result);
//       }
//       res.send(result);
//     }
//   );
// });



//   // useEffect(() => {
//   //   Axios.get('http://localhost:3001/schedule').then((response) => {
//   //         setCalendar(response.data);
//   //         console.log(response.data);
//   //   });
//   // }, []);  

// app.listen(3001, () => {
//     console.log("server running on port 3001");
// });

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
  password: 'Hiba0105!',
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
              message: "Wrong username/password combo!",
            });
          }
        } else {
          res.json({ loggedIn: false, message: "User doesn't exist" });
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
        "SELECT * FROM Customer WHERE Customer.AccountUsername = ?;",
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

app.listen(3001, () => {
    console.log("server running on port 3001");
});