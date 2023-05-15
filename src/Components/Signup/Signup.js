import React, { useState, useContext } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { Firebasecontext } from '../../store/Firebasecontext';

import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { firebase } from '../../firebase/config';
// import {doc, setDoc } from "firebase/firestore"; 
import {db} from '../../firebase/config'
import { collection, addDoc } from "firebase/firestore"; 

export default function Signup() {

  const [Username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [password, setpassword] = useState("")
  const { firebase } = useContext(Firebasecontext)
  const handilsubmit = async(e) => {
    e.preventDefault()
    try{
    console.log("email", email);
    console.log("password", password);
    console.log("auth", firebase);
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        console.log("arrived the success 3456890543457890%^&$%^*");
        console.log(userCredential);
        const user=userCredential.user
        console.log('hhh',user);
        console.log(db);
      
        addDoc(collection(db, "users"), {
          id:userCredential.user.uid,
          username:Username,
          phone:phone
        })
        .then((response)=>{
          console.log(response, "successss4567909754");
        })
        .catch((err)=>{
          console.log(err,"somethignis nonkdnsdjibcdj");
        })
        // console.log("Document written with ID: ", docRef.id);
    

      })
      .catch((error) => {
        console.log("jjjj",error);
        // ..
      });
    }catch(error){
      console.log('hii',error);
    }
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
