import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "James R. Smith",
      role: "Project Manager",
      img: "https://via.placeholder.com/500x500",
      tag: "New",
    },
    {
      name: "Howard L. Gallegos",
      role: "Team Leader",
      img: "https://via.placeholder.com/500x500",
    },
    {
      name: "Patricia C. Foshee",
      role: "UI/UX Designer",
      img: "https://via.placeholder.com/500x500",
      tag: "Popular",
    },
    {
      name: "Helen A. Robbins",
      role: "Web Developer",
      img: "https://via.placeholder.com/500x500",
    },
    {
      name: "Andrew D. Taylor",
      role: "Content Writer",
      img: "https://via.placeholder.com/500x500",
      tag: "New",
    },
    {
      name: "Larry J. Mapes",
      role: "Web Expert",
      img: "https://via.placeholder.com/500x500",
    },
    {
      name: "Loretta G. Wood",
      role: "Product Designer",
      img: "https://via.placeholder.com/500x500",
      tag: "Popular",
    },
    {
      name: "Javier M. Brookins",
      role: "Sales Manager",
      img: "https://via.placeholder.com/500x500",
      tag: "New",
    },
  ];

  return (
    <section className="space min gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="sec_title position-relative text-center mb-5">
              <h6 className="mb-0 theme-cl">Our Team</h6>
              <h2 className="ft-bold">Goodup Expert Team</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="Goodup-author-wrap">
                {member.tag && (
                  <div
                    className={`Goodup-author-tag ${member.tag.toLowerCase()}`}
                  >
                    {member.tag}
                  </div>
                )}
                <div className="Goodup-author-thumb">
                  <a href="author-detail.html">
                    <img
                      src={member.img}
                      className="img-fluid circle"
                      alt={member.name}
                    />
                  </a>
                </div>
                <div className="Goodup-author-caption">
                  <h4 className="fs-md mb-0 ft-medium m-catrio">
                    <a href="author-detail.html">{member.name}</a>
                  </h4>
                  <div className="Goodup-location">{member.role}</div>
                </div>
                <div className="Goodup-author-links">
                  <ul className="Goodup-social colored">
                    <li>
                      <a href="javascript:void(0);">
                        <i className="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <i className="lni lni-linkedin-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <i className="lni lni-twitter-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <i className="lni lni-instagram-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
