import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isLoggedIn, userProfile, handleLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
                <li className="profile-menu">
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
                    <ul className="profile-dropdown" style={{ padding:"10px" }}>
                      <li>
                        <NavLink to="/profile">
                          <i className="fas fa-user-circle me-2"></i> Profile
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/settings">
                          <i className="fas fa-cog me-2"></i> Settings
                        </NavLink>
                      </li>
                      <li>
                        <a href="#" onClick={handleLogout}>
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
