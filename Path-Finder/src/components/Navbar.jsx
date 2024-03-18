/* eslint-disable no-unused-vars */
import React from 'react'
import "../components/Navbar.scss";
const Navbar = () => {
  return (
    <div className='maindiv'>
      <div className='Logo' >
        <img src="src\images\logo.png" alt="" />
      </div>
      <div className='Content'>
        <button><span>Home</span></button>
        <button>Careers</button>
        <button>Counselor</button>
        <button>Articles</button>
        <button>About us</button>
      </div>
      <div className='login-section'>
        <button>Login | <span>Sign up</span></button>
      </div>
    </div>
  )
}

export default Navbar
