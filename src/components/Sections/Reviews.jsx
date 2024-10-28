// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick"; 

const Reviews = () => {
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
        breakpoint: 768, // For mobile screens
        settings: {
          slidesToShow: 1, // Show 1 slide on screens smaller than 768px
        },
      },
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2, // Show 2 slides on screens between 768px and 1024px
        },
      },
      {
        breakpoint: 1200, // For larger screens
        settings: {
          slidesToShow: 3, // Show 3 slides on screens 1200px and up
        },
      },
    ],
  };

  const reviewsData = [
    {
      name: "Mark Jevenue",
      title: "CEO of Addle",
      image: "https://via.placeholder.com/500x500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua veniam esse cillum.",
    },
    {
      name: "Henna Bajaj",
      title: "Aqua Founder",
      image: "https://via.placeholder.com/500x500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua veniam esse cillum.",
    },
    {
      name: "John Cenna",
      title: "CEO of Plike",
      image: "https://via.placeholder.com/500x500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua velit esse cillum.",
    },
    {
      name: "Madhu Sharma",
      title: "Team Manager",
      image: "https://via.placeholder.com/500x500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboree voluptate velit esse cillum.",
    },
  ];

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
