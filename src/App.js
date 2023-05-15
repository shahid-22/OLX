
import Home from "./Pages/Home";
import {BrowserRouter,Routes,Route}  from "react-router-dom"
import SignupPage from "./Pages/Signup";
import Login from "./Components/Login/Login";


function App() {
  return (

    <div style={{overflowX:"hidden"}} >
       <BrowserRouter>
      <Routes>
        <Route exact path="/"  element={<Home/>} />
        <Route exact path="/signup"  element={<SignupPage/>} />
        <Route exact path="/login"  element={<Login/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
