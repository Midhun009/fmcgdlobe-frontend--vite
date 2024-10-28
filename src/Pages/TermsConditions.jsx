import React from "react";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import SubscribeSection from "../components/Sections/SubscribeSection";

const TermsConditions = () => {
    const termsContent = [
      
    "Welcome to FMCG GLOBE! By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions.",
    "1. **Acceptance of Terms:** By accessing the website [FMCG GLOBE URL] and using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.",
    "2. **Services Offered:** FMCG GLOBE provides a one-stop online platform for FMCG-related needs, offering industry insights and news, product listings, and advertising solutions.",
    "3. **User Responsibilities:** Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.",
    "4. **Content Ownership:** All content provided on FMCG GLOBE is the property of FMCG GLOBE or its content suppliers and is protected by copyright laws.",
    "5. **Product Listings:** Users can list their products on our platform. By submitting product information, users grant FMCG GLOBE the right to use, display, and distribute that content.",
   
  ];

  return (
    <div className="terms-conditions">
      <PrivacyPolicy title="Terms and Conditions" content={termsContent} />
      <SubscribeSection />
      <style jsx>{`
        .terms-conditions {
          padding: 20px;
          border-radius: 8px;
        }
        .terms-conditions h2 {
          margin-bottom: 20px;
        }
        .terms-conditions p {
          line-height: 1.6;
        }
          
      `}</style>
    </div>
  );
};

export default TermsConditions;
