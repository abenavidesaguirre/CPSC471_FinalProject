import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./Registration.css"
import { useState, useEffect } from 'react'
import  Axios  from 'axios'
import { useNavigate } from 'react-router'

const Registration = () => {
    const navigate = useNavigate();
    const [customerList, setCustomerList] = useState([])
    const [accountList, setAccountList] = useState([])
    const [emergList, setEmergList] = useState([])

    const [customerCount, setCustomerCount] = useState([])

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [dob, setDob] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [streetAddress, setStreetAddress] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [emergeName, setEmergeName] = useState("")
    const [emergePhone, setEmergePhone] = useState("")
    const [emergeRel, setEmergeRel] = useState("")
    const [hotelID, setHotelID] = useState()

    const [hotels, setHotels] = useState([])

    useEffect(() => {
      Axios.get(`http://localhost:3001/hotels`)
      .then((response) => {
        setHotels(response.data);
      });

      Axios.get(`http://localhost:3001/customerCount`)
      .then((response) => {
        setCustomerCount(response.data);
      });
        console.log(customerCount)
    }, [])

    const register = (e) => {
      e.preventDefault();

      var custCount = 0;
      customerCount.map((val) => {
        custCount = val.Count
      })

      console.log("Printing: " + custCount)
      console.log(email)
      console.log(firstName)
      console.log(lastName)
      console.log(dob)
      console.log(username)
      console.log(password)
      console.log(streetAddress)
      console.log(city)
      console.log(country)
      console.log(postalCode)
      console.log(phoneNumber)
      console.log(emergeName)
      console.log(emergePhone)
      console.log(emergeRel)
      console.log(hotelID)
      if(email!=="" && firstName!=="" && lastName!=="" && dob!=="" && username!=="" && password!=="" && streetAddress!=="" && city!==""){
        if(country!=="" && postalCode!=="" && phoneNumber!=="" && emergeName!=="" && emergePhone!=="" && emergeRel!==""){

          
          

          Axios.post("http://localhost:3001/registerAccount", {
            Username: username,
            Password: password,
            Email: email,
            AccessLevel: "Customer",
          }).then(() => {
            setAccountList([
              ...accountList,
              {
                Username: username,
                Password: password,
                Email: email,
                AccessLevel: "Customer",
              },
            ]);
          });

          Axios.post("http://localhost:3001/registerCustomer", {
            
            CustomerID: custCount + 1,
            FirstName: firstName,
            LastName: lastName,
            Address: streetAddress,
            City: city,
            Country: country,
            PostalCode: postalCode,
            PhoneNumber: phoneNumber,
            DOB: dob,
            HotelID: hotelID,
            AccountUsername: username,
          }).then(()=> {
            setCustomerList([
              ...customerList,
              {
                FirstName: firstName,
                LastName: lastName,
                Address: streetAddress,
                City: city,
                Country: country,
                PostalCode: postalCode,
                PhoneNumber: phoneNumber,
                DOB: dob,
                HotelID: hotelID,
                AccountUsername: username,
              },
            ]);
          });

          Axios.post("http://localhost:3001/registerEmergContact", {
          
            EmergencyName: emergeName,
            EmergencyPhone: emergePhone,
            Relationship: emergeRel,
            CustomerID: custCount + 1,
          }).then(()=> {
            setEmergList([
              ...emergList,
              {
                EmergencyName: emergeName,
                EmergencyPhone: emergePhone,
                Relationship: emergeRel,
                CustomerID: custCount + 1,
              },
            ]);
          });
          navigate("/");
        }
      }
    }

    return (
    <div className="registrationRoot">
    <h1>Registration</h1>
    <h2>Personal Information</h2>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)} required />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)} required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)} required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicDOB">
    <Form.Label>Date of Birth</Form.Label>
    <Form.Control type="date" placeholder="DOB" onChange={(e)=>setDob(e.target.value)} required/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicUsername">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formAddress">
    <Form.Label>Street Address</Form.Label>
    <Form.Control type="text" placeholder="Address" onChange={(e)=>setStreetAddress(e.target.value)} required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formAddress">
    <Form.Label>City</Form.Label>
    <Form.Control type="text" placeholder="City" onChange={(e)=>setCity(e.target.value)} required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formAddress">
    <Form.Label>Country</Form.Label>
    <Form.Control type="text" placeholder="Country" onChange={(e)=>setCountry(e.target.value)} required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formAddress">
    <Form.Label>Postal Code</Form.Label>
    <Form.Control type="text" placeholder="Postal Code: A1A 1A1" pattern="[A-Z]{1}[0-9]{1}[A-Z]{1} [0-9]{1}[A-Z]{1}[0-9]{1}" onChange={(e)=>setPostalCode(e.target.value)} required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPhone">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="tel" placeholder="Phone: 123-123-1234" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={(e)=>setPhoneNumber(e.target.value)} required/>
  </Form.Group>

  

  <h2>Emergency Contact Information</h2>

  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" placeholder="Name" onChange={(e)=>setEmergeName(e.target.value)} required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPhone">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="tel" placeholder="Phone: 123-123-1234" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={(e)=>setEmergePhone(e.target.value)} required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicRelation">
    <Form.Label>Relationship</Form.Label>
    <Form.Control type="text" placeholder="Relationship" onChange={(e)=>setEmergeRel(e.target.value)} required/>
  </Form.Group>

  <h2>Hotel Information (Optional)</h2>

  <Form.Group className="mb-3" controlId="formBasicHotelID">
    <Form.Label>Hotel Name</Form.Label>
    <Form.Select type="text" onChange={(e)=>setHotelID(e.target.value)}>
      <option>Select</option>
      {hotels.map((hotels=> <option value={hotels.PartnerID}>{hotels.Name}</option>))}
    </Form.Select>
  </Form.Group>
  
  <div className="buttonDiv">
  <button className="regButton" onClick={(e)=>register(e)}>Register!</button>
  
  </div>
</Form>
</div>
    )
}

export default Registration;