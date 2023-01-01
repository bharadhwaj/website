import React from "react";
import { AppBar, Bar, Button, Toolbar } from "react95";

import LogoIcon from "../LogoIcon";
import StartBarMenu from "../StartBarMenu";
import { WINDOW } from "../../constants";

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
    new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
  );

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })
      );
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <AppBar className='top-[calc(100%-45px)!important] z-50'>
      <Toolbar>
        <div className='flex flex-grow'>
          <StartBarMenu isMenuOpen={isMenuOpen} setMenuVisibility={setMenuVisibility} />
          <Button className='font-bold' onClick={() => setMenuVisibility(!isMenuOpen)} active={isMenuOpen}>
            <LogoIcon className='w-6 mr-2' image='/icons/start-icon.png' alt='' />
            Start
          </Button>

          <Bar className='mx-2 -mt-1' vertical size='lg' />

          {isAboutMeWindowVisible && (
            <Button
              className='font-bold'
              onClick={() => setVisibility(WINDOW.ABOUT_ME, isAboutMeWindowMinimized)}
              active={!isAboutMeWindowMinimized}
            >
              <LogoIcon className='w-6 mr-2' image='/icons/app.png' alt='' />
              about_me.exe
            </Button>
          )}

          {isEducationWindowVisible && (
            <Button
              className='font-bold'
              onClick={() => setVisibility(WINDOW.EDUCATION, isEducationWindowMinimized)}
              active={!isEducationWindowMinimized}
            >
              <LogoIcon className='w-6 mr-2' image='/icons/app.png' alt='' />
              education.exe
            </Button>
          )}

          {isExperienceWindowVisible && (
            <Button
              className='font-bold'
              onClick={() => setVisibility(WINDOW.EXPERIENCE, isExperienceWindowMinimized)}
              active={!isExperienceWindowMinimized}
            >
              <LogoIcon className='w-6 mr-2' image='/icons/app.png' alt='' />
              experience.exe
            </Button>
          )}
        </div>
        <Button active className='-mt-1 font-bold'>
          {currentTime}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default StartBar;
