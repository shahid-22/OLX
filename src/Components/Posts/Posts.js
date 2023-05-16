import React,{useEffect,useContext,useState} from 'react';
import { collection, getDocs,getFirestore} from 'firebase/firestore';
import {useNavigate} from 'react-router-dom'


import Heart from '../../assets/Heart';
import './Post.css';
import { Firebasecontext } from '../../store/Firebasecontext';

function Posts() {
 const navigate=useNavigate()
  const firestore = getFirestore();
 const {firebase} =useContext(Firebasecontext)
 const [products,setproducts]=useState([])

useEffect(() => {
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, 'products'));
      const posts = querySnapshot.docs.map((product) => ({
        ...product.data(),
        id: product.id,
      }));
      console.log(posts);
      setproducts(posts)
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
},[]);
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
         { 
         products.map(product=>{

        return <div
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img onClick={()=>{navigate('/view')}} src={product.imageUrl} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9;{product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name">{product.productName}</p>
            </div>
            <div className="date">
              <span>{product.date}</span>
            </div>
          </div>
         })
           }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
