import React from "react";

const DashboardNavigation = () => (
  <div className="collapse" id="MobNav">
    <div className="goodup-dashboard-nav sticky-top">
      <div className="goodup-dashboard-inner">
        <ul data-submenu-title="Main Navigation">
          <li className="active">
            <a href="dashboard.html">
              <i className="lni lni-dashboard me-2"></i>Dashboard
            </a>
          </li>
          <li>
            <a href="dashboard-my-listings.html">
              <i className="lni lni-files me-2"></i>My Listings
            </a>
          </li>
          <li>
            <a href="dashboard-add-listings.html">
              <i className="lni lni-add-files me-2"></i>Add Listing
            </a>
          </li>
          <li>
            <a href="dashboard-saved-listings.html">
              <i className="lni lni-bookmark me-2"></i>Saved Listing
            </a>
          </li>
          <li>
            <a href="dashboard-my-bookings.html">
              <i className="lni lni-briefcase me-2"></i>My Bookings
              <span className="count-tag bg-warning">4</span>
            </a>
          </li>
          <li>
            <a href="dashboard-wallet.html">
              <i className="lni lni-mastercard me-2"></i>Wallet
            </a>
          </li>
          <li>
            <a href="dashboard-messages.html">
              <i className="lni lni-envelope me-2"></i>Messages
              <span className="count-tag">4</span>
            </a>
          </li>
        </ul>
        <ul data-submenu-title="My Accounts">
          <li>
            <a href="dashboard-my-profile.html">
              <i className="lni lni-user me-2"></i>My Profile
            </a>
          </li>
          <li>
            <a href="dashboard-change-password.html">
              <i className="lni lni-lock-alt me-2"></i>Change Password
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i className="lni lni-trash-can me-2"></i>Delete Account
            </a>
          </li>
          <li>
            <a href="login.html">
              <i className="lni lni-power-switch me-2"></i>Log Out
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default DashboardNavigation;
