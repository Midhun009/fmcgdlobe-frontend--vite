// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AllCategories from "./Pages/Categories";
import AboutBreadcrbms from "./Pages/About";
import FAQ from "./Pages/FAQs";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/TermsConditions";
import Insights from "./Pages/Insights";
import InsightDetail from "./Pages/InsightDetail";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";
import ContactPage from "./Pages/ContactPage";
import AddListing from "./Pages/AddListing";
import Dashboard from "./Pages/Dashboard";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/all-categories" element={<AllCategories />} />
      <Route path="about" element={<AboutBreadcrbms />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsConditions />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/insights/:slug" element={<InsightDetail />} />{" "}
      {/* Updated line */}
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/add-listing" element={<AddListing />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default RoutesComponent;
