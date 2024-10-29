// eslint-disable-next-line no-unused-vars
import React from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import AboutSection from "../components/About/AboutSection";
import TeamSection from "../components/About/TeamSection";
import WorkingProcessSection from "../components/About/WorkingProcessSection";
import LatestNews from "../components/Sections/LatestNews";
import SubscribeSection from "../components/Sections/SubscribeSection";

const AboutBreadcrbms = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/", active: false },
    { label: "About Us", path: "/about", active: true },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <AboutSection />
      <WorkingProcessSection />
      <TeamSection />
      <LatestNews />
      <SubscribeSection />
    </>
  );
};

export default AboutBreadcrbms;
