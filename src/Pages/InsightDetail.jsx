// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { fetchInsightBySlug } from "../Api/insightDetailApi"; // Import your API function

const InsightDetail = () => {
  const { slug } = useParams(); // Capture the slug from URL parameters
  const [blogDetail, setBlogDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getInsightDetail = async () => {
      try {
        const data = await fetchInsightBySlug(slug); // Fetch insight data based on slug
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
                  <div className="article_featured_image">
                    <img
                      className="img-fluid"
                      src={
                        blogDetail.image ||
                        "https://via.placeholder.com/700x350"
                      }
                      alt="Featured"
                    />
                  </div>

                  <h2 className="post-title">{blogDetail.title}</h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: blogDetail.description }}
                  />

                  {/* Organization Details */}
                  <div className="organization-details">
                    <h3>Organization Details</h3>
                    <img
                      src={blogDetail.organization.logo}
                      alt={`${blogDetail.organization.company_name} Logo`}
                      style={{ maxWidth: "100px" }} // Set a max width for logo
                    />
                    <p>
                      <strong>Name:</strong>{" "}
                      {blogDetail.organization.company_name}
                    </p>
                    <p>
                      <strong>Email:</strong>{" "}
                      {blogDetail.organization.company_email}
                    </p>
                    <p>
                      <strong>Phone:</strong>{" "}
                      {blogDetail.organization.company_mobile}
                    </p>
                    <p>
                      <strong>Address:</strong>{" "}
                      {blogDetail.organization.address},{" "}
                      {blogDetail.organization.city}
                    </p>
                    <p>
                      <strong>Description:</strong>{" "}
                      {blogDetail.organization.company_description}
                    </p>
                    <p>
                      <strong>Website:</strong>{" "}
                      <a
                        href={blogDetail.organization.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {blogDetail.organization.website}
                      </a>
                    </p>
                  </div>
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
