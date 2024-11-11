import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { fetchInsightBySlug } from "../Api/insightDetailApi";
import SubscribeSection from "../components/Sections/SubscribeSection";

const InsightDetail = () => {
  const { slug } = useParams(); 
  const [blogDetail, setBlogDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const stripHtmlTags = (str) => {
  const doc = new DOMParser().parseFromString(str, "text/html");
  return doc.body.textContent || "";
};
  
  useEffect(() => {
    const getInsightDetail = async () => {
      try {
        const data = await fetchInsightBySlug(slug); 
        setBlogDetail(data);
      } catch (err) {
        setError("Failed to load insight details");
      } finally {
        setLoading(false);
      }
    };

    getInsightDetail();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!blogDetail) return <div>No detail found</div>;

  const breadcrumbItems = [
    { label: "Home", path: "/", active: false },
    { label: "Insights", path: "/insights", active: false },
    { label: blogDetail.title, path: `/insights/${slug}`, active: true },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <section>
        <div className="container">
          <div className="row">
            {/* Blog Detail */}
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="article_detail_wrapss single_article_wrap format-standard">
                <div className="article_body_wrap">
                  {/* Featured Image */}
                  <div className="article_featured_image">
                    <img
                      className="img-fluid"
                      src={
                        blogDetail.image ||
                        "https://via.placeholder.com/700x350"
                      }
                      style={{
                        width: "700px",
                        height: "350px",
                        objectFit: "cover",
                      }}
                      alt="Featured"
                    />
                  </div>

                  {/* Article Info */}
                  <div className="article_top_info">
                    <ul className="article_middle_info">
                      <li>
                        <a href="#">
                          <span className="icons">
                            <i className="ti-user"></i>
                          </span>
                          by{" "}
                          {blogDetail.organization?.company_name ||
                            "Author Name"}
                        </a>
                      </li>
                      {/* <li>
                        <a href="#">
                          <span className="icons">
                            <i className="ti-comment-alt"></i>
                          </span>
                          {blogDetail.comments_count} Comments
                        </a>
                      </li> */}
                    </ul>
                  </div>

                  {/* Post Title */}
                  <h2 className="post-title">{blogDetail.title}</h2>

                  {/* Post Content */}
                  <p>{stripHtmlTags(blogDetail.description)}</p>
                  {/* Blockquote */}
                  <blockquote>
                    <span className="icon">
                      <i className="fas fa-quote-left"></i>
                    </span>

                    <h5 className="name mt-3">
                      - {blogDetail.organization?.company_name || "Author Name"}
                    </h5>
                  </blockquote>
                </div>
              </div>

              {/* Author Detail */}
              <div className="article_detail_wrapss single_article_wrap format-standard">
                <div className="article_posts_thumb">
                  <span className="img">
                    <img
                      className="img-fluid"
                      src={
                        blogDetail.organization?.logo ||
                        "https://via.placeholder.com/500x500"
                      }
                      style={{ height: "100px", width: "100px" }}
                      alt="Author"
                    />
                  </span>
                  <h3 className="pa-name">
                    {blogDetail.organization?.company_name || "Author Name"}
                  </h3>
                  <ul className="social-links">
                    <li>
                      <a
                        href={blogDetail.organization?.facebook || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href={blogDetail.organization?.twitter || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href={blogDetail.organization?.behance || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-behance"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href={blogDetail.organization?.youtube || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href={blogDetail.organization?.linkedin || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>

                  <p className="pa-text">{blogDetail.author_bio}</p>
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
                        alt="Post Thumbnail"
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

      <SubscribeSection />
    </>
  );
};

export default InsightDetail;
