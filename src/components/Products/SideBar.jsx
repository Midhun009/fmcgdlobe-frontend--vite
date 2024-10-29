import React from "react";

const Sidebar = () => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
      <div className="bg-white rounded mb-4">
        <div className="sidebar_header d-flex align-items-center justify-content-between px-4 py-3 br-bottom">
          <h4 className="ft-medium fs-lg mb-0">Search Filter</h4>
          <div className="ssh-header">
            <a
              href="javascript:void(0);"
              className="clear_all ft-medium text-muted"
            >
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

        {/* Find New Property */}
        <div
          className="sidebar-widgets collapse miz_show"
          id="search_open"
          data-bs-parent="#search_open"
        >
          <div className="search-inner">
            <div className="side-filter-box">
              <div className="side-filter-box-body">
                {/* Price Range */}
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
                      <input
                        id="a1"
                        className="checkbox-custom"
                        name="open"
                        type="checkbox"
                      />
                      <label htmlFor="a1" className="checkbox-custom-label">
                        Open Now
                      </label>
                    </li>
                    <li>
                      <input
                        id="a2"
                        className="checkbox-custom"
                        name="reservations"
                        type="checkbox"
                      />
                      <label htmlFor="a2" className="checkbox-custom-label">
                        Reservations
                      </label>
                    </li>
                    <li>
                      <input
                        id="a3"
                        className="checkbox-custom"
                        name="Mexican"
                        type="checkbox"
                      />
                      <label htmlFor="a3" className="checkbox-custom-label">
                        Mexican
                      </label>
                    </li>
                    <li>
                      <input
                        id="a4"
                        className="checkbox-custom"
                        name="Seafood"
                        type="checkbox"
                      />
                      <label htmlFor="a4" className="checkbox-custom-label">
                        Seafood
                      </label>
                    </li>
                    <li>
                      <input
                        id="a5"
                        className="checkbox-custom"
                        name="Takeout"
                        type="checkbox"
                      />
                      <label htmlFor="a5" className="checkbox-custom-label">
                        Takeout
                      </label>
                    </li>
                  </ul>
                </div>

                {/* Features */}
                <div className="inner_widget_link">
                  <h6 className="ft-medium">Features</h6>
                  <ul className="no-ul-list filter-list">
                    <li>
                      <input
                        id="a6"
                        className="checkbox-custom"
                        name="Kids"
                        type="checkbox"
                        checked
                      />
                      <label htmlFor="a6" className="checkbox-custom-label">
                        Good for Kids
                      </label>
                    </li>
                    <li>
                      <input
                        id="a7"
                        className="checkbox-custom"
                        name="Service"
                        type="checkbox"
                      />
                      <label htmlFor="a7" className="checkbox-custom-label">
                        Waiter Service
                      </label>
                    </li>
                    <li>
                      <input
                        id="a8"
                        className="checkbox-custom"
                        name="Open"
                        type="checkbox"
                      />
                      <label htmlFor="a8" className="checkbox-custom-label">
                        Open to All
                      </label>
                    </li>
                    <li>
                      <input
                        id="a9"
                        className="checkbox-custom"
                        name="Dogs"
                        type="checkbox"
                      />
                      <label htmlFor="a9" className="checkbox-custom-label">
                        Dogs Allowed
                      </label>
                    </li>
                    <li>
                      <input
                        id="a10"
                        className="checkbox-custom"
                        name="Outdoor"
                        type="checkbox"
                      />
                      <label htmlFor="a10" className="checkbox-custom-label">
                        Outdoor Seating
                      </label>
                    </li>
                    <li>
                      <input
                        id="a11"
                        className="checkbox-custom"
                        name="Hot"
                        type="checkbox"
                      />
                      <label htmlFor="a11" className="checkbox-custom-label">
                        Hot and New
                      </label>
                    </li>
                    <li>
                      <input
                        id="a12"
                        className="checkbox-custom"
                        name="Breakfast"
                        type="checkbox"
                      />
                      <label htmlFor="a12" className="checkbox-custom-label">
                        Breakfast
                      </label>
                    </li>
                    <li>
                      <a className="ft-bold d14ixh" href="javascript:void(0);">
                        See More
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Neighborhoods */}
                <div className="inner_widget_link">
                  <h6 className="ft-medium">Neighborhoods</h6>
                  <ul className="no-ul-list filter-list">
                    <li>
                      <input
                        id="b1"
                        className="checkbox-custom"
                        name="Alta"
                        type="checkbox"
                        checked
                      />
                      <label htmlFor="b1" className="checkbox-custom-label">
                        Alta Vista
                      </label>
                    </li>
                    <li>
                      <input
                        id="b2"
                        className="checkbox-custom"
                        name="Monticello"
                        type="checkbox"
                      />
                      <label htmlFor="b2" className="checkbox-custom-label">
                        Monticello Park
                      </label>
                    </li>
                    <li>
                      <input
                        id="b3"
                        className="checkbox-custom"
                        name="Beacon"
                        type="checkbox"
                      />
                      <label htmlFor="b3" className="checkbox-custom-label">
                        Beacon Hill
                      </label>
                    </li>
                    <li>
                      <input
                        id="b4"
                        className="checkbox-custom"
                        name="Near"
                        type="checkbox"
                      />
                      <label htmlFor="b4" className="checkbox-custom-label">
                        Near Northwest
                      </label>
                    </li>
                    <li>
                      <input
                        id="b5"
                        className="checkbox-custom"
                        name="North"
                        type="checkbox"
                      />
                      <label htmlFor="b5" className="checkbox-custom-label">
                        North Central
                      </label>
                    </li>
                    <li>
                      <input
                        id="b6"
                        className="checkbox-custom"
                        name="Northwest1"
                        type="checkbox"
                      />
                      <label htmlFor="b6" className="checkbox-custom-label">
                        Northwest
                      </label>
                    </li>
                    <li>
                      <input
                        id="b7"
                        className="checkbox-custom"
                        name="Pecan"
                        type="checkbox"
                      />
                      <label htmlFor="b7" className="checkbox-custom-label">
                        Pecan Valley
                      </label>
                    </li>
                    <li>
                      <input
                        id="b8"
                        className="checkbox-custom"
                        name="Prospect"
                        type="checkbox"
                      />
                      <label htmlFor="b8" className="checkbox-custom-label">
                        Prospect Hill
                      </label>
                    </li>
                    <li>
                      <input
                        id="b9"
                        className="checkbox-custom"
                        name="South"
                        type="checkbox"
                      />
                      <label htmlFor="b9" className="checkbox-custom-label">
                        South Central
                      </label>
                    </li>
                    <li>
                      <a className="ft-bold d14ixh" href="javascript:void(0);">
                        See More
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Bird's-eye View */}
                <div className="inner_widget_link">
                  <h6 className="ft-medium">Bird's-eye View</h6>
                  <ul className="no-ul-list filter-list">
                    <li>
                      <input
                        id="c1"
                        className="checkbox-custom"
                        name="blc"
                        type="checkbox"
                        checked
                      />
                      <label htmlFor="c1" className="checkbox-custom-label">
                        Within 4 blocks
                      </label>
                    </li>
                    <li>
                      <input
                        id="c2"
                        className="checkbox-custom"
                        name="1km"
                        type="checkbox"
                      />
                      <label htmlFor="c2" className="checkbox-custom-label">
                        Walking (1 mi.)
                      </label>
                    </li>
                    <li>
                      <input
                        id="c3"
                        className="checkbox-custom"
                        name="2km"
                        type="checkbox"
                      />
                      <label htmlFor="c3" className="checkbox-custom-label">
                        Biking (2 mi.)
                      </label>
                    </li>
                    <li>
                      <input
                        id="c4"
                        className="checkbox-custom"
                        name="5km"
                        type="checkbox"
                      />
                      <label htmlFor="c4" className="checkbox-custom-label">
                        Driving (5 mi.)
                      </label>
                    </li>
                    <li>
                      <input
                        id="c5"
                        className="checkbox-custom"
                        name="10km"
                        type="checkbox"
                      />
                      <label htmlFor="c5" className="checkbox-custom-label">
                        Driving (10 mi.)
                      </label>
                    </li>
                  </ul>
                </div>

                <div className="form-group filter_button">
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
      </div>
      {/* Sidebar End */}
    </div>
  );
};

export default Sidebar;
