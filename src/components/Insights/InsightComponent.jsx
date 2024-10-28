// eslint-disable-next-line no-unused-vars
import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const InsightComponent = () => {
  const updates = [
    {
      title: "What Is a VPN and How Does It Work?",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
      date: "10 July 2021",
      views: "10k Views",
      image: "https://via.placeholder.com/700x350",
      status: "Open",
      isFeatured: true,
    },
    {
      title: "Understanding Cloud Computing",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
      date: "10 July 2021",
      views: "10k Views",
      image: "https://via.placeholder.com/700x350",
      status: "Open",
      isFeatured: false,
    },
    {
      title: "What Is a VPN and How Does It Work?",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
      date: "10 July 2021",
      views: "10k Views",
      image: "https://via.placeholder.com/700x350",
      status: "Open",
      isFeatured: false,
    },

    // Add more updates as needed
  ];

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
                          className={`Goodup-status ${update.status.toLowerCase()} me-2`}
                        >
                          {update.status}
                        </div>
                        {update.isFeatured && (
                          <div className="Goodup-featured-tag">Featured</div>
                        )}
                      </div>
                      <div className="Goodup-grid-thumb">
                        <Link
                          to={`/blog/${index}`} // This links to the detail page for the specific update
                          className="d-block text-center m-auto"
                        >
                          <img
                            src={update.image}
                            className="img-fluid"
                            alt={update.title} // Ensure alt text is meaningful for accessibility
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="Goodup-grid-fl-wrap">
                      <div className="Goodup-caption px-3 py-2">
                        <div className="Goodup-cates">
                          <a href="search.html">Sports</a>
                        </div>
                        <div className="blg_title">
                          <h4>
                            <Link to={`/blog/${index}`}>{update.title}</Link>
                          </h4>
                        </div>
                        <div className="blg_desc">
                          <p>{update.description}</p>
                        </div>
                      </div>
                      <div className="crs_grid_foot">
                        <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-3">
                          <div className="crs_fl_first">
                            <div className="crs_tutor">
                              <div className="crs_tutor_thumb">
                                <a href="javascript:void(0);">
                                  <img
                                    src="https://via.placeholder.com/500x500"
                                    className="img-fluid circle"
                                    width="35"
                                    alt=""
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
                                  <div className="elsio_tx">{update.views}</div>
                                </li>
                                <li>
                                  <div className="elsio_ic">
                                    <i className="fa fa-clock text-warning"></i>
                                  </div>
                                  <div className="elsio_tx">{update.date}</div>
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
