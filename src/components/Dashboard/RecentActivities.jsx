import React from "react";

const RecentActivities = () => {
  // Sample recent activities data
  const activities = [
    {
      id: 1,
      description: "Created a new listing for Beach House",
      time: "Just now",
    },
    {
      id: 2,
      description: "Received a new review from Alice Johnson",
      time: "2 hours ago",
    },
    { id: 3, description: "Updated profile picture", time: "3 hours ago" },
    {
      id: 4,
      description: "Deleted a listing for Mountain Resort",
      time: "1 day ago",
    },
    { id: 5, description: "Sent a message to Mark Smith", time: "1 day ago" },
  ];

  return (
    <div className="col-lg-12 col-md-12">
      <div className="goodup-dashboard-grouping-list with-icons">
        <h4>Recent Activities</h4>
        <ul className="list-unstyled">
          {activities.map((activity) => (
            <li
              key={activity.id}
              className="d-flex align-items-center border-bottom py-2"
            >
              <i className="lni lni-checkmark-circle me-2"></i>{" "}
              {/* Icon for activity */}
              <div>
                <p className="mb-0">{activity.description}</p>
                <small className="text-muted">{activity.time}</small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentActivities;
