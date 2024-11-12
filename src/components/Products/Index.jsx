import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import SideBar from "./SideBar";
import { fetchProducts } from "../../Api/productApi";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  useEffect(() => {
    // Fetch data on component mount
    const getProducts = async () => {
      const productData = await fetchProducts();
      setProducts(productData); // Set the fetched data into state
    };

    getProducts();
  }, []);

  // Calculate the index of the last product on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  // Calculate the index of the first product on the current page
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Get the products for the current page
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array.from({ length: filledStars }).map((_, i) => (
          <i key={`filled-${i}`} className="fas fa-star"></i>
        ))}
        {halfStar && <i className="fas fa-star-half-alt"></i>}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <i key={`empty-${i}`} className="far fa-star"></i>
        ))}
      </>
    );
  };

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <section className="gray py-5">
      <div className="container">
        <div className="row">
          {/* Sidebar Component */}
          <SideBar />

          {/* Item Wrap Start */}
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12">
            {/* Product Grid */}
            <div className="row justify-content-center gx-3">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                >
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn">
                        <button type="button">
                          <i className="lni lni-heart-filled position-absolute"></i>
                        </button>
                      </div>
                      <div className="Goodup-grid-thumb">
                        {/* Use Link to navigate to the product detail page based on product id */}
                        <Link
                          to={`/product/${product.id}`} // Navigate to product detail page
                          className="d-block text-center m-auto"
                        >
                          <img
                            src={
                              product.images[0]?.image ||
                              "https://via.placeholder.com/700x350"
                            } // Display first image from the images array
                            className="img-fluid"
                            alt={product.name}
                          />
                        </Link>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-pr-average high">
                          {product.reviews[0]?.rating || 0}{" "}
                          {/* Display rating from reviews */}
                        </div>
                        <div className="Goodup-aldeio">
                          <div className="Goodup-rates">
                            {renderStars(product.reviews[0]?.rating || 0)}{" "}
                            {/* Render stars based on the rating */}
                          </div>
                          <div className="Goodup-all-review">
                            <span>{product.reviews.length} Reviews</span>{" "}
                            {/* Show the total number of reviews */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-room-price">
                          <span>${product.sales_price}</span>{" "}
                          {/* Display sale price */}
                          <span className="text-muted ml-2">
                            <del>${product.offer_price}</del>{" "}
                            {/* Display offer price */}
                          </span>
                        </div>
                        <h4 className="mb-0 ft-medium medium mb-0">
                          <Link
                            to={`/product/${product.id}`} // Use Link for product name as well
                            className="text-dark fs-md"
                          >
                            {product.name} {/* Display product name */}
                          </Link>
                        </h4>
                        <div className="Goodup-description">
                          <p>{product.description.slice(0, 100)}...</p>{" "}
                          {/* Optionally show part of the description */}
                        </div>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-booking-button">
                            <a href="/contact" className="Goodup-btn-book">
                              Enquiry Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <ul className="pagination">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => handlePageChange(currentPage - 1)}
                      aria-label="Previous"
                    >
                      <span className="fas fa-arrow-circle-left"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  {[...Array(totalPages)].map((_, index) => (
                    <li
                      key={index}
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                    >
                      <a
                        className="page-link"
                        href="#"
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </a>
                    </li>
                  ))}
                  <li
                    className={`page-item ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => handlePageChange(currentPage + 1)}
                      aria-label="Next"
                    >
                      <span className="fas fa-arrow-circle-right"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
