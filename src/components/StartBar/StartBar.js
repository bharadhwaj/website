import React from 'react';
import { AppBar, Bar, Button, Toolbar } from 'react95';

import style from './style';

import LogoIcon from '../LogoIcon';
import StartBarMenu from '../StartBarMenu';
import { WINDOW } from '../../constants';

const StartBar = (props) => {
  const {
    isExperienceWindowVisible,
    isExperienceWindowMinimized,
    isEducationWindowVisible,
    isEducationWindowMinimized,
    isAboutMeWindowVisible,
    isAboutMeWindowMinimized,
    setVisibility,
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

  console.log('PROPS: ', isAboutMeWindowMinimized);
  const classes = style();

  return (
    <AppBar className={classes.appbar}>
      <Toolbar>
        <div className={classes.startMenu}>
          <StartBarMenu isMenuOpen={isMenuOpen} setMenuVisibility={setMenuVisibility} />
          <Button onClick={() => setMenuVisibility(!isMenuOpen)} active={isMenuOpen} style={{ fontWeight: 'bold' }}>
            <LogoIcon image='/icons/start-icon.png' alt='' />
            Start
          </Button>

          <Bar className={classes.startMenuDivider} vertical size='lg' />

          {isAboutMeWindowVisible && (
            <Button
              onClick={() => setVisibility(WINDOW.ABOUT_ME, isAboutMeWindowMinimized)}
              active={!isAboutMeWindowMinimized}
              style={{ fontWeight: 'bold' }}
            >
              <LogoIcon image='/icons/app.png' alt='' />
              about_me.exe
            </Button>
          )}

          {isEducationWindowVisible && (
            <Button
              onClick={() => setVisibility(WINDOW.EDUCATION, isEducationWindowMinimized)}
              active={!isEducationWindowMinimized}
              style={{ fontWeight: 'bold' }}
            >
              <LogoIcon image='/icons/app.png' alt='' />
              education.exe
            </Button>
          )}

          {isExperienceWindowVisible && (
            <Button
              onClick={() => setVisibility(WINDOW.EXPERIENCE, isExperienceWindowMinimized)}
              active={!isExperienceWindowMinimized}
              style={{ fontWeight: 'bold' }}
            >
              <LogoIcon image='/icons/app.png' alt='' />
              experience.exe
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
  );
};

export default StartBar;
