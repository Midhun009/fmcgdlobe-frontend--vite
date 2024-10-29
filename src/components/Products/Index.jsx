import React from "react";
import SideBar from "./SideBar";

const ProductSection = () => {
  // Dummy product data
  const products = [
    {
      id: 1,
      price: "$1,800",
      title: "3112 Comfort Deluxe Space",
      rating: 4.2,
      reviews: 36,
      distance: "1.5 km to Town Center",
      imgSrc: "https://via.placeholder.com/700x350",
      isFeatured: true,
    },
    {
      id: 2,
      price: "$2,100",
      title: "Luxury Suite in Downtown",
      rating: 4.8,
      reviews: 48,
      distance: "500m to Town Center",
      imgSrc: "https://via.placeholder.com/700x350",
      isFeatured: false,
    },
    // Add more dummy products as needed
  ];

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
              {products.map((product) => (
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
                      {product.isFeatured && (
                        <div className="Goodup-pos ab-left">
                          <div className="Goodup-featured-tag">Featured</div>
                        </div>
                      )}
                      <div className="Goodup-grid-thumb">
                        <a
                          href="single-listing-detail-8.html"
                          className="d-block text-center m-auto"
                        >
                          <img
                            src={product.imgSrc}
                            className="img-fluid"
                            alt={product.title}
                          />
                        </a>
                      </div>
                      <div className="Goodup-rating overlay">
                        <div className="Goodup-pr-average high">
                          {product.rating}
                        </div>
                        <div className="Goodup-aldeio">
                          <div className="Goodup-rates">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <i key={index} className="fas fa-star"></i>
                            ))}
                          </div>
                          <div className="Goodup-all-review">
                            <span>{product.reviews} Reviews</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-room-price">
                          <span>{product.price}</span>/Night
                        </div>
                        <h4 className="mb-0 ft-medium medium mb-0">
                          <a
                            href="single-listing-detail-8.html"
                            className="text-dark fs-md"
                          >
                            {product.title}
                            <span className="verified-badge">
                              <i className="fas fa-check-circle"></i>
                            </span>
                          </a>
                        </h4>
                        <div className="Goodup-distance">
                          {product.distance}
                        </div>
                        <div className="Goodup-middle-caption mt-3">
                          <div className="Goodup-booking-button">
                            <a href="#" className="Goodup-btn-book">
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
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span className="fas fa-arrow-circle-right"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      ...
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      18
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
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
