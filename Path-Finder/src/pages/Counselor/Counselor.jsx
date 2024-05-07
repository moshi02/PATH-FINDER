/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Newscover from "../../components/Newscover";
import "./Counselor.scss";
const Counselor = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Function to handle change in date input
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // Function to handle change in time input
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  // Function to calculate minimum selectable date and time (current date + 1 day)
  const calculateMinDateTime = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1); // Add 1 day
    const minDate = currentDate.toISOString().split('T')[0]; // Minimum selectable date
    const minTime = '00:00'; // Minimum selectable time (midnight)
    return { minDate, minTime };
  };
  const { minDate, minTime } = calculateMinDateTime();
  const [firstName, setFirstName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("first-name", firstName);
    localStorage.setItem("date", date);
    localStorage.setItem("email", email);
    localStorage.setItem("time", time);

    alert(
      "Your request has been sent to our counselor which will get back to you ASAP!"
    );

    setFirstName(" ");
    setDate(" ");
    setEmail(" ");
    setTime(" ");
  };

  const [firstName1, setFirstName1] = useState("");
  const [date1, setDate1] = useState("");
  const [email1, setEmail1] = useState("");
  const [time1, setTime1] = useState("");

  const handleSubmit1 = (e) => {
    e.preventDefault();

    localStorage.setItem("first-name1", firstName1);
    localStorage.setItem("date1", date1);
    localStorage.setItem("email1", email1);
    localStorage.setItem("time1", time1);

    alert(
      "Your request has been sent to our counselor which will get back to you ASAP!"
    );

    setFirstName1(" ");
    setDate1(" ");
    setEmail1(" ");
    setTime1(" ");
  };

  const [firstName2, setFirstName2] = useState("");
  const [date2, setDate2] = useState("");
  const [email2, setEmail2] = useState("");
  const [time2, setTime2] = useState("");

  const handleSubmit2 = (e) => {
    e.preventDefault();

    localStorage.setItem("first-name2", firstName2);
    localStorage.setItem("date2", date2);
    localStorage.setItem("email2", email2);
    localStorage.setItem("time2", time2);

    alert(
      "Your request has been sent to our counselor which will get back to you ASAP!"
    );

    setFirstName2(" ");
    setDate2(" ");
    setEmail2(" ");
    setTime2(" ");
  };

  return (
    <div>
      <Navbar />

      <div className="page1">
        <div className="section-1">
          <div className="left-side">
            <h1>Welcome to Counselor Section</h1>
            <p>
              At <span>PathFinder</span> we understand that navigating life's
              challenges can sometimes feel overwhelming. That's why we offer
              professional counseling services to provide support, guidance, and
              solutions tailored to your unique needs. Our team of experienced
              counselors specializes in various areas
            </p>
            <button>
              <a href="#page3"> Get Started</a>
            </button>
          </div>
          <div className="right-side">
            <img
              src="https://www.careerguide.com/career/wp-content/uploads/2020/03/interviewp_dribbble.gif"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="page2">
        <h1>
          Tailored <span>Counseling</span> for Your Unique Needs Explore our
          diverse counselor collection choose the one which fits your domain the
          best. You can directly contact them via email provided down below or
          book an appointment with the counselors so that you can have a
          complete <span>1 on 1 interractive session</span> with the counselors{" "}
        </h1>

        <p>Here are the professional Counselors on our website</p>
      </div>
      <div id="page3">
        <div className="main">
          <div className="card">
            <img
              src="https://images.herzindagi.info/image/2022/Dec/women-inequality-work-place.jpg"
              alt=""
            />
            <div className="card-content">
              <h2>Dr.Jesica Horen</h2>
              <p>
                Are you a recent high school graduate facing uncertainty about
                your future path? I'm Dr. Jesicca Horen, a seasoned counselor
                specializing in mental health and career guidance. Contact me at
                jessicahoren123@gmail.com for personalized support after
                completing your 12th standard.
              </p>
            </div>
          </div>

          <form className="form" onSubmit={handleSubmit}>
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
                min={minDate}
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
                min={minTime}
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
            <img
              src="https://images.herzindagi.info/image/2022/Dec/women-inequality-work-place.jpg"
              alt=""
            />
            <div className="card-content">
              <h2>Marcus Ngyuyen</h2>
              <p>
                Transitioning from high school to the next phase of your life
                can be daunting, but you don't have to navigate it alone. I'm
                Marcus Nguyen, a licensed professional counselor offering family
                therapy and career guidance. Contact me at
                marcusnguyen@email.com to explore your options after completing
                your 12th standard.{" "}
              </p>
            </div>
          </div>

          <form className="form" onSubmit={handleSubmit1}>
            <div>
              <label htmlFor="first-name">Name :</label>
              <input
                type="text"
                id="first-name"
                value={firstName1}
                onChange={(e) => setFirstName1(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="date">Date : </label>
              <input
                type="date"
                id="date"
                value={date1}
                onChange={(e) => setDate1(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                id="email"
                value={email1}
                onChange={(e) => setEmail1(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="time">Time : </label>
              <input
                type="time"
                id="time"
                value={time1}
                onChange={(e) => setTime1(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">Book Appointment !</button>
            </div>
          </form>
        </div>
        <div className="main">
          <div className="card">
            <img
              src="https://images.herzindagi.info/image/2022/Dec/women-inequality-work-place.jpg"
              alt=""
            />
            <div className="card-content">
              <h2>Dr. Jasmine </h2>
              <p>
                Congratulations on reaching this milestone in your academic
                journey! I'm Dr. Jasmine Patel, a clinical psychologist
                passionate about holistic healing and career development.
                Contact me at jasminepatel@email.com to discover your passions
                and chart a fulfilling course after completing your 12th
                standard.{" "}
              </p>
            </div>
          </div>

          <form className="form" onSubmit={handleSubmit2}>
            <div>
              <label htmlFor="first-name">Name :</label>
              <input
                type="text"
                id="first-name"
                value={firstName2}
                onChange={(e) => setFirstName2(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="date">Date : </label>
              <input
                type="date"
                id="date"
                value={date2}
                onChange={(e) => setDate2(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                id="email"
                value={email2}
                onChange={(e) => setEmail2(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="time">Time : </label>
              <input
                type="time"
                id="time"
                value={time2}
                onChange={(e) => setTime2(e.target.value)}
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
    </div>
  );
};

export default Counselor;
