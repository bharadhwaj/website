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

  const maximizedWindowClassName = "min-h-[calc(100vh-47px)] max-h-[calc(100vh-47px)] min-w-full";
  const normalWindowClassName = "h-[50%] max-h-[calc(100vh-80px)] md:w-[60%] w-[90%]";

  if (!isVisible || isMinimized) {
    return null;
  }

  return (
    <Draggable
      bounds='parent'
      handle='header'
      defaultPosition={{ x: 0, y: 20 }}
      position={isMaximized && { x: 0, y: 0 }}
      onMouseDown={setAboutMeWindowActive}
    >
      <Window
        className={`font-monospace overflow-y-scroll md:overflow-y-hidden ${
          isMaximized ? maximizedWindowClassName : normalWindowClassName
        } ${activeWindow === WINDOW.ABOUT_ME ? "z-10" : "z-1"}`}
        onClick={setAboutMeWindowActive}
      >
        <header>
          <WindowHeader className='flex items-center justify-between cursor-move'>
            <div>
              <span>about_me.exe</span>
            </div>
            <div>
              <Button
                className='-ml-0.5 -mb-0.5 font-bold z-20 bg-zinc-300'
                size={"sm"}
                square
                onClick={minimizeWindow}
              >
                <span>-</span>
              </Button>
              <Button
                className='-ml-0.5 -mb-0.5 font-extrabold z-20 bg-zinc-300'
                size={"sm"}
                square
                onClick={toggleMaximizeWindow}
              >
                <span>□</span>
              </Button>
              <Button className='-ml-0.5 -mb-0.5 font-sans z-20 bg-zinc-300' size={"sm"} square onClick={closeWindow}>
                <span>x</span>
              </Button>
            </div>
          </WindowHeader>
        </header>
        <WindowContent className='min-h-full overflow-scroll'>
          <Fieldset className='text-base font-monospace overflow-scroll'>
            <div className='mt-5 text-gray-600'>
              Hello there. I am Bharadhwaj C N. I am from God's own country, Kerala. I'm a web developer and programmer
              with a Bachelor's degree in Computer Science and Engineering. I am enthusiastic about technology,
              entrepreneurship, and startups.
            </div>
            <div className='mt-5 text-gray-600'>
              I'm a full stack engineer. I've worked on product-based start-ups in the Fin-tech, Ad-tech, and HRIS
              domains. For frontend, I primarily use React.js (occasionally with Next.js) and Node.js or Python Django
              Rest Framework for backend.
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
