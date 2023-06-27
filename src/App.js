import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {  } from "reactstrap";
// import Base from "./components/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import About from "./Pages/About";
import Detail from "./Pages/Detail";
import Trailer from "./Pages/Trailer";
import CategoryDisplay from "./Pages/CategoryDisplay";
import EpisodePlayer from "./Pages/EpisodePlayer";


function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
        {/* <ToastContainer position="bottom-center" /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="/details/:animeId" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
          <Route path="/category/:categoryId"element={<CategoryDisplay/>}></Route>
          <Route path="/episode/:animeId"element={<EpisodePlayer/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
