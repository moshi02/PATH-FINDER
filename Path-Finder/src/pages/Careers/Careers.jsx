/* eslint-disable no-unused-vars */
import React from 'react'
import "../Careers/Careers.scss";
import Navbar from "../../components/Navbar";
const Careers = () => {
  return (
    <div className='maindiv'>
      {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
      <div className="img">      
      <img className="banner" src="src\images\banner for careers page.png" alt="" />
      </div>
      {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
      <h1 className='first-text'>What career are you looking for?</h1>
      {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
      <div className="search">
        <div className="input">
        <input type="search" name="search course" id=""  placeholder='Search for information on 200+ career options'/>
        </div>
        <div className="button">
          <button>Search</button>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
      <div className="main-cards">
        <div className="card" style={{ width: '18rem' }}>
        <img src="src\images\1.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
        <img src="src\images\2.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
        <img src="src\images\3.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
    </div>
     {/* ------------------------------------------------------------------------------------------------------------------------------------------ */}
    </div>
  )
}

export default Careers
