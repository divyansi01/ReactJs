// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {   // function based component 
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40'
      // showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      // showAlert("Light Mode has been enabled", "success");

    }
  }
  const redMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#541212'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return ( // can return only one element like here div classname = "App" is being returned
    // if you want to return more than one tags like h1 and div then add <.> and </> at the front and at the end.
    <>
      {/* <Router> */}
      <Navbar title="My App" mode={mode} toggleMode={toggleMode} redMode={redMode} />
      {/* <Navbar /> */}
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />}> */}
        {/* <About aboutText="About" /> */}
        {/* </Route> */}
        {/* <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} />}> */}
        <TextForm showAlert={showAlert} Heading="Text Analysis" mode={mode} />
        {/* </Route>
          </Routes> */}
      </div>
      {/* </Router> */}
    </>

  );
}

export default App;
