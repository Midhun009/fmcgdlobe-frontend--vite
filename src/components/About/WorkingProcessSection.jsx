import React from "react";

const WorkingProcessSection = () => {
  return (
    <section className="space min">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="sec_title position-relative text-center mb-5">
              <h6 className="mb-0 theme-cl">Working Process</h6>
              <h2 className="ft-bold">How It Works</h2>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="wrk-pro-box first">
              <div className="wrk-pro-box-icon">
                <i className="ti-map-alt text-success"></i>
              </div>
              <div className="wrk-pro-box-caption">
                <h4>Find Interesting Place</h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="wrk-pro-box sec">
              <div className="wrk-pro-box-icon">
                <i className="ti-user theme-cl"></i>
              </div>
              <div className="wrk-pro-box-caption">
                <h4>Contact A Few Owners</h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="wrk-pro-box thrd">
              <div className="wrk-pro-box-icon">
                <i className="ti-shield text-sky"></i>
              </div>
              <div className="wrk-pro-box-caption">
                <h4>Make A Reservation</h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcessSection;
