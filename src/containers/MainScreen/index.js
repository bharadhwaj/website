import React from "react";

import AboutMeWindow from "../AboutMeWindow";
import ExperienceWindow from "../ExperienceWindow";
import ShutdownPopup from "../ShutdownPopup";

import style from "./style";

const MainScreen = () => {
  const classes = style();

  return (
    <div className={classes.mainScreen}>
      <ExperienceWindow />
      <AboutMeWindow />
      <ShutdownPopup />
    </div>
  );
};

export default MainScreen;
