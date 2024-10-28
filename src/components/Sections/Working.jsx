import React from "react";

const Working = () => {
  return (
    <section className="space">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
            <div className="position-relative">
              <img src="assets/img/bn-4.png" className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="m-spaced" style={{textAlign: "justify"}}>
              <div className="position-relative">
                <div className="mb-1">
                  <span className="bg-light-success text-success px-2 py-1 rounded">
                    Process
                  </span>
                </div>
                <h2 className="ft-bold mb-3">
                  How it works & features <br />
                  Around The Globe
                </h2>
                <p className="mb-3">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
              <div className="uli-list-features">
                <ul>
                  <li>
                    <div className="list-uiyt">
                      <div className="list-iobk">
                        <i className="fas fa-globe"></i>
                      </div>
                      <div className="list-uiyt-capt">
                        <h5>Find Businesses</h5>
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="list-uiyt">
                      <div className="list-iobk">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="list-uiyt-capt">
                        <h5>Review Listings</h5>
                        <p>
                          Nam libero tempore, cum soluta nobis est eligendi
                          optio cumque nihil impedit quo minus id quod maxime
                          placeat facere possimus.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="list-uiyt">
                      <div className="list-iobk">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="list-uiyt-capt">
                        <h5>Make a Reservation</h5>
                        <p>
                          Itaque earum rerum hic tenetur a sapiente delectus, ut
                          aut reiciendis voluptatibus maiores alias consequatur
                          aut perferendis.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
