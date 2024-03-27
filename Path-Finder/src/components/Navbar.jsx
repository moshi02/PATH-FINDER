/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import "../components/Navbar.scss";
import Card from '../pages/CC/careercard';
const Navbar = () => {
  return (
    <div className='navbar'> 
      <div className='maindiv'>
        <div className='Logo' >
          <img src="src\images\logo.png" alt="" />
        </div>
        <div className='Content'>
          {/* <Link to="/">Home</Link>
          <Link to="/careers">Careers</Link> 
          <Link to="/counselor">Counselor</Link> 
          <Link to="/articles">Articles</Link>
          <Link to="/about">About us</Link> */}
          <button><span>Home</span></button>
          <button>Careers</button>
          <button>Counselor</button>
          <button>Articles</button>
          <button>About Us</button>
        </div>
        <div className='login-section'>
          <button>Login | <span>Sign up</span></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
