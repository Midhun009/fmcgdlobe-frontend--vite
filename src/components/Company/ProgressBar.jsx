import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faBuilding,
  faShoppingBag,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./Progress.css"; // Ensure your CSS file reflects the changes

const ProgressBar = ({ currentStep }) => {
  const steps = [
    { label: "Contact Information", icon: faPhone },
    { label: "Company Information", icon: faBuilding },
    { label: "List Product & Services", icon: faShoppingBag },
    { label: "Register & Submit", icon: faCheckCircle },
  ];

  return (
    <div className="progress-container">
      <div className="progress-bar">
        {steps.map((step, index) => (
          <div key={index} className="step-container">
            {/* Only render the line if it's not the last step */}
            {index > 0 && (
              <div
                className={`line ${index <= currentStep ? "active" : ""}`}
              ></div>
            )}

            {/* Step icon and label */}
            <div
              className={`icon-container ${
                index <= currentStep ? "active" : ""
              }`}
            >
              <FontAwesomeIcon icon={step.icon} className="icon" />
            </div>

            <p
              className={`step-label ${index === currentStep ? "active" : ""}`}
            >
              {step.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
