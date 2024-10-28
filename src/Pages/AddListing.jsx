import React, { useState } from "react";
import ProgressBar from "../components/Company/ProgressBar";
import FormSection from "../components/Company/FormSection";

const AddListing = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    contactPersonName: "",
    companyName: "",
    email: "",
    mobile: "",
    companyEmail: "",
    companyMobile: "",
  });

  return (
    <div className="container">
      {" "}
      {/* Add container for styling */}
      <h2
        className="ft-medium mb-4 text-center"
        style={{ marginTop: "20px", fontWeight: "bold" }}
      >
        List Your Company
      </h2>
      <FormSection
        currentStep={currentStep}
        formData={formData}
        setFormData={setFormData}
          />
          <br /><br />
    </div>
  );
};

export default AddListing;
