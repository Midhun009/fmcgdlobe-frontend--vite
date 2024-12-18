import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchItemDetails } from "../Api/categoryApi"; // Import the API function
import Sidebar from "../components/Categories/Sidebar";
import ItemCard from "../components/Categories/ItemCard";

const ListingCategory = () => {
  const { slug } = useParams(); // Retrieve the slug from the URL
  const [category, setCategory] = useState(null); // State to store the category data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state

  useEffect(() => {
    // Fetch category data based on the slug using the imported API function
    fetchItemDetails(slug)
      .then((response) => {
        setCategory(response); // Set the full category object from the response
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        setError("Failed to fetch category data"); // Handle errors
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div>Loading...</div>; // Show loading message while fetching data
  if (error) return <div>{error}</div>; // Show error message if the fetch fails

  return (
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
            
              <h3 className="text-center mb-4"> Category: {category?.name || "Loading..."}</h3>
             

              <ItemCard categorySlug={slug} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingCategory;
