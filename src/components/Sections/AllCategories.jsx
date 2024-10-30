// components/AllCategories.js
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const AllCategories = () => {
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
      title: "Shopping",
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
    {
      cities: "12 Cities",
      icon: "fas fa-laptop",
      title: "Tech Support",
      listings: 89,
    },
    {
      cities: "11 Cities",
      icon: "fas fa-music",
      title: "Music Lessons",
      listings: 54,
    },
    {
      cities: "13 Cities",
      icon: "fas fa-paint-brush",
      title: "Creative Services",
      listings: 120,
    },
    {
      cities: "15 Cities",
      icon: "fas fa-bicycle",
      title: "Fitness Training",
      listings: 65,
    },
    {
      cities: "09 Cities",
      icon: "fas fa-broom",
      title: "Cleaning Services",
      listings: 150,
    },
    {
      cities: "20 Cities",
      icon: "fas fa-handshake",
      title: "Consulting",
      listings: 95,
    },
    {
      cities: "03 Cities",
      icon: "fas fa-camera",
      title: "Photography",
      listings: 80,
    },
    {
      cities: "14 Cities",
      icon: "fas fa-hiking",
      title: "Outdoor Activities",
      listings: 72,
    },
    {
      cities: "22 Cities",
      icon: "fas fa-bus",
      title: "Transportation",
      listings: 50,
    },
    {
      cities: "23 Cities",
      icon: "fas fa-child",
      title: "Child Care",
      listings: 37,
    },
    {
      cities: "16 Cities",
      icon: "fas fa-guitar",
      title: "Musical Instruments",
      listings: 44,
    },
    {
      cities: "04 Cities",
      icon: "fas fa-warehouse",
      title: "Storage",
      listings: 19,
    },
    {
      cities: "01 City",
      icon: "fas fa-gamepad",
      title: "Gaming",
      listings: 33,
    },
    {
      cities: "02 Cities",
      icon: "fas fa-hospital",
      title: "Healthcare",
      listings: 110,
    },
    {
      cities: "11 Cities",
      icon: "fas fa-television",
      title: "Television Services",
      listings: 29,
    },
    {
      cities: "06 Cities",
      icon: "fas fa-car",
      title: "Auto Repair",
      listings: 22,
    },
    {
      cities: "03 Cities",
      icon: "fas fa-shoe-prints",
      title: "Footwear",
      listings: 16,
    },
    {
      cities: "05 Cities",
      icon: "fas fa-heart",
      title: "Wellness",
      listings: 73,
    },
    {
      cities: "08 Cities",
      icon: "fas fa-balance-scale",
      title: "Legal Services",
      listings: 61,
    },
    {
      cities: "12 Cities",
      icon: "fas fa-stamp",
      title: "Crafting",
      listings: 26,
    },
    {
      cities: "09 Cities",
      icon: "fas fa-paw",
      title: "Pet Care",
      listings: 88,
    },
    {
      cities: "10 Cities",
      icon: "fas fa-bicycle",
      title: "Biking",
      listings: 43,
    },
    {
      cities: "02 Cities",
      icon: "fas fa-cutlery",
      title: "Catering",
      listings: 50,
    },
    {
      cities: "18 Cities",
      icon: "fas fa-shopping-cart",
      title: "Retail",
      listings: 39,
    },
    {
      cities: "05 Cities",
      icon: "fas fa-basketball-ball",
      title: "Sports",
      listings: 31,
    },
    {
      cities: "11 Cities",
      icon: "fas fa-paint-roller",
      title: "Interior Design",
      listings: 71,
    },
    {
      cities: "07 Cities",
      icon: "fas fa-broom",
      title: "Janitorial Services",
      listings: 24,
    },
    {
      cities: "14 Cities",
      icon: "fas fa-book",
      title: "Bookkeeping",
      listings: 57,
    },
    {
      cities: "20 Cities",
      icon: "fas fa-bullhorn",
      title: "Marketing",
      listings: 86,
    },
    {
      cities: "15 Cities",
      icon: "fas fa-calendar-alt",
      title: "Event Services",
      listings: 42,
    },
    {
      cities: "13 Cities",
      icon: "fas fa-pencil-alt",
      title: "Tutoring",
      listings: 99,
    },
    {
      cities: "09 Cities",
      icon: "fas fa-truck",
      title: "Logistics",
      listings: 74,
    },
    {
      cities: "06 Cities",
      icon: "fas fa-gift",
      title: "Gifts & Souvenirs",
      listings: 35,
    },
    {
      cities: "03 Cities",
      icon: "fas fa-wrench",
      title: "Handyman",
      listings: 65,
    },
    {
      cities: "02 Cities",
      icon: "fas fa-users",
      title: "Networking",
      listings: 30,
    },
    {
      cities: "01 City",
      icon: "fas fa-chalkboard-teacher",
      title: "Education Services",
      listings: 49,
    },

  ];

  return (
    <section className="space min gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <h2 className="ft-bold mb-4 text-center">
              Explore FMCG Categories
            </h2>
            <div className="sec_title position-relative text-center mb-5">
              <h6 className="mb-0 theme-cl">
                Discover the Best Brands and Products at Your Fingertips
              </h6>
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
      </div>
    </section>
  );
};

export default AllCategories;
