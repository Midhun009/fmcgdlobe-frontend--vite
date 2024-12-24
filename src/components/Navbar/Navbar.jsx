import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getUserProfile, logoutUser } from "../../Api/loginUser"; // Import API calls
import "./Navbar.css";

const Navbar = ({ isLoggedIn, userProfile, handleLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const profileMenuRef = useRef(null); // Ref to track profile menu
  const navigate = useNavigate(); // Hook for navigation

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close the dropdown if the user clicks outside the profile menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    };

    // Add event listener for click events
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Fetch user profile after login
  useEffect(() => {
    if (isLoggedIn && !userProfile) {
      const token = localStorage.getItem("token");
      if (token) {
        getUserProfile(token)
          .then((response) => {
            // Set the user profile after fetching from API
            handleLogout(response.data); // Assuming handleLogout stores the profile in parent component state
          })
          .catch((error) => {
            console.error("Error fetching profile:", error);
          });
      }
    }
  }, [isLoggedIn, userProfile, handleLogout]);

  // Handle logout and redirect to index page
  const handleLogoutAndRedirect = async () => {
    try {
      await logoutUser(); // Call the API to log the user out
      localStorage.removeItem("token");
      localStorage.removeItem("userProfile");
      handleLogout(); // Clear the user state in the parent component
      navigate("/"); // Redirect to the home page after logout
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleMenuItemClick = () => {
    setDropdownOpen(false); // Close dropdown on menu item click
  };

  return (
    <header className="header header-light dark-text">
      <div className="container">
        <nav id="navigation" className="navigation navigation-landscape">
          <div className="nav-header">
            <NavLink className="nav-brand" to="/">
              <img
                src="/assets/img/logo.png"
                className="logo"
                alt="Company Logo"
              />
            </NavLink>
            <div className="nav-toggle"></div>
          </div>
          <div className="nav-menus-wrapper">
            <ul className="nav-menu">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <a href="#">About Us</a>
                <ul className="nav-dropdown nav-submenu">
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Who We Are
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/faq"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      FAQ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/terms-and-conditions"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Terms and Conditions
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/privacy-policy"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      Privacy Policy
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  to="/insights"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Insights
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <ul className="nav-menu nav-menu-social align-to-right">
              {isLoggedIn ? (
                <li className="profile-menu" ref={profileMenuRef}>
                  <div className="profile-icon" onClick={toggleDropdown}>
                    <img
                      src={
                        userProfile.profileImage ||
                        `https://api.dicebear.com/6.x/initials/svg?seed=${userProfile.name}&radius=50`
                      }
                      alt="Profile"
                      className="profile-img"
                    />
                  </div>

                  {dropdownOpen && (
                    <ul
                      className="profile-dropdown"
                      style={{ padding: "10px" }}
                    >
                      <li>
                        <NavLink to="/dashboard" onClick={handleMenuItemClick}>
                          <i className="fas fa-user-circle me-2"></i> Profile
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/settings" onClick={handleMenuItemClick}>
                          <i className="fas fa-cog me-2"></i> Settings
                        </NavLink>
                      </li>
                      <li>
                        <a href="#" onClick={handleLogoutAndRedirect}>
                          <i className="fas fa-sign-out-alt me-2"></i> Logout
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <li>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#login"
                    className="ft-bold"
                  >
                    <i className="fas fa-sign-in-alt me-1 theme-cl"></i>Sign In
                  </a>
                </li>
              )}
              <li className="add-listing">
                <a href="/add-listing">
                  <i className="fas fa-plus me-2"></i>Add Listing
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
