/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { FaLinkedinIn,FaGithub,FaMailBulk,FaInstagram,FaAddressBook, FaLock  } from "react-icons/fa";

import "./Login.scss"
function Login() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [isSignUpMode2, setIsSignUpMode2] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
    setIsSignUpMode2(false);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
    setIsSignUpMode2(false);
  };

  const handleSignUpClick2 = () => {
    setIsSignUpMode2(true);
    setIsSignUpMode(false);
  };

  const handleSignInClick2 = () => {
    setIsSignUpMode2(false);
    setIsSignUpMode(false);
  };

  return (
    <div className="Main">
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''} ${isSignUpMode2 ? 'sign-up-mode2' : ''}`}>
      <div className="signin-signup">
        <form action="" className="sign-in-form">
          <h2 className="title">Sign in</h2>
          <div className="input-field">
            <FaAddressBook />
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <FaLock />
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" value="Login" className="btn" />
          <p className="social-text">Or Sign in with social platform</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="social-icon">
              <FaGithub size={20}/>
            </a>
            <a href="#" className="social-icon">
              <FaMailBulk size={20} />
            </a>
            <a href="#" className="social-icon">
              < FaInstagram size={20} />
            </a>
          </div>
          <p className="account-text">
            Don't have an account? <a href="#" id="sign-up-btn2" onClick={handleSignUpClick2}>Sign up</a>
          </p>
        </form>
        <form action="" className="sign-up-form">
          <h2 className="title">Sign up</h2>
          <div className="input-field">.
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="text" placeholder="Email" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" value="Sign up" className="btn" />
          <p className="social-text">Or Sign in with social platform</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="social-icon">
              <FaGithub size={20}/>
            </a>
            <a href="#" className="social-icon">
              <FaMailBulk size={20} />
            </a>
            <a href="#" className="social-icon">
              < FaInstagram size={20} />
            </a>
          </div>
          <p className="account-text">
            Already have an account? <a href="#" id="sign-in-btn2" onClick={handleSignInClick2}>Sign in</a>
          </p>
        </form>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Member of Path|Finder?</h3>
            <p>
              "Welcome back, Path|Finder! <br />
              It's fantastic to see you continuing your journey with us.
              Path|Finder is here to support your exploration!"
            </p>
            <button className="btn" id="sign-in-btn" onClick={handleSignInClick}>Sign in</button>
          </div>
          <img src="signin.svg" alt="" className="image" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>New to Path|Finder?</h3>
            <p>
              "Welcome to Path|Finder! <br />
              Let's navigate this path together and create meaningful
              experiences along the way. Happy exploring!"
            </p>
            <button className="btn" id="sign-up-btn" onClick={handleSignUpClick}>Sign up</button>
          </div>
          <img src="signup.svg" alt="" className="image" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;

