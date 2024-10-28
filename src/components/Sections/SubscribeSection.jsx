import React from "react";


const SubscribeSection = () => {
  return (
    <section
      className="space bg-cover"
      style={{
        background: "#03343b url(assets/img/landing-bg.png) no-repeat",
      }}
    >
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="sec_title position-relative text-center mb-5">
              <h6 className="text-light mb-0">Subscribr Now</h6>
              <h2 className="ft-bold text-light">
                Get All Updates & Advance Offers
              </h2>
            </div>
          </div>
        </div>

        <div className="row align-items-center justify-content-center">
          <div className="col-xl-7 col-lg-10 col-md-12 col-sm-12 col-12">
            <form className="bg-white rounded p-1">
              <div className="row no-gutters">
                <div className="col-xl-9 col-lg-9 col-md-8 col-sm-8 col-8">
                  <div className="form-group mb-0 position-relative">
                    <input
                      type="text"
                      className="form-control b-0"
                      placeholder="Enter Your Email Address"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4">
                  <div className="form-group mb-0 position-relative">
                    <button
                      className="btn full-width btn-height theme-bg text-light fs-md"
                      type="button"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
