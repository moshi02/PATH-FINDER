/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { NavLink } from 'react-router-dom';
import "../components/Navbar.scss";
import Card from '../pages/CC/careercard';
import Newscover from './Newscover';
import Footer from './Footer';
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"



const Navbar = () => {
  return (
    <>
    <div className='navbar'> 
      <div className='maindiv'>
        <div className='Logo' ><Link to="/">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAAA1CAYAAACz6Vx+AAAAAXNSR0IArs4c6QAAFCRJREFUeF7t3AOMbFkTB/Dz1raRtXeztm3btjdr287atr1Z20bWyiprG19+J6nO3X7tN/Omv8w9yWRmuvueW6eq/uXbA1JK/6ZylRwoOdDnHBhQgrHPZVASUHIgc6AEY6kIJQe6hAMlGLtEECUZJQdKMJY6UHKgSzhQgrFLBFGSUXKgBGOpAyUHuoQDJRi7RBAlGSUHSjCWOlByoEs4UIKxSwRRklFyoARjH+vATDPNlPbYY49MxZBDDpleeeWVdPzxx6e//vqrjykrbz+4OVCCcXBzvOp+8803X3rkkUfSv//+mwF4/fXXp4033niwg3HsscfORmHNNddMl112WTr22GPTjz/+2Mfc6V+3L8FYkPfss8+eJplkkuyh/Lz22mvZU/XmmnfeedOjjz6ab/H777+nm266KW200UaDFYzDDTdcuvDCC9M666yT7zvUUEOlM888M+24447p77//7s3jt733sMMOm5Zccsk0/PDD52vR9/jjj6fPP/+87b267YISjAWJHHTQQcnPgAED0h9//JE22WSTdOWVV/aqzOaZZ54MRuD/888/01VXXZU23XTTtkDgWjTzrn4Xl9es6tf9737W+OOPn9566600wggjZDDa74knnkgrrLBC+v7773v1/O1uPuqoo6Y77rgjzTXXXJlO51hooYVydPH/vjoGI8tJWVnRWCHc+B+jvv3223TDDTek4447Ln344YeDlV8s/SWXXJIVm1ICmnwsFLSamP322y/tv//++UxoB4pLL720V2nmGSnSP//8k+kSpm644YYtgxGde+65Zzr66KPz9YwI+inqzz//nIYeeuj8E553iCGGSMMMM0zmyxZbbJEBOdJII6XrrrsuLbHEEvk6y7m32mqr9Ntvv/Xq+dvdHBhvv/32DEbndR5gZDz+31fHYLz44ovTBhtsUFexi4BkbSkAMBx55JGDLQSj1OgU/gnFgO2oo46qS/M+++yTDjnkkKy8lHrzzTfP+VNvLp6RIgEFxbr66qtzmNpOeIjuww8/PBsQ1/nB7/CGzuJv54p9b7nllrT22mtXvCM6br311jTiiCOmN998M5/9+eef782jd7T3aKONlkN5ubbz4Nuiiy6aHnvssY7266aLOgYjyyrZ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" alt="" /></Link>
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
        {/* <div className='login-section'>
          <button> <Link to="/Login">Login | <span>Sign up</span></Link></button>
        </div> */}
        <div className="nav">
          <button className='dash'><Link to="/Dashboard">D⚡</Link></button>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </div>
      </div>
      
    </div>
    
  
    </>
  )
}

export default Navbar
