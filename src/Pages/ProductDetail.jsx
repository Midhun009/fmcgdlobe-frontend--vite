// BusinessPage.js
import React from "react";
import AboutBusiness from "../components/Products/Details/AboutBusiness";
import Reviews from "../components/Products/Details/Reviews";
import ReviewForm from "../components/Products/Details/ReviewForm";
import Sidebar from "../components/Products/Details/Sidebar";
import ProductGallery from "../components/Products/Details/ProductGallery";
import SubscribeSection from "../components/Sections/SubscribeSection";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const ProductDetail = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/", active: false },
    { label: "Products", path: "/products", active: false },
    { label: "Product Detail", path: "/product-detail", active: true },
  ];

    return (
      <div>
        <Breadcrumb items={breadcrumbItems} /> 
        <section className="gray py-5 position-relative">
          <div className="container">
            <ProductGallery />
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                <AboutBusiness />
                <Reviews />
                <ReviewForm />
              </div>
              <Sidebar />
            </div>
          </div>
          <SubscribeSection />
        </section>
      </div>
    );
};

export default ProductDetail;
