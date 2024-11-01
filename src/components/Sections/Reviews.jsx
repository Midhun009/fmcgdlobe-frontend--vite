import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { fetchReviewsData } from "../../Api/reviewsApi"; // Adjust the import based on your file structure

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviewsData = async () => {
      try {
        const data = await fetchReviewsData(); // Fetching data from your API
        setReviewsData(data); // Setting the reviews data
        setLoading(false); // Updating loading state
      } catch (error) {
        setError("Failed to load reviews"); // Error handling
        setLoading(false);
      }
    };

    getReviewsData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  if (loading) return <div>Loading...</div>; // Loading state
  if (error) return <div>{error}</div>; // Error state

  return (
    <section className="space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="sec_title position-relative text-center mb-5">
              <h6 className="text-muted mb-0">Our Reviews</h6>
              <h2 className="ft-bold">
                What Our Customer <span className="theme-cl">Saying</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <Slider {...settings}>
              {reviewsData.map((review, index) => (
                <div className="single-list" key={index}>
                  <div className="single_review">
                    <div className="sng_rev_thumb">
                      <figure>
                        <img
                          src={review.image}
                          className="img-fluid circle"
                          alt={review.name}
                        />
                      </figure>
                    </div>
                    <div className="rev_author">
                      <h4 className="mb-0 fs-md ft-medium">{review.name}</h4>
                      <span className="fs-sm theme-cl">{review.title}</span>
                    </div>
                    <div className="sng_rev_caption text-center">
                      <div className="rev_desc mb-4">
                        <p>{review.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
