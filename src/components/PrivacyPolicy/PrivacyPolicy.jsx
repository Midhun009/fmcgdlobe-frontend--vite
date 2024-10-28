// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const PrivacyPolicy = ({ title, content }) => {
  return (
    <section className="middle">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-11 col-lg-12 col-md-6 col-sm-12">
            <div className="abt_caption" style={{ textAlign: "left" }}>
              <h2 className="ft-medium mb-4">{title}</h2>
              {content.map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
