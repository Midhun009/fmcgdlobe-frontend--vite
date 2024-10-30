import React, { useState, useEffect } from "react";
import AllCategories from "../components/Sections/AllCategories";
import SubscribeSection from "../components/Sections/SubscribeSection";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Preloader from "../components/Preloader"; // Import the Preloader component

const Categories = () => {
  const [loading, setLoading] = useState(true);

  const breadcrumbItems = [
    { label: "Home", path: "/", active: false },
    { label: "All Categories", path: "/all-categories", active: true },
  ];

  useEffect(() => {
    // Simulate a data fetching or loading process
    const timer = setTimeout(() => {
      setLoading(false); // Hide preloader after 2 seconds
    }, 250); // Adjust this duration to your needs

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <>
      {loading ? (
        <Preloader /> // Show preloader while loading
      ) : (
        <div>
          <Breadcrumb items={breadcrumbItems} />
          <AllCategories />
          <SubscribeSection />
        </div>
      )}
    </>
  );
};

export default Categories;
