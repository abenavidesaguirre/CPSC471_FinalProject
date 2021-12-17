import React from "react";
// import { observer } from 'mobx-react'
// import UserStore from './stores/UserStore';
// import LoginForm from './stores/LoginForm';
// import SubmitButton from './stores/SubmitButton';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Axios from "axios";
import { useState, useEffect } from 'react';
import "./styling/RegistrationCSS.css"

// class LoginPage extends React.Component{
//     async componentDidMount() {

//         try{
//           let res = await fetch('/isLoggedIn', {
//             method: 'post',
//             headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/json'
//             }
//           });
//           let result = await res.json();
    
//           if (result && result.success) {
//             UserStore.loading = false;
//             UserStore.isLoggedIn = true;
//             UserStore.username = result.username;
//           }
    
//           else {
//             UserStore.loading = false;
//             UserStore.isLoggedIn = false;
//           }
//         }
    
//         catch(e) {
//           UserStore.loading = false;
//           UserStore.isLoggedIn = false;
    
//         }
//       }
    
//       async doLogout() {
    
//         try{
//           let res = await fetch('/logout', {
//             method: 'post',
//             headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/json'
//             }
//           });
//           let result = await res.json();
      
//           if (result && result.success) {
//             UserStore.isLoggedIn = false;
//             UserStore.username = '';
//           }
      
//         }
      
//         catch(e) {
//           console.log(e);
      
//         }
//       }
    
//       render() {
    
//         if (UserStore.loading) {
//           return (
//             <div className="app">
//               <div className = 'container'>
//                 Loading, please wait...
//               </div>
//             </div>
//           );
//         }
    
//         else {
    
//           if (UserStore.isLoggedIn) {
//             return (
//               <div className="app">
//                 <div className = 'container'>
//                   Welcome {UserStore.username}
//                   <SubmitButton
//                     text = { 'Log out'}
//                     disabled = {false}
//                     onClick = { () => this.doLogout() }
//                     />
//                 </div>
//               </div>
//             );
//           }
//         }
//     }
        
// }
      
// export default LoginForm;

const LoginPage = ({ times }) => {

   //for login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response.data);
    });
  };
  return (
  <div className="LoginRoot">
  <h1>Login</h1>
  <Form>
<Form.Group className="mb-3" controlId="formBasicUsername">
  <Form.Label>Username</Form.Label>
  <Form.Control type="username" placeholder="Username" required 
  onChange={(e) => {
    setUsername(e.target.value);
  }}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" required
  onChange={(e) => {
                      setPassword(e.target.value);
                    }}/>
</Form.Group>
</Form>

<div className="buttonDiv">
  <Button type="submit" className="subButton" onClick={login}>
    Login
  </Button>
  </div>
</div>
    )
}

export default LoginPage;