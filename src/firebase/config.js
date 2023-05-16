import {initializeApp} from "firebase/app"

import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1c-f8SyMsnnLVgfW0H8ihOhXl0mQygD4",
  authDomain: "olx-project-f2aaa.firebaseapp.com",
  projectId: "olx-project-f2aaa",
  storageBucket: "olx-project-f2aaa.appspot.com",
  messagingSenderId: "33847891125",
  appId: "1:33847891125:web:f2ff4a9aad835d60b6dafc",
  measurementId: "G-RVRHSQQR7M"
};

export const firebase = initializeApp(firebaseConfig)
const auth = getAuth(firebase);
 export const db = getFirestore(firebase);
  export const storage = getStorage(firebase);
//  export default  firebase.initializeApp(firebaseConfig)





