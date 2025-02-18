import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaCog,
  FaSignInAlt,
  FaInfoCircle,
  FaSignOutAlt,
} from "react-icons/fa"; 
import { HiMenuAlt1 } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import "./NavigationPage.css";

const NavigationPage = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check login status on component mount and when navigating
    const loggedInUser = localStorage.getItem("loggedInUser");
    setIsLoggedIn(!!loggedInUser);
  }, [navigate]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      // Logout process
      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("userDetails");
      localStorage.removeItem("studentDetails");
      setIsLoggedIn(false);
      navigate("/login");
    } else {
      // Go to login page
      navigate("/login");
    }
  };

  return (
    <div className="app-container">
      <div className="top-bar">
        <HiMenuAlt1 className="menu-icon" onClick={toggleSidebar} />
        <div className="header-links">
          <p1> VNR NOTION </p1>
          <Link to="/home" className="nav-link">
            <FaHome /> Home
          </Link>
          <div 
            className="nav-link" 
            onClick={handleLoginLogout}
            style={{ cursor: 'pointer' }}
          >
            {isLoggedIn ? (
              <>
                <FaSignOutAlt /> Logout
              </>
            ) : (
              <>
                <FaSignInAlt /> Login
              </>
            )}
          </div>
          {/* {isLoggedIn && (
            <Link to="/profile" className="nav-link">
              <FaUser /> Profile
            </Link>
          )} */}
        </div>
      </div>
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <nav>
          <Link to="/home" className="nav-link">
            <FaHome /> Home
          </Link>
          {isLoggedIn && (
            <>
              <Link to="/about" className="nav-link">
                <FaInfoCircle /> About
              </Link>
              <Link to="/profile" className="nav-link">
                <FaUser /> Profile
              </Link>
              <Link to="/settings" className="nav-link">
                <FaCog /> Settings
              </Link>
            </>
          )}
        </nav>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default NavigationPage;