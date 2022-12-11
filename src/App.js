import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import {

  Route, Link, Routes
} from 'react-router-dom';


function App() {
  const [mode, setmode] = useState('light');  //  Tels whether Dark mode is on or off
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  // Toggle Function
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#032240";
      showAlert("Dark mode Enabled", "success")
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white"
      showAlert("Light mode Enabled", "success");
    }
  }
  // <Route path="/" element={<Home2/>}/>
  return (
    <>

      {/* Props => Properties in this we have this title and aboutText see in Navbar.js */}
      <Navbar title="SamarCoding" aboutText="AboutUs" mode={mode} enableDarkMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-5 ">
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} />} />
        </Routes>


      </div>

    </>
  );
}

export default App;
