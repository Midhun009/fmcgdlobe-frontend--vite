import React from "react";
import "./ItemCard.css";

const dummyData = {
  items: [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/700x350",
      title: "Pretty Woman Smart Batra",
      location: "San Denever, USA",
      phone: "+91 365 874 6310",
      whatsapp: "https://wa.me/yourwhatsapplink",
      rating: 4.8,
      reviews: 46,
      category: "Wedding",
      keywords: [
        { name: "Breakfast Cereals", link: "/keywords/breakfast-cereals/" },
        { name: "Briyani Rice", link: "/keywords/briyani-rice/" },
      ],
      brands: [
        { name: "Apple", link: "/brands/apple/" },
        { name: "Samsung", link: "/brands/samsung/" },
        { name: "Sony", link: "/brands/sony/" },
      ],
      categories: [
        { name: "Party", link: "/categories/party/" },
        { name: "Corporate", link: "/categories/corporate/" },
      ],
    },
  
  ],
};

const ItemCard = () => (
  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
    {dummyData.items.map((item) => (
      <div className="Goodup-grid-wrap" key={item.id}>
        <div className="Goodup-grid-upper">
          <div className="Goodup-pos ab-left">
            <div className="Goodup-status open me-2">Distributer</div>
            <div className="Goodup-featured-tag">Verified</div>
          </div>
          <div className="Goodup-grid-thumb">
            <a
              href="listing-detail-2.html"
              className="d-block text-center m-auto"
            >
              <img src={item.imageUrl} className="img-fluid" alt={item.title} />
            </a>
          </div>
          <div className="Goodup-rating overlay">
            <div className="Goodup-pr-average high">{item.rating}</div>
            <div className="Goodup-aldeio">
              <div className="Goodup-rates">
                {[...Array(Math.round(item.rating))].map((_, index) => (
                  <i className="fas fa-star" key={index}></i>
                ))}
              </div>
              <div className="Goodup-all-review">
                <span>{item.reviews} Reviews</span>
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
              <a href="search.html">{item.category}</a>
            </div>
            <h4 className="mb-0 ft-medium medium">
              <a href="listing-detail-2.html" className="text-dark fs-md">
                {item.title}
              </a>
            </h4>
            <div className="Goodup-middle-caption mt-3">
              <div className="Goodup-location">
                <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                {item.location}
              </div>
              <div className="Goodup-call mt-2">
                <i className="fas fa-phone-alt"></i>
                {item.phone}
              </div>
              <div className="Goodup-whatsapp mt-2">
                <i className="fab fa-whatsapp me-1"></i>
                <a
                  href={item.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
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
                  <a href={item.keywords[0].link}>{item.keywords[0].name}</a>
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
                  {item.keywords.map((keyword, index) => (
                    <a
                      key={index}
                      href={keyword.link}
                      className="badge badge-hover"
                    >
                      {keyword.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="panel-title mb-0">
                  <span>Brands: </span>
                  <a href={item.brands[0].link}>{item.brands[0].name}</a>
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
                  {item.brands.map((brand, index) => (
                    <a
                      key={index}
                      href={brand.link}
                      className="badge badge-hover"
                    >
                      {brand.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="panel-title mb-0">
                  <span>Category: </span>
                  <a href={item.categories[0].link}>
                    {item.categories[0].name}
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
                  {item.categories.map((category, index) => (
                    <a key={index} href={category.link} className="badge">
                      {category.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ItemCard;
