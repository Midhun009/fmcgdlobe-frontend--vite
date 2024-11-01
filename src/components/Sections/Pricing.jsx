import React, { useEffect, useState } from "react";
import { fetchPricingData } from "../../Api/pricingApi"; // Import your API function

const Pricing = () => {
  const [pricingData, setPricingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPricingData = async () => {
      try {
        const data = await fetchPricingData(); // Fetching data from the API
        setPricingData(data); // Setting the fetched data
        setLoading(false); // Updating loading state
      } catch (error) {
        setError("Failed to load pricing data"); // Error handling
        setLoading(false);
      }
    };

    getPricingData();
  }, []);

  if (loading) return <div>Loading...</div>; // Loading state
  if (error) return <div>{error}</div>; // Error state

  // Function to parse the features from the HTML string
  const parseFeatures = (features) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(features, "text/html");
    return Array.from(doc.querySelectorAll("p")).map((p) => p.textContent); // Extracting text from <p> elements
  };

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
          {pricingData.map((pricingPackage) => (
            <div
              key={pricingPackage.id}
              className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12"
            >
              <div className="Goodup-price-wrap">
                <div className="Goodup-author-header">
                  <div className="Goodup-price-currency">
                    <h3>
                      {/* <span className="Goodup-new-price">
                        ${pricingPackage.newPrice}
                      </span> */}
                      <span className="Goodup-old-price">
                        <del>${pricingPackage.price}</del>
                      </span>
                    </h3>
                  </div>
                  <div className="Goodup-price-title">
                    <div className="Goodup-price-tlt">
                      <h4>{pricingPackage.name}</h4>
                    </div>
                    <div className="Goodup-price-ribbon">
                      {/* <span className="Goodup-ribbon-offer all">
                        {pricingPackage.discount}
                      </span> */}
                    </div>
                  </div>
                  {/* <div className="Goodup-price-subtitle">
                    {pricingPackage.subtitle}
                  </div> */}
                </div>
                <div className="Goodup-price-body">
                  <ul className="price__features">
                    {pricingPackage.features ? (
                      parseFeatures(pricingPackage.features).length > 0 ? (
                        parseFeatures(pricingPackage.features).map(
                          (feature, index) => (
                            <li key={index}>
                              <i className="fa fa-angle-right"></i>
                              {feature}
                            </li>
                          )
                        )
                      ) : (
                        <li>No features available</li> // Fallback message
                      )
                    ) : (
                      <li>No features available</li> // Fallback message if features is null
                    )}
                  </ul>
                </div>
                <div className="Goodup-price-bottom">
                  <a className="Goodup-price-btn" href="#">
                    <i className="fas fa-shopping-basket"></i> Purchase Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
