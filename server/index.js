// server/index.js

// const express = require("express");
// const mysql = require("mysql");

// const app = express();

// app.use(express.json());


// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "Hiba0105!",
//   database: "excursion_company",
// });

// app.post('/LoginPage', (req, res)=> {
//   const username = ;
//   const password = ;

//   db.query(
//     "SELECT * FROM Account WHERE Username = ? AND Password = ?",
//     [username, password],
//     (err, result) => {
//       if (err) {
//         res.send({err: err});
//       } 
//       if (result) {
//         res.send(result);
//       } else {
//         res.send ({message: "Error: invalid account"})
//       }
      
//     }
//   )
// })

// app.listen(3001, () => {
//   console.log(`Server listening on ${PORT}`);
// });

// const express = require('express');
// const app = express();
// const path = require('path');
// const mysql = require ('mysql');
// const session = require('express-session');
// const MySQLStore = require ('express-mysql-session');
// const Router = require('./Router');

// app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.json());

// //Database
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: "Hiba0105!",
//   database: "excursion_company",
// });

// db.connect(function(err) {
//   if (err) {
//     console.log('DB error');
//     throw err;
//     return false;
//   }
// });

// const sessionStore = new MySQLStore({
//   expiration: (1825 * 86400 * 1000),
//   endConnectionOnClose: false
// }, db);

// app.use(session({
//   key: 'dsadsadas',
//   secret: 'dskaldjsakd',
//   store: sessionStore,
//   resave: false,
//   saveUninitialized: false.valueOf,
//   cookie: {
//     maxAge: (1825 * 86400 * 1000),
//     httpOnly: false
//   }
// }));

// new Router(app, db);

// app.get('/LoginPage', function(req, res){
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(3000);

// const mysql = require('mysql');
// const connection = mysql.createConnection({
// host: 'localhost',
// user:'root',
// password:'Hiba0105!',
// database:'excursion_company'
// });

// connection.connect(function(err){
// (err)? console.log(err+'+++++++++++++++//////////'): console.log('connection********');
// });

// require('./routes/html-routes')(app, connection);


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
  database: 'excursion_company',
});

app.use(bodyParser.urlencoded({extended: true}))



app.post("/econtact", (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const relation = req.body.relation;
  const customerID = req.body.customerID;

  db.Query (
    "INSERT INTO emergency_contact(Name, PhoneNumber, Relationship, CustomerID) VALUES (?,?,?,?)",
    (err, result) => {
      if(err) {
          res.send({err: err});
      }
      if (result) {
      res.send(result);
      } else {
        res.sent ({message: "Error with fields or username already exists"});
      }
  }
  );
});

app.post("/customer", (req, res) => {
  const eName = req.body.eName;
  const id = req.body.id;

  db.Query (
    "UPDATE Customer SET EContact = ? WHERE CustomerID = ?",
    (err, result) => {
      if(err) {
          res.send({err: err});
      }
      if (result) {
      res.send(result);
      } else {
        res.sent ({message: "Error with fields or username already exists"});
      }
  }
  );
});


app.post("/account", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const accessLevel = "Customer";

  db.Query (
    "INSERT INTO account(Username, Password, Email, AccessLevel) VALUES (?,?,?,?)",
    (err, result) => {
      if(err) {
          res.send({err: err});
      }
      if (result) {
      res.send(result);
      } else {
        res.sent ({message: "Error with fields or username already exists"});
      }
  }
  );
});

app.get("/getid", (res) => {
  db.Query (
    "SELECT CustomerID FROM Customer",
    (err, result) => {
      if(err) {
          res.send({err: err});
      }
      if (result) {
      res.send(result);
      } 
  }
  );
});

app.post("/tempcustomer", (req, res) => {
  const fName = req.body.fName,
  const lName = req.body.lName,
  const address = req.body.address,
  const city = req.body.city,
  const country = req.body.country,
  const postalCode = req.body.postalCode,
  const phone = req.body.phone,
  const dob = req.body.dob,
  //const ename = "NULL",  -- ASSUMING THIS COLUMN WILL BE DROPPED!
  hotelID = req.body.hotelID,
  username = req.body.usernameReg

  db.Query (
    "INSERT INTO Customer(FirstName, LastName, Address, City, Country, PostalCode, PhoneNumber, DOB, EContact, HotelID, AccountUsername) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
    (err, result) => {
      if(err) {
          res.send({err: err});
      }
      if (result) {
      res.send(result);
      } else {
        res.sent ({message: "Error with Personal Information fields"});
      }
  }
  );
});


app.post("/login", (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

    db.query(
        "SELECT * FROM Account WHERE Username = ? AND Password = ?",
        (err, result) => {
            if(err) {
                res.send({err: err});
            }
            if (result) {
            res.send(result);
            } else {
              res.sent ({message: "invalid credentials. Please try again"});
            }
        }
    );
});


app.get("/gethotelid", (res) => {
  db.Query (
    "SELECT PartnerID FROM Hotel",
    (err, result) => {
      if(err) {
          res.send({err: err});
      }
      if (result) {
      res.send(result);
      } 
  }
  );
});

app.listen(3001, () => {
    console.log("server running on port 3001");
});