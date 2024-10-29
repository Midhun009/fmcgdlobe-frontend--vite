// components/OfferBox.js
import React from "react";

const AddBox = () => {
  const offers = [
    {
      title: "30% Off on Eat & Drink",
      subtitle: "Summer Sale",
      imgSrc: "https://via.placeholder.com/580x670",
      btnText: "View Offers",
      link: "#",
    },
    {
      title: "40% Off for Offices & Space",
      subtitle: "Delight Offer",
      imgSrc: "https://via.placeholder.com/580x670",
      btnText: "View Offers",
      link: "#",
      additionalClass: "offer-02", // additional class for styling
    },
  ];

  return (
    <section className="pt-4 pb-0">
      <div className="container">
        <div className="row justify-content-between g-4">
          {offers.map((offer, index) => (
            <div key={index} className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className={`offerWrap ${offer.additionalClass || ""}`}>
                <div className="offerCaps">
                  <span className="off">{offer.subtitle}</span>
                  <h4 className="title">{offer.title}</h4>
                  <a href={offer.link} className="btn btn-md btn-dark">
                    {offer.btnText}
                  </a>
                </div>
                <div className="slice">
                  <img src={offer.imgSrc} className="img" alt={offer.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
          </div>
          <br />
    </section>
  );
};

export default AddBox;
