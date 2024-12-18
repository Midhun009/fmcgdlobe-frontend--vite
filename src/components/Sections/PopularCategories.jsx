import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { fetchCategories } from "../../Api/categoryApi";
import "./PopularCategories.css";

const PopularCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetchCategories(); // Fetch categories from the API
        setCategories(response); // Set the categories to the state
      } catch (error) {
        setError("Error fetching categories"); // Handle errors if any
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false); // Set loading to false once the request is done
      }
    };
    getCategories();
  }, []);

  if (loading) {
    return <p>Loading categories...</p>;
  }

  if (error) {
    return <p>{error}</p>; // Show error message if there's an issue with fetching
  }

  return (
    <section className="space min gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="sec_title position-relative text-center mb-5">
              <h6 className="mb-0 theme-cl">Popular Categories</h6>
              <h2 className="ft-bold">Browse Top Categories</h2>
            </div>
          </div>
        </div>

        {/* row */}
        <div className="row align-items-center">
          {categories.map((category, index) => (
            <div
              key={index}
              className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6"
            >
              <div className="cats-wrap text-center">
                <Link
                  to={`/category/${category.slug}`}
                  className="Goodup-catg-wrap"
                >
                  <div className="Goodup-catg-icon">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="category-image"
                    />
                  </div>
                  <div className="Goodup-catg-caption">
                    <h4 className="fs-md mb-0 ft-medium m-catrio">
                      {category.name}
                    </h4>
                    <span className="text-muted">
                      {/* {category.listings} Listings */}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* "View More" Button */}
        <div className="text-center">
          <Link to="/all-categories">
            <Button variant="danger" className="rounded">
              View More
            </Button>
          </Link>
        </div>

        {/* row */}
      </div>
    </section>
  );
};

export default PopularCategories;
