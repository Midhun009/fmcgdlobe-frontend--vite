import React, { useEffect, useState } from "react";
import { fetchPartnersData } from "../../Api/partnersApi"; // Make sure to create this function

const Partners = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPartnersData = async () => {
      try {
        const data = await fetchPartnersData(); // Fetching data from your API
        setPartners(data); // Setting the partners data
        setLoading(false); // Updating loading state
      } catch (error) {
        setError("Failed to load partner data"); // Error handling
        setLoading(false);
      }
    };

    getPartnersData();
  }, []);

  if (loading) return <div>Loading...</div>; // Loading state
  if (error) return <div>{error}</div>; // Error state

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
          {partners.map((partner, index) => (
            <div
              className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6"
              key={partner.id} // Assuming each partner has a unique id
            >
              <div className="empl-thumb text-center px-3 py-4">
                <img
                  src={partner.logo} // Assuming each partner has a logoUrl
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
