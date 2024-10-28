import React from "react";

const Page4 = ({ form, handleChange }) => {
  return (
    <div className="row">
      {/* User Login Information */}
      <div className="col-lg-4 col-md-6 col-sm-12">
        <label>User Login ID *</label>
        <input
          type="email"
          name="userLoginId"
          placeholder="example@email.com"
          value={form.userLoginId || ""}
          onChange={handleChange}
          required
          style={{
            padding: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "14px",
            width: "100%",
            transition: "border-color 0.3s",
          }}
        />
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <label>Password *</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password || ""}
          onChange={handleChange}
          required
          style={{
            padding: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "14px",
            width: "100%",
            transition: "border-color 0.3s",
          }}
        />
      </div>

      <div className="col-lg-4">
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            name="agreement"
            onChange={handleChange}
            required
            style={{ marginRight: "8px",width:"5%" }}
          />
          <label style={{ fontSize: "14px", margin: 0 ,textAlign:"left"}}>
            I agree to your <a href="/privacy-policy">privacy policy</a> and{" "}
            <a href="/terms-of-use">Terms of Use</a>.
          </label>
        </div>
      </div>
    </div>
  );
};

export default Page4;
