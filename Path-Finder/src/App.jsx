/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Careercard from "./pages/CC/careercard";
import About from "./pages/About/About";
import Articles from './pages/Articles/Articles';
const App = () => {
  return (
    <div>
      {/* <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        </Routes>
      </Router> */}
      {/* <Careercard /> */}
      <About />
      {/* <Articles/> */}
      
    </div>
  )
}

export default App
