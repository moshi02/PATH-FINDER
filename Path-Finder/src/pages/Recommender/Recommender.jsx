/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "./Reccomender.scss";
function CriteriaForm() {
  const [criteria, setCriteria] = useState({
    gender: "",
    part_time_job: "",
    absence_days: "",
    extracurricullar: "",
    weekly_self_study: "",
    maths: "",
    history: "",
    physics: "",
    chemistry: "",
    biology: "",
    english: "",
    geography: "",
    total_score: "",
    avg_score: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCriteria((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/process", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(criteria),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="masterdiv">
      <Navbar />
      <div className="top-text">
        <h3>
          Welcome to our Recommender System. From the Data collection of about
          thousand possible options, our ML based recommender system reccomends
          you the best option based on your inputs!
        </h3>
      </div>
      <div className="inputs">
        <form onSubmit={handleSubmit}>
          <div className="subdiv">
            <label htmlFor="gender"> Enter Gender :</label>
            <input
              type="text"
              name="gender"
              value={criteria.gender}
              onChange={handleChange}
            />
            <label htmlFor="gender"> Enter part_time_job:</label>
            <input
              type="text"
              name="part_time_job"
              value={criteria.part_time_job}
              onChange={handleChange}
            />
            <label htmlFor="gender"> Enter absence_days :</label>
            <input
              type="text"
              name="absence_days"
              value={criteria.absence_days}
              onChange={handleChange}
            />
            <label htmlFor="gender"> Enter extracurricullar :</label>
            <input
              type="text"
              name="extracurricullar"
              value={criteria.extracurricullar}
              onChange={handleChange}
            />
          </div>
          <div className="subdiv">
            <label htmlFor="gender"> Enter weekly_self_study :</label>

            <input
              type="text"
              name="weekly_self_study"
              value={criteria.weekly_self_study}
              onChange={handleChange}
            />
            <label htmlFor="gender"> Maths score :</label>

            <input
              type="text"
              name="maths"
              value={criteria.maths}
              onChange={handleChange}
            />
            <label htmlFor="gender"> History score :</label>

            <input
              type="text"
              name="history"
              value={criteria.history}
              onChange={handleChange}
            />
            <label htmlFor="gender"> Enter Physics score :</label>

            <input
              type="text"
              name="physics"
              value={criteria.physics}
              onChange={handleChange}
            />
          </div>
          <div className="subdiv">
            <label htmlFor="gender"> Chemistry Score :</label>

            <input
              type="text"
              name="chemistry"
              value={criteria.chemistry}
              onChange={handleChange}
            />
            <label htmlFor="gender"> Biology Score :</label>

            <input
              type="text"
              name="biology"
              value={criteria.biology}
              onChange={handleChange}
            />
            <label htmlFor="gender"> English Score :</label>

            <input
              type="text"
              name="english"
              value={criteria.english}
              onChange={handleChange}
            />
            <label htmlFor="gender"> Geography Score :</label>

            <input
              type="text"
              name="geography"
              value={criteria.geography}
              onChange={handleChange}
            />
          </div>
        
         
        </form>
      </div>
                  <button className="submitform" type="submit">Submit</button>

      <div className="middle-text">
        <h3>The best career option recommended for you is : </h3>
      </div>
    </div>
  );
}

export default CriteriaForm;
