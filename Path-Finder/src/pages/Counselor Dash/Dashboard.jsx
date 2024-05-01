import React from "react";
import "./dash.scss";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
const Dashboard = () => {

    const [firstName, setFirstName] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [time, setTime] = useState('');
    const [avatar, setAvatar] = useState('');

  
    useEffect(() => {
        const firstNameFromStorage = localStorage.getItem('first-name');
        const dateFromStorage = localStorage.getItem('date');
        const emailFromStorage = localStorage.getItem('email');
        const timeFromStorage = localStorage.getItem('time');
        
    
        setFirstName(firstNameFromStorage || '');
        setDate(dateFromStorage || '');
        setEmail(emailFromStorage || '');
        setTime(timeFromStorage || '');
    }, []);
   


    const now1 = new Date();
    const datenow = now1.toLocaleDateString('en-IN', { dateStyle: 'full' });
    const timenow = now1.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    // location('/dashboard');
  return (
    <div className="maindash">

      <Navbar />
      <link
        href="https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap"
        rel="stylesheet"
      />
      <div className="task-manager">
        <div className="left-bar">
          <div className="upper-part">
            <img
              src="https://images.herzindagi.info/image/2022/Dec/women-inequality-work-place.jpg"
              alt="counselor photo"
            />
            <h4 className="welcome">Welcome back Jesica Horen !</h4>
            <hr />
            <div className="timedate"> 
            <p className="welcome">Time : {timenow}</p>
            <p className="welcome">Date : {datenow} </p>
            </div>

          </div>
          <div className="left-content"></div>
        </div>
        <div className="page-content">
          <div className="header">Your Counselor Dashboard</div>
          
          <div className="tasks-wrapper">
            <div className="task">
                <h4>Tasks for the day </h4>
              <input
                className="task-item"
                name="task"
                type="checkbox"
                id="item-1"
                defaultChecked=""
              />
              <label htmlFor="item-1">
                <span className="label-text">
                </span>
              </label>
              {/* <span className="tag approved">completed</span> */}
            </div>
            <div className="task">
              <input
                className="task-item"
                name="task"
                type="checkbox"
                id="item-2"
                defaultChecked=""
              />
              <label htmlFor="item-2">
                <span className="label-text">Create a userflow</span>
              </label>
              <span className="tag progress">In Progress</span>
            </div>
            <div className="task">
              <input
                className="task-item"
                name="task"
                type="checkbox"
                id="item-3"
              />
              <label htmlFor="item-3">
                <span className="label-text">Application Implementation</span>
              </label>
              <span className="tag review">In Review</span>
            </div>
            <div className="task">
              <input
                className="task-item"
                name="task"
                type="checkbox"
                id="item-4"
              />
              <label htmlFor="item-4">
                <span className="label-text">Create a Dashboard Design</span>
              </label>
              <span className="tag progress">In Progress</span>
            </div>
            <div className="task">
              <input
                className="task-item"
                name="task"
                type="checkbox"
                id="item-5"
              />
              <label htmlFor="item-5">
                <span className="label-text">
                  Create a Web Application Design
                </span>
              </label>
              <span className="tag approved">Approved</span>
            </div>
            <div className="task">
              <input
                className="task-item"
                name="task"
                type="checkbox"
                id="item-6"
              />
              <label htmlFor="item-6">
                <span className="label-text">Interactive Design</span>
              </label>
              <span className="tag review">In Review</span>
            </div>
            <div className="header upcoming">Upcoming Tasks</div>
            <div className="task">
              <input
                className="task-item"
                name="task"
                type="checkbox"
                id="item-7"
              />
              <label htmlFor="item-7">
                <span className="label-text">
                  Dashboard Design Implementation
                </span>
              </label>
              <span className="tag waiting">Waiting</span>
            </div>
            <div className="task">
              <input
                className="task-item"
                name="task"
                type="checkbox"
                id="item-8"
              />
              <label htmlFor="item-8">
                <span className="label-text">Create a userflow</span>
              </label>
              <span className="tag waiting">Waiting</span>
            </div>
            <div className="task">
              <input
                className="task-item"
                name="task"
                type="checkbox"
                id="item-9"
              />
              <label htmlFor="item-9">
                <span className="label-text">Application Implementation</span>
              </label>
              <span className="tag waiting">Waiting</span>
            </div>
            <div className="task">
              <input
                className="task-item"
                name="task"
                type="checkbox"
                id="item-10"
              />
              <label htmlFor="item-10">
                <span className="label-text">Create a Dashboard Design</span>
              </label>
              <span className="tag waiting">Waiting</span>
            </div>
          </div>
        </div>
        <div className="right-bar">
          <div className="top-part">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-users"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <div className="count">6</div>
          </div>
          <div className="header">Appoitments Requests</div>
          <div className="right-content">
            <div className="requests">
              <div className="req1">
                <div className="data">
                  <p>Name :  {firstName} </p> <br />
                  <p>Day : {date} </p> <br />
                  <p>Time :{time} </p> <br />
                  <p>Email : {email} </p>
                </div>
                <div className="approvebutton">
                   <p>Click to check mark</p> 
                   <input type="checkbox" />

                </div>
              </div>
              <div className="req1">
                <div className="data">
                  <p>Name : </p> <br />
                  <p>Day :</p> <br />
                  <p>Time :</p> <br />
                  <p>Email : </p>
                </div>
                <div className="approvebutton">
                   <p>Click to check mark</p> 
                   <input type="checkbox" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
