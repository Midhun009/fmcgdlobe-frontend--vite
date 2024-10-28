import React from "react";

const FAQ = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <div className="sec_title position-relative text-center mb-5">
              <h6 className="text-muted mb-0">Ask Questions</h6>
              <h2 className="ft-bold">Frequently Asked Questions</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-11 col-md-12 col-12">
            <div id="accordion2" className="accordion" style={{"textAlign": "left"}}>
              <div className="card">
                <div className="card-header" id="h7">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-bs-toggle="collapse"
                      data-bs-target="#ord7"
                      aria-expanded="true"
                      aria-controls="ord7"
                    >
                      Can I get GoodUP listing for free?
                    </button>
                  </h5>
                </div>

                <div
                  id="ord7"
                  className="collapse show"
                  aria-labelledby="h7"
                  data-parent="#accordion2"
                >
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="h8">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#ord8"
                      aria-expanded="false"
                      aria-controls="ord8"
                    >
                      How to Permanently Delete Files From Windows?
                    </button>
                  </h5>
                </div>
                <div
                  id="ord8"
                  className="collapse"
                  aria-labelledby="h8"
                  data-parent="#accordion2"
                >
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="h9">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#ord9"
                      aria-expanded="false"
                      aria-controls="ord9"
                    >
                      Can I get GoodUP listing for free?
                    </button>
                  </h5>
                </div>
                <div
                  id="ord9"
                  className="collapse"
                  aria-labelledby="h9"
                  data-parent="#accordion2"
                >
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="h4">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#ord4"
                      aria-expanded="false"
                      aria-controls="ord4"
                    >
                      For GoodUp which license is better for business purpose?
                    </button>
                  </h5>
                </div>

                <div
                  id="ord4"
                  className="collapse"
                  aria-labelledby="h4"
                  data-parent="#accordion2"
                >
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
