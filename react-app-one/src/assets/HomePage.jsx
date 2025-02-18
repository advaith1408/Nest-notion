import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const [userDetails, setUserDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = localStorage.getItem('loggedInUser');
        const studentDetails = JSON.parse(localStorage.getItem('studentDetails'));

        if (!loggedInUser || !studentDetails) {
            alert("Please log in to access the home page.");
            navigate('/login');
            return;
        }

        setUserDetails(studentDetails);
    }, [navigate]);

    return (
        <div className="home-container">
            <header className="header">
                <h1 className="title">NEST Notion</h1>
                {/* {userDetails && (
                    <div className="user-info">
                        <p>Branch: {userDetails.branchName}</p>
                        <p>Year of Study: {userDetails.currentYear}</p>
                    </div>
                )} */}
            </header>
            <nav className="navbar"></nav>
            <div className="card-container">
                <Link to="/materials" className="card">Materials</Link>
                <Link to="/worksheets" className="card">Worksheets</Link>
                <Link to="/pyqs" className="card">PYQs</Link>
            </div>
        </div>
    );
};

export default HomePage;
