// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, useParams } from "react-router-dom";

const InsightDetail = () => {
  const { id } = useParams(); // Get the ID from the URL parameters

  // Sample updates data (in a real app, this might come from a state or API)
  const updates = [
    {
      title: "What Is a VPN and How Does It Work?",
      content: "Detailed content about VPNs...",
      author: "Mach K. Mortin",
      comments: 45,
      image: "https://via.placeholder.com/700x350",
      // Additional fields as needed
    },
    {
      title: "Understanding Cloud Computing",
      content: "An overview of cloud computing concepts...",
      author: "John Doe",
      comments: 30,
      image: "https://via.placeholder.com/700x350",
      // Additional fields as needed
    },
    // More updates...
  ];

  const blogDetail = updates[id]; // Fetch the relevant blog detail

  return (
    <>
      <section className="page-title gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="breadcrumbs-wrap">
                <h2 className="mb-0 ft-medium">{blogDetail.title}</h2>
                <nav className="transparent">
                  <ol className="breadcrumb p-0">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li
                      className="breadcrumb-item active theme-cl"
                      aria-current="page"
                    >
                      Blog Detail
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            {/* Blog Detail */}
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="article_detail_wrapss single_article_wrap format-standard">
                <div className="article_body_wrap">
                  <div className="article_featured_image">
                    <img
                      className="img-fluid"
                      src={blogDetail.image}
                      alt="Featured"
                    />
                  </div>

                  <div className="article_top_info">
                    <ul className="article_middle_info">
                      <li>
                        <Link to="#">
                          <span className="icons">
                            <i className="ti-user"></i>
                          </span>
                          by {blogDetail.author}
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icons">
                            <i className="ti-comment-alt"></i>
                          </span>
                          {blogDetail.comments} Comments
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <h2 className="post-title">{blogDetail.title}</h2>
                  <p>{blogDetail.content}</p>

                  {/* Additional paragraphs or content */}
                </div>
              </div>

              {/* Author Detail */}
              <div className="article_detail_wrapss single_article_wrap format-standard">
                <div className="article_posts_thumb">
                  <span className="img">
                    <img
                      className="img-fluid"
                      src="https://via.placeholder.com/500x500"
                      alt="Author"
                    />
                  </span>
                  <h3 className="pa-name">Rosalina William</h3>
                  <ul className="social-links">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-behance"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                  <p className="pa-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              {/* Categories */}
              <div className="single_widgets widget_category">
                <h4 className="title">Categories</h4>
                <ul>
                  <li>
                    <Link to="#">
                      Lifestyle <span>09</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Travel <span>12</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Fashion <span>19</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Branding <span>17</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Music <span>10</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Trending Posts */}
              <div className="single_widgets widget_thumb_post">
                <h4 className="title">Trending Posts</h4>
                <ul>
                  <li>
                    <span className="left">
                      <img
                        src="https://via.placeholder.com/700x350"
                        alt="Trending Post"
                      />
                    </span>
                    <span className="right">
                      <Link className="feed-title" to="#">
                        Top Hotels in California
                      </Link>
                      <span className="post-date">
                        <i className="ti-calendar"></i>10 Min ago
                      </span>
                    </span>
                  </li>
                  {/* Add more trending posts similarly */}
                </ul>
              </div>

              {/* Tags Cloud */}
              <div className="single_widgets widget_tags">
                <h4 className="title">Tags Cloud</h4>
                <ul>
                  <li>
                    <Link to="#">Lifestyle</Link>
                  </li>
                  <li>
                    <Link to="#">Travel</Link>
                  </li>
                  <li>
                    <Link to="#">Fashion</Link>
                  </li>
                  <li>
                    <Link to="#">Branding</Link>
                  </li>
                  <li>
                    <Link to="#">Music</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InsightDetail;
