import React from "react";
import PhoneInput from "react-phone-input-2";
import Select from "react-select"; // Import react-select
import { CountryDropdown, RegionDropdown } from "react-country-region-selector"; // Import country and region selector

const Page2 = ({ form, handleChange, handleFileChange }) => {

     const dropdownStyles = {
       padding: "16px",
       border: "1px solid #ccc",
       borderRadius: "4px",
       fontSize: "14px",
       width: "100%",
       transition: "border-color 0.3s",
    };
    
  return (
    <div className="row">
      {/* Company Information Fields */}
      <div className="col-lg-4 col-md-6 col-sm-12">
        <label>Company Fax</label>
        <input
          type="text"
          name="companyFax"
          placeholder="Company Fax"
          value={form.companyFax || ""}
          onChange={handleChange}
        />
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <label>Company WhatsApp</label>
        <PhoneInput
          country={"ae"}
          value={form.companyWhatsApp}
          onChange={(companyWhatsApp) =>
            handleChange({
              target: { name: "companyWhatsApp", value: companyWhatsApp },
            })
          }
          inputStyle={{
            padding: "0px 45px",
            width: "100%",
          }}
        />
      </div>

      <div className="col-lg-12 col-md-6 col-sm-12">
        <label>Company Description</label>
        <textarea
          name="companyDescription"
          placeholder="Describe your company"
          value={form.companyDescription || ""}
          onChange={handleChange}
          rows={4}
          style={{ width: "100%" }}
        />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label>Logo Upload</label>
        <input type="file" name="logo" onChange={handleFileChange} />
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <label>Banner Upload</label>
        <input type="file" name="banner" onChange={handleFileChange} />
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <label>Brochure Upload</label>
        <input type="file" name="brochure" onChange={handleFileChange} />
      </div>

      {/* Address Fields */}
      <div className="col-lg-3 col-md-6 col-sm-12">
        <label>Address</label>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address || ""}
          onChange={handleChange}
        />
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <label>Building No</label>
        <input
          type="text"
          name="buildingNo"
          placeholder="Building No"
          value={form.buildingNo || ""}
          onChange={handleChange}
        />
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <label>Street</label>
        <input
          type="text"
          name="street"
          placeholder="Street"
          value={form.street || ""}
          onChange={handleChange}
        />
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <label>Area</label>
        <input
          type="text"
          name="area"
          placeholder="Area"
          value={form.area || ""}
          onChange={handleChange}
        />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label>P.O. Box</label>
        <input
          type="text"
          name="poBox"
          placeholder="P.O. Box"
          value={form.poBox || ""}
          onChange={handleChange}
        />
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <label>City</label>
        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city || ""}
          onChange={handleChange}
        />
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <label>Country</label>
        <CountryDropdown
          value={form.country || ""}
          onChange={(val) =>
            handleChange({ target: { name: "country", value: val } })
          }
          style={dropdownStyles} // Apply styles here
        />
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <label>State</label>
        <RegionDropdown
          country={form.country}
          value={form.state || ""}
          onChange={(val) =>
            handleChange({ target: { name: "state", value: val } })
          }
          style={dropdownStyles} // Apply styles here
        />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label>ISO</label>
        <select
          name="iso"
          value={form.iso || ""}
          onChange={handleChange}
          style={dropdownStyles}
        >
          <option value="">Select ISO</option>
          {/* Replace with dynamic ISO options from your database */}
          <option value="iso1">ISO 1</option>
          <option value="iso2">ISO 2</option>
        </select>
          </div>
          
      <div className="col-lg-4 col-md-6 col-sm-12">
        <label>Website</label>
        <input
          type="url"
          name="website"
          placeholder="Website"
          value={form.website || ""}
          onChange={handleChange}
        />
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <label>Google Map URL</label>
        <input
          type="url"
          name="googleMapUrl"
          placeholder="Google Map URL"
          value={form.googleMapUrl || ""}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Page2;
