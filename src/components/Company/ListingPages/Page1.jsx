import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Page1 = ({ form, handleChange, handlePhoneChange }) => {
  return (
    <div className="row">
      {/* Contact Information Fields */}
      <div className="col-lg-4 col-md-6 col-sm-12">
        <label>Contact Person Name *</label>
        <input
          type="text"
          name="contactPersonName"
          placeholder="Contact Person Name"
          value={form.contactPersonName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
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

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label>Mobile *</label>
        <PhoneInput
          country={"ae"}
          value={form.mobile}
          onChange={handlePhoneChange}
          inputStyle={{
            padding: "0px 45px",
            width: "100%",
          }}
        />
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <label>Company Name *</label>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={form.companyName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <label>Company Email *</label>
        <input
          type="email"
          name="companyEmail"
          placeholder="Company Email"
          value={form.companyEmail}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label>Company Mobile *</label>
        <PhoneInput
          country={"ae"}
          value={form.companyMobile}
          onChange={(companyMobile) =>
            handlePhoneChange(companyMobile, "companyMobile")
          }
          inputStyle={{
            padding: "0px 45px",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default Page1;
