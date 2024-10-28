// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; 
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import "./assets/css/styles.css";
import Navbar from "./components/Navbar/Navbar";
import LoginModal from "./components/Navbar/LoginModal";
import Footer from "./components/Footer/Footer";
import Routes from "./routes"; 
import ScrollToTopButton from "./components/Button/ScrollToTopButton";

function App() {
  return (
    <HelmetProvider>
    <Router>
      {" "}
     
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
