import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";

function App() {
  const [alert,setAlert]=useState('null');
  const showAlert = (message,type)=>{
      setAlert({
        message:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500)
  }
  return (
    <>
      <NoteState>
        <NavBar />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/"  element={<Home showAlert={showAlert} />} />
            <Route exact path="/about"element={<About  />} />
            <Route exact path="/login"  element={<Login showAlert={showAlert}/>}/>
            <Route exact path="/singup"  element={<Signup showAlert={showAlert}/>}/>
          </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
