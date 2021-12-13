// import React from 'react';
// import InputField from './InputField';
// import SubmitButton from './SubmitButton';
// import UserStore from './UserStore'; //to find out about successful logins
// import "./LoginCSS.css"
// //import {login, username, password} from '../../App.js';



// class LoginForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: '',
//             //buttonDisabled: false //API checks if user actually exists @ login time
//         }
//     }

//     setInputValue(property, val) {
//         val = val.trim(); //trimmed string value
//         if (val.length > 20) { //max value of input is 20 
//             return;
//         }
//         this.setState({
//             [property]: val
//         })
//     }

//     resetForm() {
//         this.setState({
//             username: '',
//             password: '',
//             buttonDisabled: false //typing wrong password or username = reset form
//         })
//     }

//     async doLogin() { //checks with API
//         //check if username exists in API
//         if (!this.state.username) {
//             return;
//         }

//         //check if password exists in API
//         if (!this.state.password) {
//             return;
//         }

//         //user can't double click submit button
//         this.setState({
//             buttonDisabled: true
//         })

//         try {
//             //access an API point
//             let res = await fetch('/login', {
//                 method: 'post',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 },
//                 //send user and pass to API to check for existence
//                 body: JSON.stringify({
//                     username: this.state.username,
//                     password: this.state.password
//                 })
//             });

//             //result variable that holds result from json
//             let result = await res.json();
//             if (result && result.success) {
//                 //logs user in
//                 UserStore.isLoggenIn = true;
//                 UserStore.username = result.username;
//             }
            
//             else if (result && result.success === false) {
//                 this.resetForm();
//                 alert(result.msg); //return API error
//             }
//         }

//         catch(e) {
//             console.log(e);
//             this.resetForm();
//         }
//     }

//     render() {
//     return (
//     <div className="loginRoot">
//       <div className="loginForm">
//         <h2>Log in</h2>
        
//         <div className="fields">
//             <InputField 
//                 type = 'text'
//                 placeholder = 'Username'
//                 label = "Username: "
//                 //value = {this.state.username ? this.state.username : ''} //if username is set condition
//                 //onChange = {(val) => this.setInputValue('username', val)}
//                 onChange={(e) => {
//                     setUsername(e.target.value);
//                 }}
//                 />
//             <InputField
//                 type = 'password'
//                 placeholder = 'Password'
//                 label = "Password: "
//                 //value = {this.state.password ? this.state.password : ''} //if username is set condition
//                 //onChange = {(val) => this.setInputValue('password', val)}
//                 onChange={(e) => {
//                     setPassword(e.target.value);
//                 }}
//                 />
//         </div>
        
//             <SubmitButton
//                 text = 'Login'
//                 disabled = {this.state.buttonDisabled}
//                 onClick = { () => this.doLogin()}
//             />
//         </div>
//         </div>
//     );
//   }
// }

// export default LoginForm;
