import {initializeApp} from "firebase/app"
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBEpRxTmtXxC4w0mY4FWURw9n4QNrNgL24",
    authDomain: "olx-clone-e1c06.firebaseapp.com",
    projectId: "olx-clone-e1c06",
    storageBucket: "olx-clone-e1c06.appspot.com",
    messagingSenderId: "763706866495",
    appId: "1:763706866495:web:49d5e4b7623b12580af18a"
  };


 export const firebase=    initializeApp(firebaseConfig)
