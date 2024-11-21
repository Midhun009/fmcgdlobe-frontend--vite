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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetching or loading process
    const timer = setTimeout(() => {
      setLoading(false); // Hide preloader after 2 seconds
    }, 2000); // Adjust this duration to your needs

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        {loading && <Preloader />} {/* Show the spinner while loading */}
        <div className="App">
          <Navbar />
          <LoginModal />
          <ScrollToTopButton />
          <Routes /> 
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
