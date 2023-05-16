import React, { Fragment,useContext,useState } from 'react';
import { useNavigate } from "react-router-dom"
import './Create.css';
import Header from '../Header/Header';
import {Firebasecontext,AuthContext} from "../../store/Firebasecontext"
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const Create = () => {
  const navigate=useNavigate()
  const storage = getStorage();
  const firestore = getFirestore();

const date = new Date();
  const {firebase} =useContext(Firebasecontext)
  const {User}=useContext(AuthContext)
  console.log("userrrrrrrrr",User);
  const [name,setname]=useState('')
  const [category,setcategory]=useState('')
  const [price,setprice]=useState('')
  const[image,setimage]=useState(null)
  const hanlesubmit=(e)=>{
    uploadBytes(ref(storage, `/images/${image.name}`), image)
    .then((snapshot) => {
      return getDownloadURL(snapshot.ref);
    })
    .then((url) => {
      console.log(url);
      return addDoc(collection(firestore, 'products'), {
        productName: name,
        category,
        price,
        imageUrl: url,
        userId: User.uid,
        date: date.toLocaleDateString(),
      });
    })
    .then(() => {
      alert('Uploaded successfully!');
      setTimeout(() => {
       navigate('/')
      }, 2000);
    })
    .catch((error) => {
      console.error('Error uploading product:', error);
    });
  
    
  
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
  
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e)=>{setname(e.target.value)}}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e)=>{setcategory(e.target.value)}}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
             className="input"
              type="number" 
              id="fname" 
              value={price}
              onChange={(e)=>{setprice(e.target.value)}}
              name="Price" />
            <br />
         
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ?URL.createObjectURL(image):''}></img>
        
            <br />
            <input onChange={(e)=>{
              setimage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={hanlesubmit} className="uploadBtn">upload and Submit</button>
        
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
