//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/Textform';
import React, { useState } from 'react';
import Alert from './Components/Alert';
//import About from './Components/About';
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";*/


function App() {

  const [mode, setMode] = useState('light');

  const toggleMod = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode is enabaled sucessfully", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode is disable sucessfully", "success");
    }
  }

  const [alert, setAlaert] = useState(null);

  const showAlert = (message, type) => {
    setAlaert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlaert(null);
    }, 2000);

  }


  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMod={toggleMod} />
        <Alert alert={alert} />
        {/* <Switch> */}
          {/* <Route path="/about"> */}
            {/* <About mode={mode} /> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
            <TextForm mode={mode} showAlert={showAlert} />
          {/* </Route> */}
        {/* </Switch> */}
      {/* </Router> */}
    </>
  );
}

export default App;