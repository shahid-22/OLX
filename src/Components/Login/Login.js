import React,{useState,useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import {Firebasecontext} from "../../store/Firebasecontext"
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const { firebase } = useContext(Firebasecontext)
  const handleLogin=(e)=>{
    e.preventDefault()
    const auth = getAuth()
    signInWithEmailAndPassword(auth,email, password).then(()=>{
       navigate('/')
    })
    .catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>{setpassword(e.target.value)}}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
