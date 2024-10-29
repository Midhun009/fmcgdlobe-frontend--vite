
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const PopularCategories = () => {
  const categories = [
    {
      cities: "07 Cities",
      icon: "fas fa-stethoscope",
      title: "Dentists",
      listings: 607,
    },
    {
      cities: "17 Cities",
      icon: "fas fa-building",
      title: "IT & Banking",
      listings: 76,
    },
    {
      cities: "19 Cities",
      icon: "fas fa-shopping-basket",
      title: "Shoppings",
      listings: 112,
    },
    {
      cities: "32 Cities",
      icon: "fas fa-screwdriver",
      title: "Home Services",
      listings: 322,
    },
    {
      cities: "27 Cities",
      icon: "fas fa-basketball-ball",
      title: "Active Life",
      listings: 161,
    },
    {
      cities: "26 Cities",
      icon: "fas fa-utensils",
      title: "Restaurants",
      listings: 172,
    },
    {
      cities: "10 Cities",
      icon: "fas fa-book-open",
      title: "Education",
      listings: 144,
    },
    {
      cities: "24 Cities",
      icon: "fas fa-house-damage",
      title: "Real Estate",
      listings: 210,
    },
    {
      cities: "18 Cities",
      icon: "fas fa-wine-glass",
      title: "Event Planning",
      listings: 241,
    },
    {
      cities: "06 Cities",
      icon: "fas fa-car-alt",
      title: "Automotive",
      listings: 52,
    },
    {
      cities: "08 Cities",
      icon: "fas fa-pencil-ruler",
      title: "Art & Design",
      listings: 97,
    },
    {
      cities: "05 Cities",
      icon: "fas fa-plane",
      title: "Hotel & Travel",
      listings: 42,
    },
  ];

  return (
    <section className="space min gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="sec_title position-relative text-center mb-5">
              <h6 className="mb-0 theme-cl">Popular Categories</h6>
              <h2 className="ft-bold">Browse Top Categories</h2>
            </div>
          </div>
        </div>

        {/* row */}
        <div className="row align-items-center">
          {categories.map((category, index) => (
            <div
              key={index}
              className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6"
            >
              <div className="cats-wrap text-center">
                <Link to="/listing-search-v1" className="Goodup-catg-wrap">
                  <div className="Goodup-catg-city">{category.cities}</div>
                  <div className="Goodup-catg-icon">
                    <i className={category.icon}></i>
                  </div>
                  <div className="Goodup-catg-caption">
                    <h4 className="fs-md mb-0 ft-medium m-catrio">
                      {category.title}
                    </h4>
                    <span className="text-muted">
                      {category.listings} Listings
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center ">
          <Link to="/all-categories">
            <Button variant="danger" className="rounded">
              View More
            </Button>
          </Link>
        </div>

        {/* row */}
      </div>
    </section>
  );
};

export default PopularCategories;
