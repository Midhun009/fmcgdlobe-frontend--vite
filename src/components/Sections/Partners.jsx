import React from "react";

const Partners = () => {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-7 col-md-9 col-sm-12">
            <div className="sec_title position-relative text-center mb-5">
              <h6 className="text-muted mb-0">Our Partners</h6>
              <h2 className="ft-bold">
                We Have Worked with <span className="theme-cl">10,000+</span>{" "}
                Trusted Companies
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <div
                className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6"
                key={index}
              >
                <div className="empl-thumb text-center px-3 py-4">
                  <img
                    src="https://via.placeholder.com/300x90"
                    className="img-fluid mx-auto"
                    alt={`Partner ${index + 1}`}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
