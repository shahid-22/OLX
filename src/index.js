import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Firebasecontext} from "./store/Firebasecontext"
import {firebase} from './firebase/config'
import Context from './store/Firebasecontext'

console.log("jjj",firebase);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Firebasecontext.Provider value={{firebase}}>
    <Context>
    <App />
    </Context>
  </Firebasecontext.Provider>
  </React.StrictMode>
);

