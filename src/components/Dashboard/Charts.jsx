// eslint-disable-next-line no-unused-vars
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Charts = () => {
  const options = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
    },
    title: {
      text: "Views Histogram",
      style: {
        color: "#fff",
      },
    },
    xAxis: {
      categories: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ],
      title: {
        text: "Months",
        style: {
          color: "#fff",
        },
      },
      labels: {
        style: {
          color: "#fff",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Number of Views",
        style: {
          color: "#fff",
        },
      },
      labels: {
        style: {
          color: "#fff",
        },
      },
    },
    series: [
      {
        name: "Views",
        data: [2615, 312, 410, 300, 450, 600, 700],
        color: "#66c2a5",
      },
    ],
    tooltip: {
      shared: true,
      useHTML: true,
      headerFormat: "<strong>{point.x}</strong><br/>",
      pointFormat: "{series.name}: <b>{point.y}</b><br/>",
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          color: "#fff",
        },
      },
    },
    credits: {
      enabled: false,
    },
  };

  // Sample followers data with name, place, and image
  const followers = [
    {
      name: "Alice Johnson",
      place: "New York",
      profilePic: "https://via.placeholder.com/30",
    },
    {
      name: "Mark Smith",
      place: "Los Angeles",
      profilePic: "https://via.placeholder.com/30",
    },
    {
      name: "Samantha Brown",
      place: "Chicago",
      profilePic: "https://via.placeholder.com/30",
    },
    {
      name: "John Doe",
      place: "Houston",
      profilePic: "https://via.placeholder.com/30",
    },
    {
      name: "Emma Wilson",
      place: "Miami",
      profilePic: "https://via.placeholder.com/30",
    },
    {
      name: "Michael Davis",
      place: "Dallas",
      profilePic: "https://via.placeholder.com/30",
    },
    {
      name: "Sarah Taylor",
      place: "San Francisco",
      profilePic: "https://via.placeholder.com/30",
    }
  ];

  return (
    <div className="row">
      <div className="col-md-8 col-sm-12">
        <div className="dash-card">
          <div className="dash-card-header">
            <h4 className="mb-0">View Chart</h4>
          </div>
          <div className="dash-card-body">
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="dash-card">
          <div className="dash-card-header">
            <h4>Followers</h4>
          </div>
          <div className="ground-list ground-hover-list">
            {followers.map((follower, index) => (
              <div
                key={index}
                className="d-flex align-items-center p-2 border-bottom"
              >
                <img
                  src={follower.profilePic}
                  alt={follower.name}
                  className="rounded-circle me-2"
                />
                <div>
                  <h6 className="mb-0 text-dark">{follower.name}</h6>
                  <small className="text-muted">{follower.place}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
