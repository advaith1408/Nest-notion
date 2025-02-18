import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [studentDetails, setStudentDetails] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setIsLoggedIn(true);
      const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));
      const storedStudentDetails = JSON.parse(
        localStorage.getItem("studentDetails")
      );

      if (storedUserDetails && storedUserDetails.email === loggedInUser) {
        setUserDetails(storedUserDetails);
      }

      if (storedStudentDetails) {
        setStudentDetails(storedStudentDetails);
      }
    } else {
      setIsLoggedIn(false);
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("userDetails");
    localStorage.removeItem("studentDetails");
    setIsLoggedIn(false);
    navigate("/login");
  };

  if (!isLoggedIn) {
    return (
      <div className="profile-container">
        <h2>To know details, please log in.</h2>
        <button onClick={() => navigate("/login")}>Go to Login</button>
      </div>
    );
  }

  if (!userDetails || !studentDetails) {
    return <div>Loading profile details...</div>;
  }

  return (
    <div className="profile-container">
      <h2>DETAILS</h2>
      <div className="profile-details">
        <p><strong>First Name:</strong> {userDetails.firstName}</p>
        <p><strong>Last Name:</strong> {userDetails.lastName}</p>
        <p><strong>Email:</strong> {userDetails.email}</p>
        <p><strong>Year of Joining:</strong> {studentDetails.year}</p>
        <p><strong>Branch:</strong> {studentDetails.branchName}</p>
        <p><strong>Current Year:</strong> {studentDetails.currentYear} Year</p>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;