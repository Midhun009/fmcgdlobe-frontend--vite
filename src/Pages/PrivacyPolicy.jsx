import React from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import SubscribeSection from "../components/Sections/SubscribeSection";

const Privacy = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/", active: false },
    { label: "Privacy & Policy", path: "/privacy", active: true },
  ];

  const privacyContent = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <PrivacyPolicy title="Privacy & Policy" content={privacyContent} />
      <SubscribeSection />
    </div>
  );
};

export default Privacy;
