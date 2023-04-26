import {BrowserRouter, Routes, Route} from "react-router-dom"
import './css/style.css';
import Login from "./screen/Login";
import Main from "./screen/Main";
import Patients from "./screen/Patients";
import Data from "./screen/Data";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path= "/" element= {<Login/>} />
        <Route path= "/main" element= {<Main/>} />
        <Route path= "/patients" element= {<Patients/>} />
        <Route path= "/data" element= {<Data/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
