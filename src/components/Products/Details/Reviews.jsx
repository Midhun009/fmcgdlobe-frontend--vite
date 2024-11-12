import React from "react";

const RecommendedReviews = ({ reviews }) => {
  if (reviews.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white rounded mb-4">
      <div className="jbd-01 px-4 py-4">
        <div className="jbd-details mb-4">
          <h5 className="ft-bold fs-lg">Recommended Reviews</h5>
          <div className="reviews-comments-wrap">
            {reviews.map((review) => (
              <div className="reviews-comments-item" key={review.id}>
                <div className="review-comments-avatar">
                  <img
                    src={
                      review.user?.avatar ||
                      "https://via.placeholder.com/500x500"
                    }
                    className="img-fluid"
                    alt="User Avatar"
                  />
                </div>
                <div className="reviews-comments-item-text">
                  <h4>
                    <a href="#">{review.user?.name || "Anonymous"}</a>
                    <span className="reviews-comments-item-date">
                      <i className="ti-calendar theme-cl me-1"></i>
                      {new Date(review.created).toLocaleDateString()}
                    </span>
                  </h4>
                  {/* <span className="agd-location">
                    <i className="lni lni-map-marker me-1"></i>
                    {review.user?.location || "Unknown Location"}
                  </span> */}
                  <div className="listing-rating high">
                    {[...Array(5)].map((_, index) => (
                      <i
                        key={index}
                        className={`fas fa-star ${
                          index < review.rating ? "active" : ""
                        }`}
                      ></i>
                    ))}
                  </div>
                  <div className="clearfix"></div>
                  <p>"{review.comment}"</p>
                  {/* <div className="pull-left reviews-reaction">
                    <a href="#" className="comment-like active">
                      <i className="ti-thumb-up"></i> {review.likes}
                    </a>
                    <a href="#" className="comment-dislike active">
                      <i className="ti-thumb-down"></i> {review.dislikes}
                    </a>
                    <a href="#" className="comment-love active">
                      <i className="ti-heart"></i> {review.loves}
                    </a>
                  </div> */}
                </div>
              </div>
            ))}
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span className="fas fa-arrow-circle-right"></span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              {/* Render pagination dynamically as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedReviews;
