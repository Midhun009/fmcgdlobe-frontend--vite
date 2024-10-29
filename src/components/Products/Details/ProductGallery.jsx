// components/ProductGallery.js
import React from "react";
import "./ProductGallery.css"; // Import the CSS file for styling

const ProductGallery = () => {
  return (
    <div
      className="featured-slick"
      style={{ backgroundImage: `url('https://via.placeholder.com/700x350')` }}
    >
      <div className="featured-gallery-slide">
        {/* Background image is set, so no img element is needed here */}
      </div>
      <div className="ftl-diope">
        <a
          href="javascript:void(0);"
          className="btn bg-white text-dark ft-medium rounded"
        >
          See 20+ Photos
        </a>
      </div>
      <div className="Goodup-ops-bhri">
        <div className="Goodup-lkp-flex d-flex align-items-start justify-content-start">
          <div className="Goodup-lkp-thumb">
            <img
              src="assets/img/burger-king.png"
              className="img-fluid"
              width="90"
              alt="Burger King Logo"
            />
          </div>
          <div className="Goodup-lkp-caption ps-3">
            <div className="Goodup-lkp-title">
              <h1 className="text-light mb-0 ft-bold">
                Hotel Preet in California, USA
              </h1>
            </div>
            <div className="Goodup-ft-first">
              <div className="Goodup-rating">
                <div className="Goodup-rates">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <i className="fas fa-star" key={starIndex}></i>
                  ))}
                </div>
              </div>
              <div className="Goodup-price-range">
                <span className="ft-medium text-light">34 Reviews</span>
                <div className="d-inline ms-2">
                  <span className="active">
                    <i className="fas fa-dollar-sign"></i>
                  </span>
                  <span className="active">
                    <i className="fas fa-dollar-sign"></i>
                  </span>
                  <span className="active">
                    <i className="fas fa-dollar-sign"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="d-block mt-3">
              <div className="list-lioe">
                <div className="list-lioe-single">
                  <span className="ft-medium text-info">
                    <i className="fas fa-check-circle me-1"></i>Claimed
                  </span>
                </div>
                <div className="list-lioe-single ms-2 ps-3 seperate">
                  <a
                    href="javascript:void(0);"
                    className="text-light ft-medium"
                  >
                    Chicken Wings
                  </a>
                  ,
                  <a
                    href="javascript:void(0);"
                    className="text-light ft-medium ms-1"
                  >
                    Sports Bars
                  </a>
                  ,
                  <a
                    href="javascript:void(0);"
                    className="text-light ft-medium ms-1"
                  >
                    American (Traditional)
                  </a>
                  ,
                  <a
                    href="javascript:void(0);"
                    className="text-light ft-medium ms-1"
                  >
                    Seafood
                  </a>
                </div>
              </div>
            </div>
            <div className="d-block mt-1">
              <div className="list-lioe">
                <div className="list-lioe-single">
                  <span className="ft-medium text-danger">Closed</span>
                  <span className="text-light ft-medium ms-2">
                    11:00 AM - 12:00 AM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
