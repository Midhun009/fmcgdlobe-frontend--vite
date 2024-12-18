// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import "./assets/css/styles.css";
import Navbar from "./components/Navbar/Navbar";
import LoginModal from "./components/Navbar/LoginModal";
import Footer from "./components/Footer/Footer";
import Routes from "./routes";
import ScrollToTopButton from "./components/Button/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true); // Preloader state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // User login status
  const [userProfile, setUserProfile] = useState({}); // User profile data

  // Restore login state and user profile from localStorage
  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const storedUserProfile = JSON.parse(localStorage.getItem("userProfile"));

    if (storedLoggedIn && storedUserProfile) {
      setIsLoggedIn(true);
      setUserProfile(storedUserProfile);
    }
  }, []);

  // Simulate a data fetching or loading process for the preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide preloader after 2 seconds
    }, 2000); // Adjust this duration to your needs

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  // Handle user logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserProfile({});
    // Remove data from localStorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userProfile");
  };

  // Handle user login (called by LoginModal)
  const handleLogin = (profileData) => {
    setIsLoggedIn(true);
    setUserProfile(profileData);
    // Save login state and profile to localStorage
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("userProfile", JSON.stringify(profileData));
  };

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        {loading && <Preloader />} {/* Show the spinner while loading */}
        <div className="App">
          <Navbar
            isLoggedIn={isLoggedIn} // Passing login state to Navbar
            userProfile={userProfile} // Passing user profile to Navbar
            handleLogout={handleLogout} // Pass logout handler to Navbar
          />
          <LoginModal
            setIsLoggedIn={handleLogin} // Update the handler to save in localStorage
          />
          <ScrollToTopButton />
          <Routes />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
