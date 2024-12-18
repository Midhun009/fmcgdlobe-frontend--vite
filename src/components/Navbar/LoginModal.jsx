import React, { useState } from "react";
import "./Modal.css";

const LoginModal = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dummyUser = {
    username: "user",
    password: "123",
    profileImage: "/assets/img/user-profile.png",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === dummyUser.username && password === dummyUser.password) {
      setIsLoggedIn({
        name: dummyUser.username,
        image: dummyUser.profileImage,
      });

      setErrorMessage("");
      const modalElement = document.getElementById("login");
      if (modalElement) {
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        modalInstance.hide();
      }
    } else {
      setErrorMessage("Invalid username or password.");
    }
  };

  return (
    <div
      className="modal fade"
      id="login"
      tabIndex="-1"
      aria-labelledby="loginmodal"
      aria-hidden="true"
    >
      <div className="modal-dialog login-pop-form" role="document">
        <div className="modal-content">
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
            <form onSubmit={handleLogin}>
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
