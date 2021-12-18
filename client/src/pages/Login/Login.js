import { useState } from "react";
import {Form} from "react-bootstrap"
import { useNavigate } from "react-router";
import Axios from "axios"
import "./Login.css"

const Login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [accessLevel, setAccessLevel] = useState([]);

  var userAccess = "test"

  let navigate = useNavigate();

  const getAccess = () => {
    Axios.post("http://localhost:3001/customerAccess", {
      Username: Username,
    }).then((response) => {
      setAccessLevel(response.data);
    })
    // console.log("Printing here")
    // console.log(accessLevel)

    accessLevel.map((val) => {
          userAccess = val.AccessLevel
        }
        )

        localStorage.setItem("accessLevel", userAccess);
  }


  const login = (e) => { 
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      Username: Username,
      Password: Password,
    }).then((response) => {
      if (!response.data.loggedIn) {
        setErrorMessage(response.data.message);
        
      } else {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("username", response.data.username);
        
        getAccess();
        
        if(localStorage.getItem("accessLevel")==="Customer"){    
        navigate("/customerDash")
        } else {
          navigate("/calendar");
        }
      }
    });
    
  };

  return (
    <div className="loginRoot">
      <h1>Login</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Username: </Form.Label>
          <Form.Control type="name" placeholder="Username" onChange={(e)=> {setUsername(e.target.value)}} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=> {setPassword(e.target.value)}} required />
        </Form.Group>
        <div className="loginButton">
          <button className="login" onMouseMove={()=>getAccess()} onClick={(e)=>login(e)}>Login</button>
        </div>
        <h5 style={{ color: "red" }}>{errorMessage} </h5>
      </Form>
    </div>
  )
}

export default Login