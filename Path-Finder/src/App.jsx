import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Careercard from "./pages/CC/careercard";
import About from "./pages/About/About";
import Articles from './pages/Articles/Articles';
import Navbar from './components/Navbar';
import Counselor from "./pages/Counselor/Counselor"
import Dashboard from "./pages/Counselor Dash/Dashboard";
import { useUser } from "@clerk/clerk-react";
import "./App.css";

const App = () => {
  const user = useUser();

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/Careers" element={<Careercard />} />
        <Route path="/Counselor" element={<Counselor />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/About" element={<About />} />

        {user.isSignedIn ? (
          <Route path="/Dashboard" element={<Dashboard />} />
        ) : (
          <Route path="/Dashboard" element={<UnauthorizedAccess />} />
        )}
      </Routes>
    </div>
  );
};

const UnauthorizedAccess = () => {
  return <div>You are not authorized to access this page.</div>;
};

export default App;
