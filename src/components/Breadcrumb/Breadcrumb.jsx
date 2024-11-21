// Breadcrumb.js
import React from "react";
import { Link } from "react-router-dom"; 
const Breadcrumb = ({ items }) => {
  return (
    <div className="bg-dark py-3">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className={`breadcrumb-item ${
                      item.active ? "active theme-cl" : ""
                    }`}
                    aria-current={item.active ? "page" : undefined}
                  >
                    {item.active ? (
                      item.label
                    ) : (
                      <Link to={item.path} className="text-light">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
