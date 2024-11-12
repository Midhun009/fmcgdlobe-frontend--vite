// src/components/Products/Details/AboutBusiness.js
import React from "react";

const AboutBusiness = ({ description }) => {
  return (
    <div className="bg-white rounded mb-4">
      <div className="jbd-01 px-4 py-4">
        <div className="jbd-details">
          <h5 className="ft-bold fs-lg">About the Product</h5>
          <div className="d-block mt-3">
            <p>{description}</p> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBusiness;
