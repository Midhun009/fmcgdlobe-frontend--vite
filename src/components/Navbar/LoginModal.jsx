import React , { useState } from "react";


  const LoginModal = () => {
  const [isChecked, setIsChecked] = useState(false); // State to manage checkbox

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev); // Toggle checkbox state
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

            <form className="submit-form" style={{ textAlign: "left" }}>
              <div className="form-group">
                <label className="mb-1 ">User Name</label>
                <input
                  type="text"
                  className="form-control rounded bg-light"
                  placeholder="Username*"
                />
              </div>

              <div className="form-group">
                <label className="mb-1">Password</label>
                <input
                  type="password"
                  className="form-control rounded bg-light"
                  placeholder="Password*"
                />
              </div>

              <div className="form-group">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="flex-1 d-flex align-items-center">
                    <input
                      id="rememberMe" 
                      className="checkbox-custom"
                      name="rememberMe"
                      type="checkbox"
                      checked={isChecked} 
                      onChange={handleCheckboxChange} 
                    />
                    <label
                      htmlFor="rememberMe"
                      className="checkbox-custom-label ms-2"
                    >
                      Remember Me
                    </label>
                  </div>

                  <div className="eltio_k2">
                    <a href="#" className="theme-cl">
                      Lost Your Password?
                    </a>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-md full-width theme-bg text-light rounded ft-medium"
                >
                  Sign In
                </button>
              </div>

              <div className="form-group text-center mb-0">
                <p className="extra">Or login with</p>
                <div className="option-log">
                  <div className="single-log-opt">
                    <a href="javascript:void(0);" className="log-btn">
                      <img
                        src="https://via.placeholder.com/225x225"
                        className="img-fluid"
                        alt=""
                      />
                      Login with Google
                    </a>
                  </div>
                  <div className="single-log-opt">
                    <a href="javascript:void(0);" className="log-btn">
                      <img
                        src="assets/img/facebook.png"
                        className="img-fluid"
                        alt=""
                      />
                      Login with Facebook
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
