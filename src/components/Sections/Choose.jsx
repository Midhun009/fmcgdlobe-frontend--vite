// eslint-disable-next-line no-unused-vars
import React from "react";

const Choose = () => {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="sec_title position-relative text-center mb-5">
              <h6 className="text-muted mb-0">Choose GoodUp</h6>
              <h2 className="ft-bold">
                Why Choose <span className="theme-cl">GoodUp</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row align-items-center justify-content-center g-4">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="topFeatures">
              <div className="icoBox">
                <i className="fa-solid fa-magnifying-glass"></i>
                <span className="num">01</span>
              </div>
              <div className="capText">
                <h4 className="title">Search & Find Place</h4>
                <p className="subtitle">
                  Think of a news blog that's filled with content hourly on the
                  day of going live. However, supervision reviewers.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="topFeatures">
              <div className="icoBox">
                <i className="fa-regular fa-file-lines"></i>
                <span className="num">02</span>{" "}
                {/* Changed to 02 for correct sequence */}
              </div>
              <div className="capText">
                <h4 className="title">Submit Listing</h4>
                <p className="subtitle">
                  Think of a news blog that's filled with content hourly on the
                  day of going live. However, supervision reviewers.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="topFeatures">
              <div className="icoBox">
                <i className="fa-regular fa-circle-check"></i>
                <span className="num">03</span>{" "}
                {/* Changed to 03 for correct sequence */}
              </div>
              <div className="capText">
                <h4 className="title">Get Approved</h4>
                <p className="subtitle">
                  Think of a news blog that's filled with content hourly on the
                  day of going live. However, supervision reviewers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
