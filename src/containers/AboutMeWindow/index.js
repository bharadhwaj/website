import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  Button,
  Fieldset,
  Window,
  WindowContent,
  WindowHeader,
} from 'react95';
import Draggable from 'react-draggable';

import style from './style';

import { windowAction } from '../../actions';
import { utils } from '../../constants';
import { windowSelector } from '../../selectors';

const AboutMeWindow = (props) => {
  const {
    setAboutMeWindowVisibility,
    setAboutMeWindowMinimize,
    setActiveWindow,
    minimizeAllExcept,
    showAboutMeWindow,
    minimizeAboutMeWindow,
    activeWindow,
  } = props;

  const classes = style();

  const [fullWindow, setFullWindow] = React.useState(false);

  return (
    <>
      {!minimizeAboutMeWindow && showAboutMeWindow && (
        <Draggable
          defaultClassName={clsx(
            activeWindow === utils.WINDOW_NAME.ABOUT_ME && classes.activeWindow
          )}
          bounds="parent"
          handle="header"
          defaultPosition={{ x: 20, y: 40 }}
        >
          <Window
            className={clsx(
              fullWindow ? classes.maximizedScreen : classes.minimizedScreen
            )}
            onClick={() => setActiveWindow(utils.WINDOW_NAME.ABOUT_ME)}
          >
            <header>
              <WindowHeader className={classes.headerArea}>
                <div>
                  <span>about_me.exe</span>
                </div>
                <div>
                  <Button
                    className={classes.actionButtons}
                    size={'sm'}
                    square
                    onClick={() =>
                      setAboutMeWindowMinimize(!minimizeAboutMeWindow)
                    }
                  >
                    <span>-</span>
                  </Button>
                  <Button
                    className={classes.actionButtons}
                    size={'sm'}
                    square
                    onClick={() => {
                      minimizeAllExcept(utils.WINDOW_VARIABLES.ABOUT_ME);
                      setFullWindow(!fullWindow);
                      return;
                    }}
                  >
                    <span>□</span>
                  </Button>
                  <Button
                    className={classes.actionButtons}
                    size={'sm'}
                    square
                    onClick={() => setAboutMeWindowVisibility(false)}
                  >
                    <span>x</span>
                  </Button>
                </div>
              </WindowHeader>
            </header>
            <WindowContent >
              <Fieldset className={classes.aboutMe} >
                <div className={classes.paragraph}>
                  Hey there. This is Bharadhwaj, from Palakkad, God's own country - Kerala.
                  I'm a passionate web developer, programmer and a B.Tech graduate in Computer Science and Engineering.
                  I am passionate about Technology, Entrepreneurship and Startup.
                </div>
                <div className={classes.paragraph}>
                  Currently, I am living in Bangalore, working for Applied Training, a Talent Management platform,
                  where I am trying to integrate multiple products of Applied under a single hood. My day to day work
                  mostly consist of coding in Python Django and React.js.
                </div>
                <div className={classes.paragraph}>
                  If not at Work and if not sleeping, I spend time travelling and exploring new places.
                  I follow Sports especially Cricket and Football and love to play outdoor games(even though I suck at most of them).
                </div>
              </Fieldset>
            </WindowContent>
          </Window>
        </Draggable>
      )}
    </>
  );
};


const mapStateToProps = createStructuredSelector({
  activeWindow: windowSelector.getActiveWindow(),
  showAboutMeWindow: windowSelector.showAboutMeWindow(),
  minimizeAboutMeWindow: windowSelector.minimizeAboutMeWindow(),
});

const mapDispatchToProps = (dispatch) => ({
  setAboutMeWindowVisibility: (isVisible) => {
    return dispatch(windowAction.setAboutMeWindowVisibility(isVisible));
  },
  setAboutMeWindowMinimize: (isMinimized) => {
    return dispatch(windowAction.setAboutMeWindowMinimize(isMinimized));
  },
  setActiveWindow: (window) => {
    return dispatch(windowAction.setActiveWindow(window));
  },
  minimizeAllExcept: (windowName) => {
    return dispatch(windowAction.minimizeAllExcept(windowName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutMeWindow);
