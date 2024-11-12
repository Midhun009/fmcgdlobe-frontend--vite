// components/ProductGallery.js
import React from "react";
import "./ProductGallery.css"; 

const ProductGallery = ({ productImage, productName, rating }) => {
  // Generate stars based on the rating
  const stars = Array.from({ length: 5 }).map((_, index) => (
    <i
      className={`fas fa-star ${
        index < rating ? "text-warning" : "text-muted"
      }`}
      key={index}
    ></i>
  ));

  return (
    <div
      className="featured-slick"
      style={{ backgroundImage: `url('https://via.placeholder.com/700x350')` }}
    >
      <div className="featured-gallery-slide">{/* Background image */}</div>

      <div className="Goodup-ops-bhri">
        <div className="Goodup-lkp-flex d-flex align-items-start justify-content-start">
          <div className="Goodup-lkp-thumb">
            <img
              src={productImage} 
              className="img-fluid"
              width="150px"
              alt={productName} 
            />
          </div>
          <div className="Goodup-lkp-caption ps-3">
            <div className="Goodup-lkp-title">
              <h1 className="text-light mb-0 ft-bold">{productName}</h1>
            </div>
            <div className="Goodup-ft-first">
              <div className="Goodup-rating">
                <div className="Goodup-rates">
                  {stars}
                </div>
              </div>
              <div className="Goodup-price-range">
                <span className="ft-medium text-light">
                  {rating.toFixed(1)} {rating === 1 ? "Star" : "Stars"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
