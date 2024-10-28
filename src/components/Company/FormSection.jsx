import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Company.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import CompanyFooter from "./CompanyFooter";
import ProgressBar from "./ProgressBar"; 

const FormSection = ({ currentStep }) => {
  const [form, setForm] = useState({
    contactPersonName: "",
    companyName: "",
    email: "",
    mobile: "",
    companyEmail: "",
    companyMobile: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-section">
      <ProgressBar currentStep={currentStep} />
      <div className="row">
        {/* Row 1 */}
        <div className="col-lg-3 col-md-4 col-sm-12">
          <label>Contact Person Name *</label>
          <input
            type="text"
            name="contactPersonName"
            placeholder="Contact Person Name "
            value={form.contactPersonName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12">
          <label>Mobile *</label>
          <PhoneInput
            country={"ae"}
            value={form.mobile}
            onChange={(mobile) => setForm({ ...form, mobile })}
            inputStyle={{
              padding: "0px 45px",
              width: "100%",
            }}
          />
        </div>
      </div>
      <div className="row">
        {/* Row 2 */}
        <div className="col-lg-3 col-md-4 col-sm-12">
          <label>Company Name *</label>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name "
            value={form.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12">
          <label>Company Email *</label>
          <input
            type="email"
            name="companyEmail"
            placeholder="Email address"
            value={form.companyEmail}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12">
          <label>Company Mobile *</label>
          <PhoneInput
            country={"ae"}
            value={form.companyMobile}
            onChange={(companyMobile) => setForm({ ...form, companyMobile })}
            inputStyle={{
              padding: "0px 45px",
              width: "100%",
            }}
            className="phone-input"
          />
        </div>
      </div>

      <div className="button-container">
        <button type="submit" className="next-button">
          Next <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </button>
      </div>

      {/* <CompanyFooter /> */}
    </div>
  );
};

export default FormSection;
