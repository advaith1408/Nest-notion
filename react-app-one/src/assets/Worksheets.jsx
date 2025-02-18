import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Worksheets.css";
import { subjectsData } from "./SubjectsData"; // Importing subjects data

const Worksheets = () => {
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
    <div className="worksheets-container">
      <h1>Practice Sheets for {branchName} - {currentYear} Year</h1>
      <div className="worksheets-card-grid">
        {subjectsForYear.map((subject, index) => (
          <div className="worksheets-material-card" key={index}>
            <div className="worksheets-card-content">
              <h3>{subject.name}</h3>
              <a href={subject.worksheetLink}>View Worksheets</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Worksheets;
