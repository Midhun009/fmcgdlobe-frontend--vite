// eslint-disable-next-line no-unused-vars
import React from 'react';
import InsightComponent from '../components/Insights/InsightComponent';
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const Insight = () => {

    const breadcrumbItems = [
      { label: "Home", path: "/", active: false },
      {
        label: "Insights",
        path: "/insights",
        active: true,
      },
  ];
  
    return (
      <div>
        <Breadcrumb items={breadcrumbItems} />
        <InsightComponent />
      </div>
    );
};

export default Insight;