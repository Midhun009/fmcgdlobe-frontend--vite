import React from "react";

const HeroSection = () => {
  return (
    <section
      className="bg-cover text-center"
      style={{
        background: "#353535 url(https://via.placeholder.com/1920x700)",
        backgroundSize: "cover",
      }}
      data-overlay="7"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10 text-center">
            <div className="sec-heading center">
              <h2 className="text-light ft-bold">Best In Canada</h2>
              <h3 className="text-light ft-medium mb-4">
                Visit The Best Spa & Hotels in California
              </h3>
              <p className="text-light mb-4">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="counter-link">
              <a href="#" className="btn btn-md text-dark ft-medium btn-light">
                Explore & Submit Listings
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
