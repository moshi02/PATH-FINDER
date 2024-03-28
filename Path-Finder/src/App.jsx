/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Careercard from "./pages/CC/careercard";
import About from "./pages/About/About";
import Articles from './pages/Articles/Articles';
import Navbar from './components/Navbar';
import Counselor from "./pages/Counselor/Counselor"
import Login from './pages/Login/Login';
const App = () => {
  return (
    <div className='App'>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />}  /> 
        <Route path="/Careers" element={<Careercard />}  /> 
        <Route path="/Counselor" element={<Counselor />}  /> 
        <Route path="/Articles" element={<Articles />}  /> 
        <Route path="/About" element={<About />}  /> 
        <Route path="/Login" element={<Login />} />
      </Routes>
      {/* <Login /> */}
      {/* <Home/> */}
      {/* <Careercard /> */}
      {/* <About /> */}
      {/* <Articles/> */}
      
    </div>
  )
}

export default App
