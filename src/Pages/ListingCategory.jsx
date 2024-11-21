// ListingCategory.js
import React from "react";
import Sidebar from "../components/Categories/Sidebar";
import ItemCard from "../components/Categories/ItemCard";

const ListingCategory = () => (
  <section className="gray py-5">
    <div className="container">
      <div className="row">
        {/* Sidebar */}
        <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12">
          <Sidebar />
        </div>

        {/* Item Wrap */}
        <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12">
          <div className="row justify-content-center gx-3">
            <ItemCard />
            
          
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListingCategory;
