import React from "react";

const Pricing = () => {
  return (
    <section className="space min gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-7 col-md-9 col-sm-12">
            <div className="sec_title position-relative text-center mb-5">
              <h6 className="theme-cl mb-0">Our Pricing</h6>
              <h2 className="ft-bold">Choose Your Package</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Personal Package */}
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="Goodup-price-wrap">
              <div className="Goodup-author-header">
                <div className="Goodup-price-currency">
                  <h3>
                    <span className="Goodup-new-price">
                      $<del>49</del>
                    </span>
                    <span className="Goodup-old-price">
                      $<del>149</del>
                    </span>
                  </h3>
                </div>
                <div className="Goodup-price-title">
                  <div className="Goodup-price-tlt">
                    <h4>Personal</h4>
                  </div>
                  <div className="Goodup-price-ribbon">
                    <span className="Goodup-ribbon-offer all">50% Off</span>
                  </div>
                </div>
                <div className="Goodup-price-subtitle">
                  Best Choice for Individuals
                </div>
              </div>
              <div className="Goodup-price-body">
                <ul className="price__features">
                  <li>
                    <i className="fa fa-angle-right"></i>Lifetime Bandwidth
                    Usage
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>6 Months Support &
                    Updates
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>10 Website License
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>Quickstart Included
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>Access to Plugins &
                    Theme
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>Branding/Copyright
                    Removal
                  </li>
                </ul>
              </div>
              <div className="Goodup-price-bottom">
                <a className="Goodup-price-btn" href="#">
                  <i className="fas fa-shopping-basket"></i> Purchase Now
                </a>
              </div>
            </div>
          </div>

          {/* Platinum Package */}
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="Goodup-price-wrap">
              <div className="Goodup-author-header">
                <div className="Goodup-price-currency">
                  <h3>
                    <span className="Goodup-new-price theme-cl">
                      $<del>129</del>
                    </span>
                    <span className="Goodup-old-price">
                      $<del>199</del>
                    </span>
                  </h3>
                </div>
                <div className="Goodup-price-title">
                  <div className="Goodup-price-tlt">
                    <h4>Platinum</h4>
                  </div>
                  <div className="Goodup-price-ribbon">
                    <span className="Goodup-ribbon-offer">50% Off</span>
                  </div>
                </div>
                <div className="Goodup-price-subtitle">
                  Best Choice for Individuals
                </div>
              </div>
              <div className="Goodup-price-body">
                <ul className="price__features">
                  <li>
                    <i className="fa fa-angle-right"></i>Lifetime Bandwidth
                    Usage
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>12 Months Support &
                    Updates
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>20 Website License
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>Quickstart Included
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>Access to Plugins &
                    Theme
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>Branding/Copyright
                    Removal
                  </li>
                </ul>
              </div>
              <div className="Goodup-price-bottom">
                <a className="Goodup-price-btn active" href="#">
                  <i className="fas fa-shopping-basket"></i> Purchase Now
                </a>
              </div>
            </div>
          </div>

          {/* Standard Package */}
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="Goodup-price-wrap">
              <div className="Goodup-author-header">
                <div className="Goodup-price-currency">
                  <h3>
                    <span className="Goodup-new-price">
                      $<del>149</del>
                    </span>
                    <span className="Goodup-old-price">
                      $<del>249</del>
                    </span>
                  </h3>
                </div>
                <div className="Goodup-price-title">
                  <div className="Goodup-price-tlt">
                    <h4>Standard</h4>
                  </div>
                  <div className="Goodup-price-ribbon">
                    <span className="Goodup-ribbon-offer all">50% Off</span>
                  </div>
                </div>
                <div className="Goodup-price-subtitle">
                  Best Choice for Individuals
                </div>
              </div>
              <div className="Goodup-price-body">
                <ul className="price__features">
                  <li>
                    <i className="fa fa-angle-right"></i>Lifetime Bandwidth
                    Usage
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>Lifetime Support &
                    Updates
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>50 Website License
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>Quickstart Included
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>Access to Plugins &
                    Theme
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>Branding/Copyright
                    Removal
                  </li>
                </ul>
              </div>
              <div className="Goodup-price-bottom">
                <a className="Goodup-price-btn" href="#">
                  <i className="fas fa-shopping-basket"></i> Purchase Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
