import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Firebasecontext} from "./store/Firebasecontext"
import {firebase} from './firebase/config'

console.log("jjj",firebase);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Firebasecontext.Provider value={{firebase}}>
    <App />
  </Firebasecontext.Provider>
  </React.StrictMode>
);

