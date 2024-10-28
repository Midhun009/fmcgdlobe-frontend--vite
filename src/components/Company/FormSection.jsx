import React, { useState } from "react";
import Page1 from "./ListingPages/Page1";
import Page2 from "./ListingPages/Page2";
import Page3 from "./ListingPages/Page3";
import Page4 from "./ListingPages/Page4";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProgressBar from "./ProgressBar";
import './Company.css'

const FormSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (phone, name) => {
    setFormData({ ...formData, [name]: phone });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleNext = (e) => {
    e.preventDefault(); 
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <form className="form-section" onSubmit={handleNext}>
      <ProgressBar currentStep={currentStep} />

      {currentStep === 0 && (
        <Page1
          form={formData}
          handleChange={handleChange}
          handlePhoneChange={handlePhoneChange}
        />
      )}

      {currentStep === 1 && (
        <Page2
          form={formData}
          handleChange={handleChange}
          handlePhoneChange={handlePhoneChange}
          handleFileChange={handleFileChange}
        />
      )}

      {currentStep === 2 && (
        <Page3 form={formData} handleChange={handleChange} />
      )}

      {currentStep === 3 && (
        <Page4 form={formData} handleChange={handleChange} />
      )}

      <div className="button-container">
        {currentStep > 0 && (
          <button
            type="button"
            className="prev-button next-button" // Apply the same class as the Next button
            onClick={handlePrevious}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" />
            Previous
          </button>
        )}{" "}
        &nbsp;&nbsp;&nbsp;
        <button type="submit" className="next-button">
          {currentStep === 3 ? "Submit" : "Next"}{" "}
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </button>
      </div>
    </form>
  );
};

export default FormSection;
