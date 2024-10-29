import React from "react";

const AlertMessage = () => {
  return (
    <div
      className="alert bg-inverse text-light d-flex align-items-center"
      role="alert"
    >
      <p className="p-0 m-0 ft-medium full-width">
        Your listing{" "}
        <a href="#" className="text-success">
          Wedding Willa Resort
        </a>{" "}
        has been approved!
      </p>
      <button
        type="button"
        className="btn-close text-light"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default AlertMessage;
