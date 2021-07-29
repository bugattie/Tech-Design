import React from "react";

import AppHero from "../components/home/AppHero";
import AppAbout from "../components/home/AppAbout";
import AppFeatures from "../components/home/AppFeatures";
import AppWorks from "../components/home/AppWorks";
import AppFAQ from "../components/home/AppFAQ";
import AppPricing from "../components/home/AppPricing";
import AppContact from "../components/home/AppContact";

const AppHome = () => {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
      <AppFeatures />
      <AppWorks />
      <AppFAQ />
      <AppPricing />
      <AppContact />
    </div>
  );
};

export default AppHome;
