/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { NavLink } from 'react-router-dom';
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
          <nav>
          <button><span><Link to ="/">Home</Link></span></button>
          <button><Link to="/Careers">Careers</Link></button>
          <button><Link to="/Counselor">Counselor</Link></button>
          <button><Link to="/Articles">Articles</Link></button>
          <button><Link to="/About">About</Link></button>
              </nav>
          {/* <ul>
            <li>
              <Link to="/Careers">Careers</Link>
            </li>
            <li>
              <Link to="/Counselor">Counselor</Link>
            </li>
            <li>
              <Link to="/Articles">Articles</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            
          </ul> */}

        </div>
        <div className='login-section'>
          <button> <Link to="/Login">Login | <span>Sign up</span></Link></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
