import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./pages";
import CS357 from "./pages/CS357";
import CS361 from "./pages/CS361";
import CS427 from "./pages/CS427";
import Schedule from "./pages/schedule";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path ="/Home" element={<Home/>} />
        <Route exact path ="/CS357" element={<CS357/>} />
        <Route exact path ="/CS361" element={<CS361/>} />
        <Route exact path ="/CS427" element={<CS427/>} />
        <Route exact path ="/Schedule" element={<Schedule/>} />
      </Routes>
    </Router>
  );
}

export default App;
