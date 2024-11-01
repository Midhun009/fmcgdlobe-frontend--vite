import React, { useEffect, useState } from "react";
import { fetchLatestNewsData } from "../../Api/newsApi"; // Adjust the import based on your file structure

const LatestNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNewsData = async () => {
      try {
        const data = await fetchLatestNewsData(); // Fetching data from your API
        setNewsData(data); // Setting the news data
        setLoading(false); // Updating loading state
      } catch (error) {
        setError("Failed to load news articles"); // Error handling
        setLoading(false);
      }
    };

    getNewsData();
  }, []);

  if (loading) return <div>Loading...</div>; // Loading state
  if (error) return <div>{error}</div>; // Error state

  // Function to strip HTML tags from a string
  const stripHtmlTags = (html) => {
    return html.replace(/<[^>]*>/g, ""); // Replace all HTML tags with an empty string
  };

  return (
    <section className="space min">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="sec_title position-relative text-center mb-4">
              <h6 className="theme-cl mb-0">Latest News</h6>
              <h2 className="ft-bold">Pickup New Updates</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {newsData.map((newsItem, index) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="gup_blg_grid_box">
                <div className="gup_blg_grid_thumb">
                  <a href={`blog-detail.html?id=${newsItem.id}`}>
                    <img
                      src={
                        newsItem.image || "https://via.placeholder.com/700x350"
                      }
                      className="img-fluid"
                      alt={newsItem.title}
                    />
                  </a>
                </div>
                <div className="gup_blg_grid_caption">
                  <div className="blg_tag">
                    <span>{newsItem.category || "General"}</span>
                  </div>
                  <div className="blg_title">
                    <h4>
                      <a href={`blog-detail.html?id=${newsItem.id}`}>
                        {newsItem.title}
                      </a>
                    </h4>
                  </div>
                  <div className="blg_desc">
                    <p>{stripHtmlTags(newsItem.description)}</p>{" "}
                    {/* Stripping HTML tags */}
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
                                newsItem.organization?.logo ||
                                "/path/to/default-logo.png"
                              }
                              className="img-fluid circle"
                              width="35"
                              alt={newsItem.title || "Author logo"}
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
                              {newsItem.views || "0"} Views
                            </div>
                          </li>
                          <li>
                            <div className="elsio_ic">
                              <i className="fa fa-clock text-warning"></i>
                            </div>
                            <div className="elsio_tx">
                              {newsItem.date || "N/A"}
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

export default LatestNews;
