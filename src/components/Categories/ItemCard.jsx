import React, { useState, useEffect } from "react";
import { fetchItemDetails } from "../../Api/categoryApi"; // Importing the API logic

const ItemCard = ({ categorySlug }) => {
  const [itemData, setItemData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (categorySlug) {
      setLoading(true);
      setError(null);

      fetchItemDetails(categorySlug)
        .then((data) => {
          setItemData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError("Failed to fetch data");
          setLoading(false);
        });
    } else {
      setError("No category slug provided");
      setLoading(false);
    }
  }, [categorySlug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!itemData) return <div>No items found for this category.</div>;

  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
      <div className="Goodup-grid-wrap">
        <div className="Goodup-grid-upper">
          <div className="Goodup-pos ab-left">
            <div className="Goodup-status open me-2">Distributor</div>
            <div className="Goodup-featured-tag">Verified</div>
          </div>
          <div className="Goodup-grid-thumb">
            <a
              href="listing-detail-2.html"
              className="d-block text-center m-auto"
            >
              <img
                src={itemData.imageUrl || "https://via.placeholder.com/500x500"}
                className="img-fluid"
                alt={itemData.title || "Item"}
              />
            </a>
          </div>
          <div className="Goodup-rating overlay">
            <div className="Goodup-pr-average high">
              {itemData.rating && Number.isFinite(itemData.rating)
                ? itemData.rating
                : "N/A"}
            </div>
            <div className="Goodup-aldeio">
              <div className="Goodup-rates">
                {itemData.rating && Number.isFinite(itemData.rating) ? (
                  [...Array(Math.round(itemData.rating))].map((_, index) => (
                    <i className="fas fa-star" key={index}></i>
                  ))
                ) : (
                  <span>No rating available</span>
                )}
              </div>
              <div className="Goodup-all-review">
                <span>{itemData.reviews || "No reviews"}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="Goodup-grid-fl-wrap">
          <div className="Goodup-caption px-3 py-2">
            <div className="Goodup-author">
              <a href="author-detail.html">
                <img
                  src="https://via.placeholder.com/500x500"
                  className="img-fluid circle"
                  alt="Author"
                />
              </a>
            </div>
            <div className="Goodup-cates">
              <a href="search.html">{itemData.name || "No category"}</a>
            </div>
            <h4 className="mb-0 ft-medium medium">
              <a href="listing-detail-2.html" className="text-dark fs-md">
                {itemData.title || "No title available"}
              </a>
            </h4>
            <div className="Goodup-middle-caption mt-3">
              <div className="Goodup-location">
                <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                {itemData.location || "Location not available"}
              </div>
              <div className="Goodup-call mt-2">
                <i className="fas fa-phone-alt"></i>
                {itemData.phone || "Phone not available"}
              </div>
              <div className="Goodup-whatsapp mt-2">
                <i className="fab fa-whatsapp me-1"></i>
                {itemData.whatsapp ? (
                  <a
                    href={itemData.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                ) : (
                  "WhatsApp not available"
                )}
              </div>
            </div>
          </div>
          <div className="Goodup-grid-footer py-2 px-3">
            <div className="Goodup-ft-last">
              <div className="Goodup-inline">
                <div className="Goodup-bookmark-btn">
                  <button type="button">
                    <i className="lni lni-envelope position-absolute"></i>
                  </button>
                </div>
                <div className="Goodup-bookmark-btn">
                  <button type="button">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                </div>
                <div className="Goodup-bookmark-btn">
                  <button type="button">
                    <i className="fab fa-twitter"></i>
                  </button>
                </div>
                <div className="Goodup-bookmark-btn">
                  <button type="button">
                    <i className="fab fa-instagram"></i>
                  </button>
                </div>
                <div className="Goodup-bookmark-btn">
                  <button type="button">
                    <i className="fas fa-globe"></i>
                  </button>
                </div>
                <div className="Goodup-bookmark-btn">
                  <button type="button">
                    <i className="fas fa-phone-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dropdowns for Keywords, Brands, and Categories */}
          <div className="col">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="panel-title mb-0">
                  <span>Keywords: </span>
                  <a
                    href={
                      (itemData.keywords && itemData.keywords[0]?.link) || "#"
                    }
                  >
                    {(itemData.keywords && itemData.keywords[0]?.name) ||
                      "No keywords"}
                  </a>
                </h4>
                <span className="toggleIcon">
                  <a
                    href="#keywords_1"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="keywords_1"
                  >
                    +
                  </a>
                </span>
              </div>
              <div id="keywords_1" className="collapse">
                <div className="card-body">
                  {itemData.keywords &&
                  Array.isArray(itemData.keywords) &&
                  itemData.keywords.length > 0 ? (
                    itemData.keywords.map((keyword, index) => (
                      <a
                        key={index}
                        href={keyword.link}
                        className="badge badge-hover"
                      >
                        {keyword.name}
                      </a>
                    ))
                  ) : (
                    <span>No keywords available</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="panel-title mb-0">
                  <span>Brands: </span>
                  <a
                    href={(itemData.brands && itemData.brands[0]?.link) || "#"}
                  >
                    {(itemData.brands && itemData.brands[0]?.name) ||
                      "No brands"}
                  </a>
                </h4>
                <span className="toggleIcon">
                  <a
                    href="#brands_1"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="brands_1"
                  >
                    +
                  </a>
                </span>
              </div>
              <div id="brands_1" className="collapse">
                <div className="card-body">
                  {itemData.brands &&
                  Array.isArray(itemData.brands) &&
                  itemData.brands.length > 0 ? (
                    itemData.brands.map((brand, index) => (
                      <a
                        key={index}
                        href={brand.link}
                        className="badge badge-hover"
                      >
                        {brand.name}
                      </a>
                    ))
                  ) : (
                    <span>No brands available</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="panel-title mb-0">
                  <span>Categories: </span>
                  <a
                    href={
                      (itemData.categories && itemData.categories[0]?.link) ||
                      "#"
                    }
                  >
                    {(itemData.categories && itemData.categories[0]?.name) ||
                      "No categories"}
                  </a>
                </h4>
                <span className="toggleIcon">
                  <a
                    href="#categories_1"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="categories_1"
                  >
                    +
                  </a>
                </span>
              </div>
              <div id="categories_1" className="collapse">
                <div className="card-body">
                  {itemData.categories &&
                  Array.isArray(itemData.categories) &&
                  itemData.categories.length > 0 ? (
                    itemData.categories.map((category, index) => (
                      <a
                        key={index}
                        href={category.link}
                        className="badge badge-hover"
                      >
                        {category.name}
                      </a>
                    ))
                  ) : (
                    <span>No categories available</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
