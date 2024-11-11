import React, { useEffect, useState } from "react";
import { fetchUpdatesData } from "../../Api/insightsApi"; 
import { Link } from "react-router-dom";

const LatestInsights = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNewsData = async () => {
      try {
        const data = await fetchUpdatesData(); // Fetching data from your API
        setNewsData(data); // Setting the insights data
        setLoading(false); // Updating loading state
      } catch (error) {
        setError("Failed to load insights"); // Error handling
        setLoading(false);
      }
    };

    getNewsData();
  }, []);

  if (loading) return <div>Loading...</div>; // Loading state
  if (error) return <div>{error}</div>; // Error state

  // Function to strip HTML tags from a string
const stripHtmlTags = (html, maxLength = 100) => {
  // Use DOMParser to strip HTML tags
  const doc = new DOMParser().parseFromString(html, "text/html");
  const text = doc.body.textContent || "";

  // Apply maxLength and return truncated text if necessary
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};



  return (
    <section className="space min">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="sec_title position-relative text-center mb-4">
              <h6 className="theme-cl mb-0">Latest Insights</h6>
              <h2 className="ft-bold">Discover New Updates</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {newsData.slice(0, 3).map((insight, index) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="gup_insight_grid_box">
                <div className="gup_insight_grid_thumb">
                  <a href={`/insights/${insight.slug}`}>
                    <img
                      src={
                        insight.image || "https://via.placeholder.com/700x350"
                      }
                      className="img-fluid"
                      style={{ height: "300px", width: "600px" }}
                      alt={insight.title}
                    />
                  </a>
                </div>
                <div className="gup_insight_grid_caption">
                  <div className="insight_tag">
                    <span>{insight.category || "General"}</span>
                  </div>
                  <div className="insight_title">
                    <h4>
                      <Link to={`/insights/${insight.slug}`}>
                        {insight.title}
                      </Link>
                    </h4>
                  </div>
                  <div className="insight_desc">
                    <p>{stripHtmlTags(insight.description, 200)}</p>
                  </div>
                </div>
                <div className="crs_grid_foot">
                  <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                    <div className="crs_fl_first">
                      <div className="crs_tutor">
                        <div className="crs_tutor_thumb">
                          <a href="javascript:void(0);">
                            <img
                              src={
                                insight.organization?.logo ||
                                "/path/to/default-logo.png"
                              }
                              className="img-fluid circle"
                              width="35"
                              alt={insight.title || "Author logo"}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crs_fl_last">
                      <div className="foot_list_info">
                        <ul>
                          <li>
                            <div className="elsio_ic">
                              <i className="fa fa-eye text-success"></i>
                            </div>
                            <div className="elsio_tx">
                              {insight.views || "0"} Views
                            </div>
                          </li>
                          <li>
                            <div className="elsio_ic">
                              <i className="fa fa-clock text-warning"></i>
                            </div>
                            <div className="elsio_tx">
                              {insight.date || "N/A"}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
