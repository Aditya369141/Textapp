import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React,{useState} from 'react'
// import { BrowserRouter, Routes,Route } from "react-router-dom"



function App() {
    var [alert , setAlert] = useState();
    var showAlert = function(message,type){
    setAlert({
      msg: message,
      type: type 
    })
    setTimeout(()=>{
      setAlert(null);
    },1000)
  }
  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title = "Aditya Singh Somvasnhi"/>
    <Alert alert={alert}/>
    <Textform showAlert={showAlert}/>
    {/* <Routes> */}
      {/* <Route path="/" element={<Textform showAlert={showAlert}/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>  */}
    </>
  );
}

export default App;
