import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchInsightBySlug } from "../../Api/insightDetailApi"; // Assuming you have an API function

const FeaturedSection = () => {
  const { slug } = useParams(); // Capture the slug from the URL
  const [featuredData, setFeaturedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fallback images in case the API data is missing
  const fallbackLogo = "https://via.placeholder.com/90";
  const fallbackBanner = "https://via.placeholder.com/700x350";

  useEffect(() => {
    const getFeaturedData = async () => {
      try {
        const data = await fetchInsightBySlug(slug); 
        setFeaturedData(data);
      } catch (err) {
        setError("Failed to load featured data");
      } finally {
        setLoading(false);
      }
    };

    getFeaturedData();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!featuredData) return <div>No featured data found</div>;

  // Get logo and banner from the API response or fallback
  const { logo, banner } = featuredData.organization || {};
  const displayLogo = logo || fallbackLogo;
  const displayBanner = banner || fallbackBanner;

  return (
    <div className="featured-slick" style={{ padding: "0px" }}>
      <div
        className="featured-gallery-slide"
        style={{
          backgroundImage: `url(${displayBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
        }}
      >
        <div className="dlf-flew">
          <a href={displayBanner} className="mfp-gallery">
            <img
              src={displayBanner}
              className="img-fluid mx-auto"
              alt="Featured"
              style={{ width: "100%" }}
            />
          </a>
        </div>
      </div>
      <div className="ftl-diope">
        <a
          href={featuredData.organization.brochure || "#"} // Use the brochure URL or fallback
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-white text-dark ft-medium rounded"
        >
          View Brochure
        </a>
      </div>

      <div className="Goodup-ops-bhri">
        <div className="Goodup-lkp-flex d-flex align-items-start justify-content-start">
          <div className="Goodup-lkp-thumb">
            <img
              src={displayLogo} // Use the logo from API or fallback
              className="img-fluid"
              width="90"
              alt="Hotel Logo"
            />
          </div>
          <div className="Goodup-lkp-caption ps-3">
            <div className="Goodup-lkp-title">
              <h1 className="text-light mb-0 ft-bold">
                {featuredData.organization.company_name}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
