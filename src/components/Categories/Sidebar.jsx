// Sidebar.js
import React from "react";

const Sidebar = () => (
  <div className="bg-white rounded mb-4">
    <div className="sidebar_header d-flex align-items-center justify-content-between px-4 py-3 br-bottom">
      <h4 className="ft-medium fs-lg mb-0">Search Filter</h4>
      <div className="ssh-header">
        <a href="#" className="clear_all ft-medium text-muted">
          Clear All
        </a>
        <a
          href="#search_open"
          data-bs-toggle="collapse"
          aria-expanded="false"
          role="button"
          className="collapsed _filter-ico ml-2"
        >
          <i className="lni lni-text-align-right"></i>
        </a>
      </div>
    </div>

    <div className="sidebar-widgets collapse miz_show" id="search_open">
      <div className="search-inner">
        {/* Price Range Filter */}
        <div className="side-filter-box">
          <div className="side-filter-box-body">
            <div className="inner_widget_link">
              <div className="btn-group d-flex justify-content-around price-btn-457">
                <button type="button" className="btn">
                  $
                </button>
                <button type="button" className="btn">
                  $$
                </button>
                <button type="button" className="btn active d14ixh">
                  $$$
                </button>
                <button type="button" className="btn">
                  $$$$
                </button>
              </div>
            </div>
            {/* Suggested */}
            <div className="inner_widget_link">
              <h6 className="ft-medium">Suggested</h6>
              <ul className="no-ul-list filter-list">
                <li>
                  <input id="a1" type="checkbox" />
                  <label htmlFor="a1">Open Now</label>
                </li>
                <li>
                  <input id="a2" type="checkbox" />
                  <label htmlFor="a2">Reservations</label>
                </li>
                {/* Add more filter options as needed */}
              </ul>
            </div>
            {/* Features */}
            <div className="inner_widget_link">
              <h6 className="ft-medium">Features</h6>
              <ul className="no-ul-list filter-list">
                <li>
                  <input id="a6" type="checkbox" checked />
                  <label htmlFor="a6">Good for Kids</label>
                </li>
                {/* Add more feature options as needed */}
              </ul>
            </div>
            {/* Neighborhoods */}
            <div className="inner_widget_link">
              <h6 className="ft-medium">Neighborhoods</h6>
              <ul className="no-ul-list filter-list">
                <li>
                  <input id="b1" type="checkbox" checked />
                  <label htmlFor="b1">Alta Vista</label>
                </li>
                {/* Add more neighborhood options as needed */}
              </ul>
            </div>
            <button
              type="submit"
              className="btn theme-bg text-light rounded full-width"
            >
              22 Results Show
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Sidebar;
