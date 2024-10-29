import React from "react";
import RecommendedProducts from "./RecommendedProducts";

const Sidebar = () => (
  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
    <div className="jb-apply-form bg-white rounded py-4 px-4 mb-4">
      <h4 className="ft-bold mb-1">Buy Now</h4>
      {/* Product Details */}
      <div className="mb-3">
        <h5 className="ft-medium">Product Name</h5>
        <p>Description of the product with key features and benefits.</p>
      </div>
      <div className="mb-3">
        <h6 className="ft-medium">Price</h6>
        <h4 className="ft-bold theme-cl">$218</h4>
      </div>
      <div className="form-group">
        <label>Full Name</label>
        <input type="text" className="form-control" placeholder="Your Name" />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Your Email" />
      </div>
      <div className="form-group">
        <label>Quantity</label>
        <input type="number" className="form-control" placeholder="1" min="1" />
      </div>
      <button className="btn theme-bg text-light rounded mt-3">Buy It Now</button>
        </div>
        <RecommendedProducts />
  </div>
);

export default Sidebar;
