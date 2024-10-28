// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";


const TopCities = () => {
  const cities = [
    {
      name: "New York",
      listings: 22,
      imgSrc: "/assets/img/l-1.webp",
    },
    {
      name: "San Diego",
      listings: 28,
      imgSrc: "/assets/img/l-1.webp",
    },
    {
      name: "Philadelphia",
      listings: 19,
      imgSrc: "/assets/img/l-1.webp",
    },
    {
      name: "San Francisco",
      listings: 35,
      imgSrc: "/assets/img/l-1.webp",
    },
    {
      name: "San Antonio",
      listings: 18,
      imgSrc: "/assets/img/l-1.webp",
    },
    {
      name: "Los Angeles",
      listings: 30,
      imgSrc: "/assets/img/l-1.webp",
    },
    {
      name: "Kansas City",
      listings: 25,
      imgSrc: "/assets/img/l-1.webp",
    },
    {
      name: "New Orleans",
      listings: 22,
      imgSrc: "/assets/img/l-1.webp",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="sec_title position-relative text-center mb-5">
              <h6 className="text-muted mb-0">Top Cities</h6>
              <h2 className="ft-bold">
                Explore By <span className="theme-cl">Locations</span>
              </h2>
            </div>
          </div>
        </div>

        <Slider {...settings} className="newlocationslider2">
          {cities.map((city, index) => (
            <div className="single-list" key={index}>
              <div className="locationWrapps">
                <div className="locationBody">
                  <img
                    src={city.imgSrc}
                    className="img-fluid"
                    alt={city.name}
                  />
                </div>
                <div className="capsText">
                  <h5 className="locationTitle">{city.name}</h5>
                  <span className="totalList">{city.listings} Listings</span>
                </div>
                <a href="#" className="locationLink"></a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TopCities;
