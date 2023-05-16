import React,{useState,useContext,useEffect} from 'react';
import { collection, query, where, getDocs,getFirestore } from 'firebase/firestore';
import {useNavigate} from "react-router-dom"

import './View.css';
import { PostContext } from '../../store/PostContext';
import { AuthContext, Firebasecontext } from '../../store/Firebasecontext';

function View() {
  const [userdetails,setuserdetails]=useState()
  const {postDetails}=useContext(PostContext)
  const {firebase}=useContext(Firebasecontext)
  const {User}=useContext(AuthContext)
  const firestore = getFirestore();
  const navigate=useNavigate()
  useEffect(()=>{
    const fetchData = async () => {
      if(User){
      try {
        const {userId}=postDetails
        const q = query(collection(firestore, 'users'), where('id', '==', userId));
        const querySnapshot = await getDocs(q);
    
        querySnapshot.forEach((doc) => {
          setuserdetails(doc.data());
        });
      } catch {
       navigate('/')
      }
    }else{
      navigate('/login')
    }
    };
    
    fetchData();
  })
  return (
    <div className="viewParentDiv">
    {
      postDetails ? (
        <>
        <div className="imageShowDiv">
        <img
          src={postDetails.imageUrl}
          alt="Product"
        />
      </div>
        <div className="rightSection">
          <div className="productDetails">
            <p>&#x20B9; {postDetails.price} </p>
            <span>Name : {postDetails.productName}</span>
            <p>Category : {postDetails.category}</p>
            <span>Date : {postDetails.date}</span>
          </div>
          <div className="contactDetails">
            <p>Seller details</p>
            {
             userdetails && (
                <>
                <p>Name : {userdetails.username}</p>
                <p>Mobile : {userdetails.phone}</p>
                </>
              )
            }
          </div>
        </div>
      </>
      ) : (
        <>
          {navigate('/')}
        </>
      )
    }
    </div>
  );
}
export default View;
