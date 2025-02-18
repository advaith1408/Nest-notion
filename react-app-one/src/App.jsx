import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./assets/LoginPage";
import RegisterPage from "./assets/RegisterPage";
import NavigationPage from "./assets/NavigationPage";
import HomePage from "./assets/HomePage";
import SettingsPage from "./assets/SettingsPage";
import ProfilePage from "./assets/ProfilePage";
import AboutPage from "./assets/AboutPage";
import Materials from "./assets/Materials";
import Worksheets from "./assets/Worksheets";
import Pyqs from "./assets/Pyqs";

function App() {
  const [loggedIn, setLoggedIn] = useState(false); 

  return (
    <Router>
      <Routes>
        {/* Redirect to /about as the default route */}
        <Route path="/" element={<Navigate to="/about" />} />

        {/* Define the login page route */}
        <Route
          path="/login"
          element={
            <NavigationPage loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
              <LoginPage setLoggedIn={setLoggedIn} />
            </NavigationPage>
          }
        />

        <Route
          path="/register"
          element={
            <NavigationPage loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
              <RegisterPage />
            </NavigationPage>
          }
        />

        <Route
          path="/home"
          element={
            <NavigationPage loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
              <HomePage />
            </NavigationPage>
          }
        />

        <Route
          path="/settings"
          element={
            <NavigationPage loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
              <SettingsPage />
            </NavigationPage>
          }
        />

        <Route
          path="/profile"
          element={
            <NavigationPage loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
              <ProfilePage />
            </NavigationPage>
          }
        />

        <Route
          path="/about"
          element={
            <NavigationPage loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
              <AboutPage />
            </NavigationPage>
          }
        />

        <Route
          path="/materials"
          element={
            <NavigationPage loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
              <Materials />
            </NavigationPage>
          }
        />

        <Route
          path="/worksheets"
          element={
            <NavigationPage loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
              <Worksheets />
            </NavigationPage>
          }
        />

        <Route
          path="/pyqs"
          element={
            <NavigationPage loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
              <Pyqs />
            </NavigationPage>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
