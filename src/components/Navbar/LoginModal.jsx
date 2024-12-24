import React, { useState } from "react";
import { loginUser } from "../../Api/loginUser"; 
import "./Modal.css";

const LoginModal = ({ setIsLoggedIn, setUserProfile }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(username, password); // API call
      const { token, profileData } = response.data; // Assume the API returns a token and profile data

      // Store the token and profile in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("userProfile", JSON.stringify(profileData));

      // Update the state
      setIsLoggedIn(true);
      setUserProfile(profileData);

      // Close modal
      document.querySelector('[data-bs-dismiss="modal"]').click();
    } catch (error) {
      setErrorMessage("Invalid username or password.");
    }
  };

  return (
    <div
      className="modal fade"
      id="login"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="loginmodal"
      aria-hidden="true"
    >
      <div className="modal-dialog login-pop-form" role="document">
        <div className="modal-content" id="loginmodal">
          <div className="modal-headers">
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span className="ti-close"></span>
            </button>
          </div>

          <div className="modal-body p-5">
            <div className="text-center mb-4">
              <h4 className="m-0 ft-medium">Login Your Account</h4>
            </div>

            <form className="submit-form" onSubmit={handleLogin}>
              <div className="form-group">
                <label className="mb-1">User Name</label>
                <input
                  type="text"
                  className="form-control rounded bg-light"
                  placeholder="Username*"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className="mb-1">Password</label>
                <input
                  type="password"
                  className="form-control rounded bg-light"
                  placeholder="Password*"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {errorMessage && (
                <div className="alert alert-danger">{errorMessage}</div>
              )}

              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-md full-width theme-bg text-light rounded ft-medium"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
