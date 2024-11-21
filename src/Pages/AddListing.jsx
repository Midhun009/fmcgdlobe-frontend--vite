import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPricingData } from "../api/pricingApi";
import ProgressBar from "../components/Company/ProgressBar";
import FormSection from "../components/Company/FormSection";

const AddListing = () => {
  const { packageId } = useParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    contactPersonName: "",
    companyName: "",
    email: "",
    mobile: "",
    companyEmail: "",
    companyMobile: "",
  });

  const [packageData, setPackageData] = useState(null);

  // Fetch all packages and find the one that matches packageId
  useEffect(() => {
    const getPackageData = async () => {
      try {
        const packages = await fetchPricingData(); // Fetching all packages
        const selectedPackage = packages.find(
          (pkg) => pkg.id === parseInt(packageId)
        ); // Find package by ID
        setPackageData(selectedPackage); // Set package data to state
      } catch (error) {
        console.error("Failed to fetch package data:", error);
      }
    };

    getPackageData();
  }, [packageId]);

  const handleNext = () => {
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

      {packageData && (
        <div className="alert alert-info text-center">
          <strong>Selected Package: </strong>
          {packageData.name} - ${packageData.price}
        </div>
      )}

      <FormSection
        currentStep={currentStep}
        formData={formData}
        setFormData={setFormData}
        handleNext={handleNext}
      />

      <br />
      <br />
      <br />
    </div>
  );
};

export default AddListing;
