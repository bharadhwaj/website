import React, { Component } from 'react';

import AboutMeWindow from '../AboutMeWindow';
import ExperienceWindow from '../ExperienceWindow';
import ShutdownPopup from '../ShutdownPopup';

import style from './style';

class MainScreen extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.mainScreen}>
        <ExperienceWindow />
        <AboutMeWindow />
        <ShutdownPopup />
      </div>
    );
  }
}

export default style(MainScreen);
