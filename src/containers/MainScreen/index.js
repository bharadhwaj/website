import React from "react";

import AboutMeWindow from "../AboutMeWindow";
import ExperienceWindow from "../ExperienceWindow";
import ShutdownPopup from "../ShutdownPopup";

const MainScreen = () => {
  return (
    <div className='min-h-[calc(100vh-45px)] min-w-full bg-teal-600 text-center'>
      <ExperienceWindow />
      <AboutMeWindow />
      <ShutdownPopup />
    </div>
  );
};

export default MainScreen;
