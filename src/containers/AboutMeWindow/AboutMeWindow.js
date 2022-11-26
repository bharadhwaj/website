import React from "react";
import { Button, Fieldset, Window, WindowContent, WindowHeader } from "react95";
import Draggable from "react-draggable";

import { WINDOW } from "../../constants";

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

  const maximizedWindowClassName = "h-[calc(100%-45px)] min-w-full";
  const normalWindowClassName = "h-[50%] max-w-[60%]";

  if (!isVisible || isMinimized) {
    return null;
  }

  return (
    <Draggable
      defaultClassName={activeWindow === WINDOW.ABOUT_ME && "z-10"}
      bounds='parent'
      handle='header'
      defaultPosition={{ x: 0, y: 0 }}
    >
      <Window
        className={isMaximized ? maximizedWindowClassName : normalWindowClassName}
        onClick={setAboutMeWindowActive}
      >
        <header>
          <WindowHeader className='flex items-center justify-between cursor-move'>
            <div>
              <span>about_me.exe</span>
            </div>
            <div>
              <Button className='-ml-0.5 -mb-0.5 font-bold' size={"sm"} square onClick={minimizeWindow}>
                <span>-</span>
              </Button>
              <Button className='-ml-0.5 -mb-0.5 font-bold' size={"sm"} square onClick={toggleMaximizeWindow}>
                <span>□</span>
              </Button>
              <Button className='-ml-0.5 -mb-0.5' size={"sm"} square onClick={closeWindow}>
                <span>x</span>
              </Button>
            </div>
          </WindowHeader>
        </header>
        <WindowContent className='h-[100%]'>
          <Fieldset className='h-[90%] md:min-h-fit text-base font-monospace overflow-y-scroll'>
            <div className='mt-5 text-gray-600'>
              Hey there. This is Bharadhwaj, from God's own country - Kerala. I'm a passionate web developer, programmer
              and a B.Tech graduate in Computer Science and Engineering. I am passionate about Technology,
              Entrepreneurship and Startup.
            </div>
            <div className='mt-5 text-gray-600'>
              Currently, I am living in Bangalore, working for Applied Training, a Talent Management platform, where I
              am trying to integrate multiple products of Applied under a single hood. My day to day work mostly consist
              of coding in Python Django and React.js.
            </div>
            <div className='mt-5 text-gray-600'>
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
