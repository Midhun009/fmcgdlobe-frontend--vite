import React from "react";

const AboutSection = () => {
  return (
    <section
      className="about-bg bg-cover"
      style={{
        background: "url(https://via.placeholder.com/1920x1000) no-repeat",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-11 col-sm-12">
            <div className="abt-caption" style={{textAlign: "left"}}>
              <div className="abt-caption-head">
                <h1>
                  Smart team always creates better things and better solutions.
                </h1>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </h6>
                <div className="abt-bt-info">
                  <a
                    href="javascript:void(0);"
                    className="btn ft-medium theme-cl bg-white rounded"
                  >
                    Get Started<i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
                <div className="position-relative row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <h3 className="ft-bold text-sky mb-0">
                      <span className="count">07</span>+
                    </h3>
                    <p className="ft-medium text-light">Business Listing</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <h3 className="ft-bold text-warning mb-0">
                      <span className="count">06</span>k+
                    </h3>
                    <p className="ft-medium text-light">Popular Authors</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <h3 className="ft-bold text-danger mb-0">
                      <span className="count">200</span>+
                    </h3>
                    <p className="ft-medium text-light">Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
