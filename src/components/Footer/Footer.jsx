import React from "react";

const Footer = () => {
  return (
    <footer className="light-footer skin-light-footer style-2">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div className="footer_widget">
                <img
                  src="/assets/img/logo.png" // Assuming the logo is in the public folder
                  className="img-footer small mb-2"
                  alt=""
                />
                <div className="address mt-2">
                  7742 Sadar Street Range Road, USA
                  <br />
                  United Kingdom GHQ11
                </div>
                <div className="address mt-3">
                  40 568 423 6597
                  <br />
                  support@Goodup.com
                </div>
                <div className="address mt-2">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="#" className="theme-cl">
                        <i className="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="theme-cl">
                        <i className="lni lni-twitter-filled"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="theme-cl">
                        <i className="lni lni-youtube"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="theme-cl">
                        <i className="lni lni-instagram-filled"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="theme-cl">
                        <i className="lni lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
              <div className="footer_widget">
                <h4 className="widget_title">Main Navigation</h4>
                <ul className="footer-menu">
                  <li>
                    <a href="#">Explore Listings</a>
                  </li>
                  <li>
                    <a href="#">Browse Authors</a>
                  </li>
                  <li>
                    <a href="#">Submit Listings</a>
                  </li>
                  <li>
                    <a href="#">Shortlisted</a>
                  </li>
                  <li>
                    <a href="#">Dashboard</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
              <div className="footer_widget">
                <h4 className="widget_title">Business Owners</h4>
                <ul className="footer-menu">
                  <li>
                    <a href="#">Browse Categories</a>
                  </li>
                  <li>
                    <a href="#">Payment Links</a>
                  </li>
                  <li>
                    <a href="#">Saved Places</a>
                  </li>
                  <li>
                    <a href="#">Dashboard</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
              <div className="footer_widget">
                <h4 className="widget_title">About Company</h4>
                <ul className="footer-menu">
                  <li>
                    <a href="#">Who We Are?</a>
                  </li>
                  <li>
                    <a href="#">Our Mission</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                  <li>
                    <a href="#">Packages</a>
                  </li>
                  <li>
                    <a href="#">Dashboard</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
              <div className="footer_widget">
                <h4 className="widget_title">Helpful Topics</h4>
                <ul className="footer-menu">
                  <li>
                    <a href="#">Site Map</a>
                  </li>
                  <li>
                    <a href="#">Security</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">FAQ's Page</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom br-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 text-center">
              <p className="mb-0">
                © 2022 Goodup. Designed By{" "}
                <a href="https://themezhub.com">ThemezHub</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
