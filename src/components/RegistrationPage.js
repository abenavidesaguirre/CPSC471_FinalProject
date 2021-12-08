import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./styling/RegistrationCSS.css"

const RegistrationPage = ({ times }) => {
    return (
    <div className="registrationRoot">
    <h1>Registration</h1>
    <h2>Personal Information</h2>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" placeholder="Email Address" required />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="name" placeholder="Name" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicDOB">
    <Form.Label>Date of Birth</Form.Label>
    <Form.Control type="dob" placeholder="DOB" required/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicUsername">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="Username" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control type="address" placeholder="Address" required/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicPhone">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="phone" placeholder="Phone" required/>
  </Form.Group>

  

  <h2>Emergency Contact Information</h2>

  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="name" placeholder="Name" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPhone">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="phone" placeholder="Phone" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicRelation">
    <Form.Label>Relationship</Form.Label>
    <Form.Control type="relation" placeholder="Relationship" required/>
  </Form.Group>

  <h2>Hotel Information (Optional)</h2>

  <Form.Group className="mb-3" controlId="formBasicHotelID">
    <Form.Label>Hotel Name</Form.Label>
    <Form.Select type="hotelName">
      <option>Select</option>
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