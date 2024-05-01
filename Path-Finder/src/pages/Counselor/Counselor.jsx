/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Newscover from "../../components/Newscover";
import "./Counselor.scss";
const Counselor = () => {
  const [firstName, setFirstName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [time, setTime] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('first-name', firstName);
    localStorage.setItem('date', date);
    localStorage.setItem('email',email);
    localStorage.setItem('time', time);


    alert("Your request has been sent to our counselor which will get back to you ASAP!");

    setFirstName(" ");
    setDate(" ");
    setEmail(" ");
    setTime(" ");
  };
  return (
    <>
    <Navbar />
  
    <div className='page1'>
      <div className="section-1">
        <div className="left-side">
          <h1>Welcome to Counselor Section</h1>
          <p>At <span>PathFinder</span> we understand that navigating life's challenges can sometimes feel overwhelming. That's why we offer professional counseling services to provide support, guidance, and solutions tailored to your unique needs. Our team of experienced counselors specializes in various areas</p>
          <button ><a href="#line1"> Get Started</a></button>
          
        </div>
        <div className="right-side">
          <img src="https://www.careerguide.com/career/wp-content/uploads/2020/03/interviewp_dribbble.gif" alt="" />
        </div>
      </div>

    </div>
    <div className="page2">
      <h1>
Tailored <span>Counseling</span> for Your Unique Needs

Explore our diverse counseling domains and select the one that resonates with you. Our expert counselors offer personalized guidance in your chosen domain, ensuring you receive the support you need to thrive. Take the first step towards clarity and empowerment with counseling tailored to your specific domain.</h1>

    <p>Here are the professional Counselors on our website</p>
    
    
    </div>
    <div className="page3">
    <div className="main">
      <div className="card">
        <img src="https://images.herzindagi.info/image/2022/Dec/women-inequality-work-place.jpg" alt="" />
        <div className="card-content">
          <h2>Card Heading</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
          </p>
         
        </div>
      </div>
    
      <form className='form' onSubmit={handleSubmit} >
      <div>
        <label htmlFor="first-name">Name :</label>
        <input 
          type="text" 
          id="first-name" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="date">Date : </label>
        <input 
          type="date" 
          id="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="email">Email : </label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="time">Time : </label>
        <input 
          type="time" 
          id="time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
        />
      </div>
      <div>
        <button type="submit">Book Appointment !</button>
      </div>
    </form>
    
    </div>
   
    <div className="main">
      <div className="card">
        <img src="https://images.herzindagi.info/image/2022/Dec/women-inequality-work-place.jpg" alt="" />
        <div className="card-content">
          <h2>Card Heading</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
          </p>
         
        </div>
      </div>
    
      <form className='form' onSubmit={handleSubmit} >
      <div>
        <label htmlFor="first-name">Name :</label>
        <input 
          type="text" 
          id="first-name" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="date">Date : </label>
        <input 
          type="date" 
          id="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="email">Email : </label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="time">Time : </label>
        <input 
          type="time" 
          id="time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
        />
      </div>
      <div>
        <button type="submit">Book Appointment !</button>
      </div>
    </form>
    
    </div>
    <div className="main">
      <div className="card">
        <img src="https://images.herzindagi.info/image/2022/Dec/women-inequality-work-place.jpg" alt="" />
        <div className="card-content">
          <h2>Card Heading</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
          </p>
         
        </div>
      </div>
    
      <form className='form' onSubmit={handleSubmit} >
      <div>
        <label htmlFor="first-name">Name :</label>
        <input 
          type="text" 
          id="first-name" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="date">Date : </label>
        <input 
          type="date" 
          id="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="email">Email : </label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="time">Time : </label>
        <input 
          type="time" 
          id="time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
        />
      </div>
      <div>
        <button type="submit">Book Appointment !</button>
      </div>
    </form>
    
    </div>
    

       </div>
    <Newscover />
    <Footer />
    </>
  )
}

export default Counselor