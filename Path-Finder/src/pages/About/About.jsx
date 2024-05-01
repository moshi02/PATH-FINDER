/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import { FaLinkedinIn,FaGithub,FaMailBulk,FaInstagram  } from "react-icons/fa";
import React from "react";
import "./About.css"
import Navbar from '../../components/Navbar';
import Newscover from '../../components/Newscover';
import Footer from '../../components/Footer';
import "./About.css";
const About = () => {
  return (
    <div className="mainpagediv">
    <Navbar />      

      <div className="bg-light">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">Navigate Your Career</h1>
              <p className="lead text-muted mb-0">
              Feeling stuck in a career rut?  Ready to discover something new and exciting?  We help you identify your passions, develop in-demand skills, and craft a resume that gets noticed.  Get ready to land your dream job and love what you do every day.  Free consultation - let's chat!
              </p>
              
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src="https://careermonk.in/wp-content/uploads/2021/06/4966408-768x768.jpg"
                alt=""
                className="img-fluid px-8 pt-3"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Our Personalized Approach to Your Success</h2>
              <p className="font-italic text-muted mb-4">
              We partner with you on a journey of self-discovery. Through in-depth conversations and assessments, we gain a clear understanding of your strengths, interests, values, and personality. This exploration ensures we identify a career that aligns with your skills and experience, but also fuels your passions and long-term goals. We believe fulfillment comes from work that feels meaningful and allows you to express your unique talents.

             

              </p>
              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                {/* Learn More */}
              </a>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="https://www.careeraddict.com/uploads/article/61910/career-counseling.png"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <img
                src="https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/11/23172655/Career-Counseling-after-10th.jpg"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
            <div className="col-lg-6">
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Your Unique Path to Career Clarity</h2>
              <p className="font-italic text-muted mb-4">
              We tailor our services to your needs. We use assessments to discover your strengths and interests, then create a personalized roadmap to your goals. Whether you're new to the workforce or seeking a change, we offer coaching, workshops, and mock interviews to empower your success.
              </p>
              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                {/* Learn More */}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light py-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light">Our team</h2>
              <p className="font-italic text-muted">
              With diverse backgrounds and proven experience, our Team Members wish to support you to the fullest!
              </p>
            </div>
          </div>

          <div className="row text-center">
           
            
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://w7.pngwing.com/pngs/402/235/png-transparent-businessperson-computer-icons-avatar-passport-miscellaneous-purple-heroes-thumbnail.png"
                  alt="Team Member"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Team Member Name</h5>
                <span className="small text-uppercase text-muted">Position</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a className="social-link">
                      <FaLinkedinIn size={16} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <FaGithub  size={16}/>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <FaMailBulk size={16}/>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <FaInstagram size={16}/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094701-stock-illustration-businessman-profile-icon.jpg"
                  alt="Team Member"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Team Member Name</h5>
                <span className="small text-uppercase text-muted">Position</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a className="social-link">
                      <FaLinkedinIn size={16} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <FaGithub  size={16}/>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <FaMailBulk size={16}/>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <FaInstagram size={16}/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://img.lovepik.com/png/20231024/Suit-tie-men-s-cartoon-character-avatar-jacket-hand-draw_332496_wh1200.png"
                  alt="Team Member"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Team Member Name</h5>
                <span className="small text-uppercase text-muted">Position</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a className="social-link">
                      <FaLinkedinIn size={16} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <FaGithub  size={16}/>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <FaMailBulk size={16}/>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <FaInstagram size={16}/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="data:image/png;base64,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"
                  alt="Team Member"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Team Member Name</h5>
                <span className="small text-uppercase text-muted">Position</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a className="social-link">
                      <FaLinkedinIn size={16} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <FaGithub  size={16}/>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <FaMailBulk size={16}/>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <FaInstagram size={16}/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-512.png"
                  alt="Team Member"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Team Member Name</h5>
                <span className="small text-uppercase text-muted">Position</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a className="social-link">
                      <FaLinkedinIn size={16} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <FaGithub  size={16}/>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <FaMailBulk size={16}/>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <FaInstagram size={16}/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
         
          </div>
        </div>
      </div>

      <Newscover />
      <Footer/>
    </div>
  );
}

export default About
