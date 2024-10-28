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

  const handleNext = () => {
    // Move to the next step if it's not the last one
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="container">
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
        handleNext={handleNext} // Pass down the handleNext function
      />
      <br />
      <br />
    </div>
  );
};

export default AddListing;
