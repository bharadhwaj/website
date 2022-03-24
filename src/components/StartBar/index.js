import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { AppBar, Bar, Button, Toolbar } from 'react95';

import style from './style';

import LogoIcon from '../LogoIcon';
import StartBarMenu from '../StartBarMenu';

import { windowAction } from '../../actions';
import { windowSelector } from '../../selectors';

const StartBar = (props) => {
  const {
    setExperienceWindowMinimize,
    showExperienceWindow,
    minimizeExperienceWindow,
    setAboutMeWindowMinimize,
    showAboutMeWindow,
    minimizeAboutMeWindow,
  } = props;

  const [isMenuOpen, setMenuVisibility] = React.useState(false);
  const [currentTime, setTime] = React.useState(
    new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
  );

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })
      );
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const classes = style();

  return (
    <>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <div className={classes.startMenu}>
            <StartBarMenu
              isMenuOpen={isMenuOpen}
              setMenuVisibility={setMenuVisibility}
            />
            <Button
              onClick={() => setMenuVisibility(!isMenuOpen)}
              active={isMenuOpen}
              style={{ fontWeight: 'bold' }}
            >
              <LogoIcon image='/icons/start-icon.png' alt='' />
              Start
            </Button>

            <Bar className={classes.startMenuDivider} vertical size='lg' />

            {showExperienceWindow && (
              <Button
                onClick={() =>
                  setExperienceWindowMinimize(!minimizeExperienceWindow)
                }
                active={!minimizeExperienceWindow}
                style={{ fontWeight: 'bold' }}
              >
                <LogoIcon image='/icons/app.png' alt='' />
                experience.exe
              </Button>
            )}

            {showAboutMeWindow && (
              <Button
                onClick={() => setAboutMeWindowMinimize(!minimizeAboutMeWindow)}
                active={!minimizeAboutMeWindow}
                style={{ fontWeight: 'bold' }}
              >
                <LogoIcon image='/icons/app.png' alt='' />
                about_me.exe
              </Button>
            )}
          </div>
          <div className={classes.clockButton}>
            <Button active style={{ fontWeight: 'bold' }}>
              {currentTime}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  showExperienceWindow: windowSelector.showExperienceWindow(),
  minimizeExperienceWindow: windowSelector.minimizeExperienceWindow(),
  showEducationWindow: windowSelector.showEducationWindow(),
  minimizeEducationWindow: windowSelector.minimizeEducationWindow(),
  showAboutMeWindow: windowSelector.showAboutMeWindow(),
  minimizeAboutMeWindow: windowSelector.minimizeAboutMeWindow(),
});

const mapDispatchToProps = (dispatch) => ({
  setExperienceWindowVisibility: (isVisible) => {
    return dispatch(windowAction.setExperienceWindowVisibility(isVisible));
  },
  setExperienceWindowMinimize: (isMinimized) => {
    return dispatch(windowAction.setExperienceWindowMinimize(isMinimized));
  },
  setEducationWindowVisibility: (isVisible) => {
    return dispatch(windowAction.setEducationWindowVisibility(isVisible));
  },
  setEducationWindowMinimize: (isMinimized) => {
    return dispatch(windowAction.setEducationWindowMinimize(isMinimized));
  },
  setAboutMeWindowVisibility: (isVisible) => {
    return dispatch(windowAction.setAboutMeWindowVisibility(isVisible));
  },
  setAboutMeWindowMinimize: (isMinimized) => {
    return dispatch(windowAction.setAboutMeWindowMinimize(isMinimized));
  },
  setShutdownPopupVisibility: (isVisible) => {
    return dispatch(windowAction.setShutdownPopupVisibility(isVisible));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StartBar);
