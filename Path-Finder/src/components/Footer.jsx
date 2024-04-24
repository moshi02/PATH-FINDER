/* eslint-disable no-unused-vars */
import React from 'react';
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import "../components/Footer.scss";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    PathFinder: Your personalized career guide. Our platform offers tailored career paths, expert counseling, and curated resources for informed career decisions. Join us to unlock your potential for success.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            VIT Bhopal , Bhopal ,Madhya Pradesh , India
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 9835928584</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: mehulsingh@pathfind.com</div>
                    </div>
                </div>
                {/* <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div> */}
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text"><Link to="/">Home</Link></span>
                    <span className="text"><Link to="/About">About</Link></span>
                    <span className="text"><Link to="/Articles">Articles</Link></span>
                    <span className="text"><Link to="/Careers">Careers</Link></span>
                    <span className="text"><Link to="/Counselor">Counselors</Link></span>
                </div>
            </div>
            {/* <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        JSDEVSTORE 2022 CREATED BY JS DEV. PREMIUM E-COMMERCE
                        SOLUTIONS.
                    </span>
                    <img src="src\images\payments.png" alt=""/>
                </div>
            </div> */}
        </div>
    );
}

export default Footer