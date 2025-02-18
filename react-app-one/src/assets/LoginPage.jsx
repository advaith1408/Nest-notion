import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const branchCodes = {
  "01": "Civil Engineering",
  "02": "Electrical & Electronics Engineering",
  "03": "Mechanical Engineering",
  "04": "Electronics and Communication Engineering",
  "05": "Computer Science Engineering",
  "06": "Computer Science & Technology",
  "07": "Computer Science & Information Technology",
  "08": "Chemical Engineering",
  "10": "Electronics and Instrumentation Engineering",
  "11": "Bio-Medical Engineering",
  "12": "Information Technology",
  "13": "Electronics and Control Engineering",
  "14": "Electronics & Communication Technology",
  "15": "Computer Science and Systems Engineering",
  "19": "Electronics and Computer Engineering",
  "21": "Aeronautical Engineering",
  "22": "Instrumentation and Control Engineering",
  "23": "Bio -Technology",
  "24": "Automobile Engineering",
  "26": "Mining Engineering",
  "27": "Petroleum Technology/ Petroleum Engineering",
  "28": "Petrochemical Engineering",
  "29": "Aviation Engineering",
  "30": "Aircraft Maintenance Engineering",
  "31": "Metallurgical Engineering",
  "34": "Power Engineering",
  "35": "Agriculture Engineering",
  "36": "Textile Engineering",
  "40": "Architecture (B. Arch)",
  "42": "CSE - Artificial Intelligence and Machine Learning",
  "43": "CSE - Artificial Intelligence",
  "44": "CSE - Data Science",
  "45": "CSE - Artificial Intelligence and Data Science",
  "46": "CSE - Cyber Security",
  "47": "CSE - Internet of things and Cyber security including Block chain Technology",
  "48": "CSE - Computer Science and Business System",
  "49": "CSE - Internet of Things",
  "50": "ECE - Electronics & Communication Technology",
  "51": "Food Engineering",
  "52": "ECE - Internet of Things",
  "53": "ME - Robotics",
  "54": "Artificial Intelligence and Data Science",
  "55": "Pharmaceutical Engineering",
  "56": "Aerospace Engineering",
  "57": "Computer Science and Business System",
  "58": "CSE (Big Data Analytics)",
  "59": "Cyber Security",
  "60": "Internet of Things",
  "61": "Artificial Intelligence and Machine Learning",
  "62": "Computer Science and Design",
  "63": "CSE - ( Regional Language )",
};

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (storedUserDetails) {
      if (
        email === storedUserDetails.email &&
        password === storedUserDetails.password
      ) {
        const yearOfJoining = `20${email.substring(0, 2)}`; 
        const branchCode = email.substring(6, 8); 
        const branchName = branchCodes[branchCode] || "Unknown Branch";
        const currentYearValue = new Date().getFullYear();
        const currentYear = Math.min(
          currentYearValue - parseInt(yearOfJoining, 10) + 1,
          4 
        );

        const studentDetails = {
          year: yearOfJoining,
          branchName: branchName,
          currentYear: currentYear,
        };

        localStorage.setItem("loggedInUser", email);
        localStorage.setItem("studentDetails", JSON.stringify(studentDetails)); 
        navigate("/home");
      } else {
        alert("Incorrect email or password");
      }
    } else {
      alert("No user found. Please register first.");
    }
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <h1>WELCOME TO VNR NOTION</h1>
      <h2>SIGN IN</h2>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={goToRegister}>Sign Up</button>
    </div>
  );
};

export default LoginPage;
