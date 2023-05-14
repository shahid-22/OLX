
import Home from "./Pages/Home";
import {BrowserRouter,Routes,Route}  from "react-router-dom"
import SignupPage from "./Pages/Signup";

function App() {
  return (

    <div style={{overflowX:"hidden"}} >
       <BrowserRouter>
      <Routes>
        <Route exact path="/"  element={<Home/>} />
        <Route exact path="/signup"  element={<SignupPage/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
