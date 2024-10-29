import React from "react";

const DashboardHeader = () => (
  <section
    className="bg-cover position-relative"
    style={{
      background: "red url(https://via.placeholder.com/1920x1000) no-repeat",
    }}
    data-overlay="3"
  >
    <div className="abs-list-sec">
      <a href="dashboard-add-listing.html" className="add-list-btn">
        <i className="fas fa-plus me-2"></i>Add Listing
      </a>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="dashboard-head-author-clicl">
            <div className="dashboard-head-author-thumb">
              <img
                src="https://via.placeholder.com/500x500"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="dashboard-head-author-caption">
              <div className="dashploio">
                <h4>Charles D. Robinson</h4>
              </div>
              <div className="dashploio">
                <span className="agd-location">
                  <i className="lni lni-map-marker me-1"></i>San Francisco, USA
                </span>
              </div>
              <div className="listing-rating high">
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DashboardHeader;
