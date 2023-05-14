import React, { useState, useContext } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { Firebasecontext } from '../../store/Firebasecontext';

import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { firebase } from '../../firebase/config';


export default function Signup() {

  const [Username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [password, setpassword] = useState("")
  const { firebase } = useContext(Firebasecontext)
  const handilsubmit = (e) => {
    e.preventDefault()
    console.log("email", email);
    console.log("password", password);
    console.log("auth", firebase);
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        console.log("arrived the success 3456890543457890%^&)$%^*)");
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handilsubmit}>
          <label htmlFor="fname" className='text'>Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={Username}
            onChange={(e) => { setusername(e.target.value) }}
            name="name"
          />
          <br />
          <label htmlFor="fname" className='text'>Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e) => { setemail(e.target.value) }}
          />
          <br />
          <label htmlFor="lname" className='text'>Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={phone}
            onChange={(e) => { setphone(e.target.value) }}
          />
          <br />
          <label htmlFor="lname" className='text'>Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e) => { setpassword(e.target.value) }}
          />
          <br />
          <br />
          <button type='submit'>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
