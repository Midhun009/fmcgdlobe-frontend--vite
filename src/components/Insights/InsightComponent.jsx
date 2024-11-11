// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { fetchUpdatesData } from "../../Api/insightsApi"; // Import your API function

const InsightComponent = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUpdates = async () => {
      try {
        const data = await fetchUpdatesData(); // Fetch data from API
        setUpdates(data);
      } catch (err) {
        setError("Failed to load updates");
      } finally {
        setLoading(false);
      }
    };
    getUpdates();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Function to strip HTML tags from a string
const stripHtmlTags = (html, maxLength = 100) => {
  const text = html.replace(/<[^>]*>/g, ""); // Remove HTML tags
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};


  return (
    <section className="gray py-5">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12">
            <div className="row justify-content-center gx-3">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="sec_title position-relative text-center mb-5">
                  <h6 className="theme-cl mb-0">Latest Insights</h6>
                  <h2 className="ft-bold">View Recent Insights</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {updates.map((update, index) => (
                <div
                  key={index}
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                >
                  <div className="Goodup-grid-wrap">
                    <div className="Goodup-grid-upper">
                      <div className="Goodup-bookmark-btn">
                        <button type="button">
                          <i className="lni lni-heart-filled position-absolute"></i>
                        </button>
                      </div>
                      <div className="Goodup-pos ab-left">
                        <div
                          className={`Goodup-status ${
                            update.status?.toLowerCase() || ""
                          } me-2`}
                        >
                          {update.status || "N/A"}
                        </div>
                        {update.isFeatured && (
                          <div className="Goodup-featured-tag">Featured</div>
                        )}
                      </div>
                      <div className="Goodup-grid-thumb">
                        <Link
                          to={`/blog/${update.id}`}
                          className="d-block text-center m-auto"
                        >
                          <img
                            src={
                              update.image ||
                              "https://via.placeholder.com/700x350"
                            }
                            className="img-fluid"
                            alt={update.title || "Update"}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div
                          className="Goodup-cates"
                          style={{ color: "#F41b3b" }}
                        >
                          {update.category || "General"}
                        </div>
                        <div className="blg_title">
                          <h4>
                            <Link to={`/insights/${update.slug}`}>
                              {update.title}
                            </Link>
                          </h4>
                        </div>
                        <div className="blg_desc">
                          {stripHtmlTags(update.description) ? (
                            <p>{stripHtmlTags(update.description)}</p>
                          ) : null}
                        </div>
                      </div>
                      <div className="crs_grid_foot">
                        <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-3">
                          <div className="crs_fl_first">
                            <div className="crs_tutor">
                              <div className="crs_tutor_thumb">
                                <img
                                  src={
                                    update.organization?.logo ||
                                    "/path/to/default-logo.png"
                                  }
                                  className="img-fluid circle"
                                  width="35"
                                  alt=""
                                />
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
                                    {update.views || "0"} Views
                                  </div>
                                </li>
                                <li>
                                  <div className="elsio_ic">
                                    <i className="fa fa-clock text-warning"></i>
                                  </div>
                                  <div className="elsio_tx">
                                    {update.date || "N/A"}
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightComponent;
