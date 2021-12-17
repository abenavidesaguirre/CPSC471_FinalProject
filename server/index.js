
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

app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
  res.send("Welcome to the backend - where the magic happens, huehuehue");
})

// //Login Page -- match username and password
// app.post("/login", (req, res) => {

//   const username = req.body.username;
//   const password = req.body.password;


//     db.query(
//         "SELECT * FROM Account WHERE Username = ? AND Password = ?",
//         username, password,
//         (err, result) => {
//             if(err) {
//                 res.send({err: err});
//             }
//             if (result.length > 0) {
//             res.send(result);
//             } else {
//               res.send ({message: "invalid credentials. Please try again"});
//             }
//         }
//     );
// });


// //Registration Page -- make account, customer, and finally emergency contact (requires customerid)

// //grab hotelID's for dropdown option for customer
// app.get("/gethotelid", (res) => {
//   db.query (
//     "SELECT * FROM Hotel", //or select PartnerID from Hotel
//     (err, result) => {
//       if(err) {
//           res.send({err: err});
//       }
//       if (result) {
//       res.send(result);
//       } 
//   }
//   );
// });


// //make account
// app.post("/account", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   const email = req.body.email;
//   const accessLevel = "Customer";

//   db.query (
//     "INSERT INTO account(Username, Password, Email, AccessLevel) VALUES (?,?,?,?)",
//     (err, result) => {
//       if(err) {
//           res.send({err: err});
//       }
//       if (result) {
//       res.send(result);
//       } else {
//         res.sent ({message: "Error with fields or username already exists"});
//       }
//   }
//   );
// });

// //make customer
// // app.post("/tempcustomer", (req, res) => { //**CHANGE FROM TEMP CUSTOMER TO CUSTOMER */
// //   const fName = req.body.fName,
// //   const lName = req.body.lName,
// //   const address = req.body.address,
// //   const city = req.body.city,
// //   const country = req.body.country,
// //   const postalCode = req.body.postalCode,
// //   const phone = req.body.phone,
// //   const dob = req.body.dob,
// //   hotelID = req.body.hotelID,
// //   username = req.body.usernameReg

// //   db.query (
// //     "INSERT INTO Customer(FirstName, LastName, Address, City, Country, PostalCode, PhoneNumber, DOB, EContact, HotelID, AccountUsername) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
// //     (err, result) => {
// //       if(err) {
// //           res.send({err: err});
// //       }
// //       if (result) {
// //       res.send(result);
// //       } else {
// //         res.sent ({message: "Error with Personal Information fields"});
// //       }
// //   }
// //   );
// // });

// //grab customerID

// app.get("/getid", (res) => {
//   db.query (
//     "SELECT CustomerID FROM Customer",
//     (err, result) => {
//       if(err) {
//           res.send({err: err});
//       }
//       if (result) {
//       res.send(result);
//       } 
//   }
//   );
// });


// //make emergency contact
// app.post("/econtact", (req, res) => {
//   const name = req.body.name;
//   const phone = req.body.phone;
//   const relation = req.body.relation;
//   const customerID = req.body.customerID;

//   db.query (
//     "INSERT INTO emergency_contact(Name, PhoneNumber, Relationship, CustomerID) VALUES (?,?,?,?)",
//     (err, result) => {
//       if(err) {
//           res.send({err: err});
//       }
//       if (result) {
//       res.send(result);
//       } else {
//         res.sent ({message: "Error with fields or username already exists"});
//       }
//   }
//   );
// });

// // app.post("/customer", (req, res) => {
// //   const eName = req.body.eName;
// //   const id = req.body.id;

// //   db.query (
// //     "UPDATE Customer SET EContact = ? WHERE CustomerID = ?",
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


//Calendar page -- grab all events from schedule. format = timeslotID, start, end, date
//TimeSlotID = ADKSI1  Start = 8  End = 16  Date = 2022-01-07
app.get("/schedule", (req, res) => {
  db.query (
    "SELECT * FROM Schedule;", 
    (err, result) => {
      if(err) {
          console.log(err);
      }
      res.send(result);
    }
  );
});



  // useEffect(() => {
  //   Axios.get('http://localhost:3001/schedule').then((response) => {
  //         setCalendar(response.data);
  //         console.log(response.data);
  //   });
  // }, []);  

app.listen(3001, () => {
    console.log("server running on port 3001");
});