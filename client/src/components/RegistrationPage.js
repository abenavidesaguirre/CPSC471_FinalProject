import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./styling/RegistrationCSS.css"
import Axios from "axios";
import { useState, useEffect } from 'react';

const RegistrationPage = ({  }) => {
  //account table
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [emailReg, setEmailReg] = useState('');

  const registerAccount = () => {
    Axios.post("http://localhost:3001/account", {
      username: usernameReg,
      password: passwordReg,
      email: emailReg
      //accessLevel = customer
    }).then((response) => {
      console.log(response);
    });
  };

  //temporary customer
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDOB] = useState('');
  const [hotelID, setHotelID] = useState('');


  const tempRegisterCustomer = () => {
    Axios.post("http://localhost:3001/tempcustomer", {
      fName: fName,
      lName: lName,
      address: address,
      city: city,
      country: country,
      postalCode: postalCode,
      phone: phone,
      dob: dob,
      //ename is initially null
      hotelID: hotelID,
      username: usernameReg
    }).then((response) => {
      console.log(response);
    });
  };

  //get CustomerID

  const [customerID, setCustomerID] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/getid').then((response) => {
          setCustomerID(response.data);
          console.log(response.data);
    });
  }, []);  

  let id = 0;
  for (let i = 0; i < customerID.length; i++) {
    let temp = customerID[i];
    if (temp > id) {
      id = temp;
    }
  }

  //Emergency Contact

  const [eName, setEName] = useState('');
  const [ePhone, setEPhone] = useState('');
  const [eRelationship, setERelationship] = useState('');
  const [cID, setCID] = useState(0);
  setCID(id);

  const registerEContact = () => {
    Axios.post("http://localhost:3001/econtact", {
      //customerID - use COUNT * to get thisss
      eName: eName,
      ePhone: ePhone,
      eRelationship: eRelationship,
      cID: cID
    }).then((response) => {
      console.log(response);
    });
  };

  //finalize customer
  // const finalizeCustomer = () => {
  //   Axios.post("http://localhost:3001/customer", {
  //     customerID: customerID,
  //     eName: eName
  //   }).then((response) => {
  //     console.log(response);
  //   });
  // };

  //Hotel ID's fetching
  const [hID, setHID] = useState([]);


  useEffect(() => {
    Axios.get('http://localhost:3001/gethotelid').then((response) => {
          setHID(response.data);
          console.log(response.data);
    });
  }, []); 


  
  return (
    <div className="registrationRoot">
    <h1>Registration</h1>
    <h2>Personal Information</h2>
    <Form>

  <Form.Group className="mb-3" controlId="formBasicUsername">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="Username" required
    onChange={(e) => {
      setUsernameReg(e.target.value);
    }}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" required
    onChange={(e) => {
      setPasswordReg(e.target.value);
    }}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" placeholder="Email Address" required 
    onChange={(e) => {
      setEmailReg(e.target.value);
    }}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="fname" placeholder="First Name" required
    onChange={(e) => {
      setFName(e.target.value);
    }}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="lname" placeholder="Last Name" required
    onChange={(e) => {
      setLName(e.target.value);
    }}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control type="address" placeholder="Address" required
    onChange={(e) => {
      setAddress(e.target.value);
    }}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formAddress">
    <Form.Label>City</Form.Label>
    <Form.Control type="city" placeholder="City" required
    onChange={(e) => {
      setCity(e.target.value);
    }}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formAddress">
    <Form.Label>Country</Form.Label>
    <Form.Control type="country" placeholder="Country" required
    onChange={(e) => {
      setCountry(e.target.value);
    }}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formAddress">
    <Form.Label>Postal Code</Form.Label>
    <Form.Control type="postalcode" placeholder="PostalCode" required
    onChange={(e) => {
      setPostalCode(e.target.value);
    }}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPhone">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="phone" placeholder="Phone" required
    onChange={(e) => {
      setPhone(e.target.value);
    }}/>
  </Form.Group>  
  
  <Form.Group className="mb-3" controlId="formBasicDOB">
    <Form.Label>Date of Birth</Form.Label>
    <Form.Control type="dob" placeholder="DOB" required
    onChange={(e) => {
      setDOB(e.target.value);
    }}/>
  </Form.Group>

  <h2>Emergency Contact Information</h2>

  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="ename" placeholder="EName" required
    onChange={(e) => {
      setEName(e.target.value);
    }}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPhone">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="ephone" placeholder="EPhone" required
    onChange={(e) => {
      setEPhone(e.target.value);
    }}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicRelation">
    <Form.Label>Relationship</Form.Label>
    <Form.Control type="relation" placeholder="Relationship" required
    onChange={(e) => {
      setERelationship(e.target.value);
    }}/>
  </Form.Group>


  {hID.map((val) => {
    return ( <h1>Hotel ID: {val.hID}</h1> );
  })}

  <h2>Hotel Information (Optional)</h2>

  <Form.Group className="mb-3" controlId="formBasicHotelID">
    <Form.Label>Hotel ID</Form.Label>
    <Form.Select type="hotelID">
      <option>Select</option>
      {/* currently hardcoded --> CHANGE */}
      <option value="1">Best Western</option> 
      <option value="2">Holidy Inn</option>
      <option value="3">Hilton Garden Inn</option>
    </Form.Select>
  </Form.Group>

  {/* <Form.Group className="mb-3" controlId="formBasicHotelName">
    <Form.Label>Hotel Name</Form.Label>
    <Form.Control type="hotelName" placeholder="Hotel Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicHotelPhone">
    <Form.Label>Hotel Phone Number</Form.Label>
    <Form.Control type="hotelPhone" placeholder="Hotel Phone" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicHotelAddress">
    <Form.Label>Hotel Address</Form.Label>
    <Form.Control type="hotelAddress" placeholder="Hotel Address" />
  </Form.Group> */}
  
  <div className="buttonDiv">
  <Button type="submit" className="regButton">
    Register!
  </Button>
  </div>
</Form>
</div>
    )
}

export default RegistrationPage;