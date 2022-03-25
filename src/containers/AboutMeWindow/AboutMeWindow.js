import React from 'react';
import clsx from 'clsx';
import { Button, Fieldset, Window, WindowContent, WindowHeader } from 'react95';
import Draggable from 'react-draggable';

import style from './style';

import { WINDOW } from '../../constants';

const AboutMeWindow = (props) => {
  const {
    activeWindow,
    isVisible,
    isMinimized,
    isMaximized,
    setAboutMeWindowActive,
    minimizeWindow,
    toggleMaximizeWindow,
    closeWindow,
  } = props;

  const classes = style();

  if (!isVisible || isMinimized) {
    return null;
  }

  return (
    <Draggable
      defaultClassName={clsx(activeWindow === WINDOW.ABOUT_ME && classes.activeWindow)}
      bounds='parent'
      handle='header'
      defaultPosition={{ x: 20, y: 40 }}
    >
      <Window
        className={clsx(isMaximized ? classes.maximizedScreen : classes.minimizedScreen)}
        onClick={setAboutMeWindowActive}
      >
        <header>
          <WindowHeader className={classes.headerArea}>
            <div>
              <span>about_me.exe</span>
            </div>
            <div>
              <Button className={classes.actionButtons} size={'sm'} square onClick={minimizeWindow}>
                <span>-</span>
              </Button>
              <Button className={classes.actionButtons} size={'sm'} square onClick={toggleMaximizeWindow}>
                <span>□</span>
              </Button>
              <Button className={classes.actionButtons} size={'sm'} square onClick={closeWindow}>
                <span>x</span>
              </Button>
            </div>
          </WindowHeader>
        </header>
        <WindowContent>
          <Fieldset className={classes.aboutMe}>
            <div className={classes.paragraph}>
              Hey there. This is Bharadhwaj, from Palakkad, God's own country - Kerala. I'm a passionate web developer,
              programmer and a B.Tech graduate in Computer Science and Engineering. I am passionate about Technology,
              Entrepreneurship and Startup.
            </div>
            <div className={classes.paragraph}>
              Currently, I am living in Bangalore, working for Applied Training, a Talent Management platform, where I
              am trying to integrate multiple products of Applied under a single hood. My day to day work mostly consist
              of coding in Python Django and React.js.
            </div>
            <div className={classes.paragraph}>
              If not at Work and if not sleeping, I spend time travelling and exploring new places. I follow Sports
              especially Cricket and Football and love to play outdoor games(even though I suck at most of them).
            </div>
          </Fieldset>
        </WindowContent>
      </Window>
    </Draggable>
  );
};

export default AboutMeWindow;
