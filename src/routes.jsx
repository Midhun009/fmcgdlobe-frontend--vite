// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutBreadcrbms from "./Pages/About";
import FAQ from "./Pages/FAQs";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/TermsConditions";
import Insights from "./Pages/Insights"; 
import InsightDetail from "./Pages/InsightDetail"; 
import ContactPage from "./Pages/ContactPage";
import AddListing from "./Pages/AddListing";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutBreadcrbms />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsConditions />} />
      <Route path="/insights" element={<Insights />} /> 
      <Route path="/blog/:id" element={<InsightDetail />} />{" "}
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/add-listing" element={<AddListing />} />

    
    </Routes>
  );
};

export default RoutesComponent;
