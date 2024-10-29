// eslint-disable-next-line no-unused-vars
import React from "react";
import DashboardNavigation from "../components/Dashboard/DashboardNavigation";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import StatsWidgets from "../components/Dashboard/StatsWidgets";
import Charts from "../components/Dashboard/Charts";
import RecentActivities from "../components/Dashboard/RecentActivities";
import AlertMessage from "../components/Dashboard/AlertMessage";


const Dashboard = () => {
    return (
      <>
        <DashboardHeader />
        <div className="goodup-dashboard-wrap gray px-4 py-5">
          <DashboardNavigation />
          <div className="goodup-dashboard-content">
          <AlertMessage />
            <StatsWidgets />
            <Charts />
            <div className="row">
              <RecentActivities />
             
            </div>
          
          </div>
        </div>
      </>
    );
};

export default Dashboard;
