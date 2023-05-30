import {BrowserRouter, Routes, Route} from "react-router-dom"
import './css/style.css';
import Login from "./screen/Login";
import Main from "./screen/Main";
import Patients from "./screen/Patients";
import Data from "./screen/Data";
import Register from "./screen/Register";
import LookData from "./screen/LookData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path= "/" element= {<Login/>} />
        <Route path= "/register" element= {<Register/>} />
        <Route path= "/main" element= {<Main/>} />
        <Route path= "/patients" element= {<Patients/>} />
        <Route path= "/data/:id" element= {<Data/>} />
        <Route path="/lookdata/:id" element = {<LookData/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
