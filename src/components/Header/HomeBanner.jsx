import React from "react";

const HomeBanner = () => {
  return (
    <div
      className="home-banner margin-bottom-0"
      style={{
        background:
          "#f41b3b url(https://shreethemes.net/goodup-live-2/goodup/assets/img/banner-6.jpg) no-repeat",
      }}
      data-overlay="5"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="banner_caption text-center mb-5">
              <h1 className="banner_title ft-bold mb-1">
                Find Great Place in Your Areas
              </h1>
              <p className="fs-md ft-medium">
                Explore wonderful places to stay, salons, shopping, massage or
                visit local areas.
              </p>
            </div>

            <form className="main-search-wrap fl-wrap mb-4">
              <div className="main-search-item">
                <span className="search-tag">
                  <i className="lni lni-keyboard"></i>
                </span>
                <input
                  type="text"
                  className="form-control radius"
                  placeholder="Find Companies, Brands, Products, Keywords, Distributors, and Suppliers"
                />
              </div>
              <div className="main-search-item">
                <span className="search-tag">
                  <i className="lni lni-map-marker"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="San Francisco, CA"
                />
              </div>
              <div className="main-search-button">
                <button
                  className="btn full-width theme-bg text-white"
                  type="button"
                >
                  Search
                </button>
              </div>
            </form>

            <div className="Goodup-top-cates">
              <ul>
                <li>
                  <a
                    href="half-map-search-2.html"
                    className="Goodup-top-cat-box"
                  >
                    <div className="Goodup-tp-ico">
                      <i className="fas fa-stethoscope"></i>
                    </div>
                    <div className="Goodup-tp-title">
                      <h5>Hospital</h5>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="half-map-search-2.html"
                    className="Goodup-top-cat-box"
                  >
                    <div className="Goodup-tp-ico">
                      <i className="fas fa-shopping-basket"></i>
                    </div>
                    <div className="Goodup-tp-title">
                      <h5>Shoppings</h5>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="half-map-search-2.html"
                    className="Goodup-top-cat-box"
                  >
                    <div className="Goodup-tp-ico">
                      <i className="fas fa-basketball-ball"></i>
                    </div>
                    <div className="Goodup-tp-title">
                      <h5>Active Life</h5>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="half-map-search-2.html"
                    className="Goodup-top-cat-box"
                  >
                    <div className="Goodup-tp-ico">
                      <i className="fas fa-utensils"></i>
                    </div>
                    <div className="Goodup-tp-title">
                      <h5>Restaurants</h5>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="half-map-search-2.html"
                    className="Goodup-top-cat-box"
                  >
                    <div className="Goodup-tp-ico">
                      <i className="fas fa-car-alt"></i>
                    </div>
                    <div className="Goodup-tp-title">
                      <h5>Automotive</h5>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="half-map-search-2.html"
                    className="Goodup-top-cat-box"
                  >
                    <div className="Goodup-tp-ico">
                      <i className="fas fa-pencil-ruler"></i>
                    </div>
                    <div className="Goodup-tp-title">
                      <h5>Art & Design</h5>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
