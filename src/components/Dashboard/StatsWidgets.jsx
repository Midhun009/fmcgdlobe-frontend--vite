// eslint-disable-next-line no-unused-vars
import React from "react";

const StatsWidgets = () => {
  const widgetsData = [
    {
      count: "2615",
      label: "Views Listing",
      bgColor: "bg-primary",
      iconClass: "lni lni-eye", // Icon class for view
    },
    {
      count: "312",
      label: "Total Reviews",
      bgColor: "bg-success",
      iconClass: "lni lni-comments", // Icon class for reviews
    },
    {
      count: "410",
      label: "Total Bookings",
      bgColor: "bg-info",
      iconClass: "lni lni-calendar", // Icon class for bookings
    },
    {
      count: "46",
      label: "Active Listings",
      bgColor: "bg-purple",
      iconClass: "lni lni-empty-file", // Icon class for active listings
    },
  ];

  return (
    <div className="row">
      {widgetsData.map((widget, index) => (
        <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-4">
          <div
            className={`dsd-boxed-widget py-5 px-4 ${widget.bgColor} rounded`}
          >
            <h2 className="ft-medium mb-1 fs-xl text-light">{widget.count}</h2>
            <p className="text-light fs-md">{widget.label}</p>
            <i className={`${widget.iconClass} fs-2 text-light`}></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsWidgets;
