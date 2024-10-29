import React from "react";

const ReviewForm = () => {
  return (
    <div className="bg-white rounded mb-4">
      <div className="jbd-01 px-4 py-4">
        <div className="jbd-details mb-4">
          <h5 className="ft-bold fs-lg">Drop Your Review</h5>
          <div className="review-form-box form-submit mt-3">
            <form>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group mb-3">
                    <label className="ft-medium small mb-1">Choose Rate</label>
                    <select className="form-control rounded">
                      <option>Choose Rating</option>
                      <option>1 Star</option>
                      <option>2 Star</option>
                      <option>3 Star</option>
                      <option>4 Star</option>
                      <option>5 Star</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-3">
                    <label className="ft-medium small mb-1">Name</label>
                    <input
                      className="form-control rounded"
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-3">
                    <label className="ft-medium small mb-1">Email</label>
                    <input
                      className="form-control rounded"
                      type="email"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mb-3">
                    <label className="ft-medium small mb-1">Review</label>
                    <textarea
                      className="form-control rounded ht-140"
                      placeholder="Review"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn theme-bg text-light rounded"
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
