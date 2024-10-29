// src/components/LocationAndHours.js
import React from "react";

const LocationAndHours = () => {
  return (
    <div className="bg-white rounded mb-4">
      <div className="jbd-01 px-4 py-4">
        <div className="jbd-details mb-4">
          <h5 className="ft-bold fs-lg">Location & Hours</h5>
          <div className="Goodup-lot-wrap d-block">
            <div className="row g-4">
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="list-map-lot">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0148908503734!2d80.97350361499701!3d26.871267983145383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd9a9f6d1727%3A0xb87eabf63f7e4cee!2sCafe%20Repertwahr!5e0!3m2!1sen!2sin!4v1649059491407!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="list-map-capt">
                  <div className="lio-pact">
                    <span className="ft-medium text-info">
                      2919 N Flores St
                    </span>
                  </div>
                  <div className="lio-pact">
                    <span className="hkio-oilp ft-bold">
                      San Antonio, TX 78212
                    </span>
                  </div>
                  <div className="lio-pact">
                    <p className="ft-medium">Alta Vista</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <th scope="row">Mon</th>
                      <td>5:00 PM - 8:30 PM</td>
                      <td className="text-success">Open now</td>
                    </tr>
                    <tr>
                      <td>Tue</td>
                      <td>5:00 PM - 8:30 PM</td>
                    </tr>
                    <tr>
                      <td>Wed</td>
                      <td>5:00 PM - 8:30 PM</td>
                    </tr>
                    <tr>
                      <td>Thu</td>
                      <td>5:00 PM - 8:30 PM</td>
                    </tr>
                    <tr>
                      <td>Fri</td>
                      <td>5:00 PM - 6:30 PM</td>
                    </tr>
                    <tr>
                      <td>Sat</td>
                      <td>Closed</td>
                    </tr>
                    <tr>
                      <td>Sun</td>
                      <td>Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAndHours;
