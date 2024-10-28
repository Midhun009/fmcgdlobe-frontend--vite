// eslint-disable-next-line no-unused-vars
import React from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import FAQ from "../components/Sections/FAQ";
import SubscribeSection from "../components/Sections/SubscribeSection";

const FAQs = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/", active: false },
    { label: "FAQs", path: "/faqs", active: true },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <FAQ />
      <SubscribeSection />
    </>
  );
};

export default FAQs;
