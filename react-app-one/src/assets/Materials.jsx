import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Materials.css";
import { subjectsData } from "./SubjectsData"; // Importing subjects data

const Materials = () => {
  const [studentDetails, setStudentDetails] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setIsLoggedIn(true);
      const storedStudentDetails = JSON.parse(localStorage.getItem("studentDetails"));
      if (storedStudentDetails) {
        setStudentDetails(storedStudentDetails);
      }
    } else {
      setIsLoggedIn(false);
      navigate("/login");
    }
  }, [navigate]);

  if (!isLoggedIn || !studentDetails) {
    return <div>Loading details...</div>;
  }

  const { currentYear, branchName } = studentDetails;
  const subjectsForYear = subjectsData.filter(
    (subject) => subject.year === currentYear && subject.branch === branchName
  );

  return (
    <div className="materials-container">
      <h2> Theory Materials for {branchName} - {currentYear} Year</h2>
      <div className="materials-card-grid">
        {subjectsForYear.map((subject, index) => (
          <div className="materials-material-card" key={index}>
            <div className="materials-card-content">
              <h3>{subject.name}</h3>
              <a href={subject.link}>View Materials</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Materials;
