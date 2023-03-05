import React,{useState} from 'react'
import Home from './Screens/Home';
import SignUp from './Components/SignUp'
import Login from './Components/Login';
import AppState from './Context/AppState';
import Navbar from './Components/Navbar';
import {

  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [alert, setalert] = useState("");


const showAlert=(message,type)=>{
  console.log("yaahin par")
  setalert({
    text:message,
    type:type
  })
  setTimeout(()=>{
  setalert(null);
  },1500);
  
 }
  return (
    
    <>

    <AppState>
    
    <Router>
    <Navbar  />
    
    <div >
    <Routes> 
    <Route exact path="/"  element={ <Home showAlert={showAlert}/>} />
    <Route exact path="/sign-up"  element={ <SignUp showAlert={showAlert}/>} />
    <Route exact path="/login"  element={ <Login showAlert={showAlert}/>} />
     </Routes>
    </div>
    
    </Router>
    
    </AppState>
        </>
  );
}

export default App;
