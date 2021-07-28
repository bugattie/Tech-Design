import React from "react";

import AppHero from "../components/home/AppHero";
import AppAbout from "../components/home/AppAbout";
import AppFeatures from "../components/home/AppFeatures";
import AppWorks from "../components/home/AppWorks";

const AppHome = () => {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
      <AppFeatures />
      <AppWorks />
    </div>
  );
};

export default AppHome;
