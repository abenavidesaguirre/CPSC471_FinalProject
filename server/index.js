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

const express = require('express');
const app = express();
const path = require('path');
const mysql = require ('mysql');
const session = require('express-session');
const MySQLStore = require ('express-mysql-session');
const Router = require('./Router');

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

//Database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "Hiba0105!",
  database: "excursion_company",
});

db.connect(function(err) {
  if (err) {
    console.log('DB error');
    throw err;
    return false;
  }
});

const sessionStore = new MySQLStore({
  expiration: (1825 * 86400 * 1000),
  endConnectionOnClose: false
}, db);

app.use(session({
  key: 'dsadsadas',
  secret: 'dskaldjsakd',
  store: sessionStore,
  resave: false,
  saveUninitialized: false.valueOf,
  cookie: {
    maxAge: (1825 * 86400 * 1000),
    httpOnly: false
  }
}));

new Router(app, db);

app.get('/LoginPage', function(req, res){
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000);