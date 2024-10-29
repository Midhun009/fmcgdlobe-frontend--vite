// src/components/RecommendedReviews.js
import React from "react";

const RecommendedReviews = () => {
  return (
    <div className="bg-white rounded mb-4">
      <div className="jbd-01 px-4 py-4">
        <div className="jbd-details mb-4">
          <h5 className="ft-bold fs-lg">Recommended Reviews</h5>
          <div className="reviews-comments-wrap">
            <div className="reviews-comments-item">
              <div className="review-comments-avatar">
                <img
                  src="https://via.placeholder.com/500x500"
                  className="img-fluid"
                  alt="User Avatar"
                />
              </div>
              <div className="reviews-comments-item-text">
                <h4>
                  <a href="#">Kayla E. Claxton</a>
                  <span className="reviews-comments-item-date">
                    <i className="ti-calendar theme-cl me-1"></i>27 Oct 2019
                  </span>
                </h4>
                <span className="agd-location">
                  <i className="lni lni-map-marker me-1"></i>San Francisco, USA
                </span>
                <div className="listing-rating high">
                  <i className="fas fa-star active"></i>
                  <i className="fas fa-star active"></i>
                  <i className="fas fa-star active"></i>
                  <i className="fas fa-star active"></i>
                  <i className="fas fa-star active"></i>
                </div>
                <div className="clearfix"></div>
                <p>
                  " Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident. "
                </p>
                <div className="pull-left reviews-reaction">
                  <a href="#" className="comment-like active">
                    <i className="ti-thumb-up"></i> 12
                  </a>
                  <a href="#" className="comment-dislike active">
                    <i className="ti-thumb-down"></i> 1
                  </a>
                  <a href="#" className="comment-love active">
                    <i className="ti-heart"></i> 07
                  </a>
                </div>
              </div>
            </div>
            {/* Add more reviews as needed */}
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span className="fas fa-arrow-circle-right"></span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  18
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span className="fas fa-arrow-circle-right"></span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedReviews;
