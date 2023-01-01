import React, { useState } from "react";
import { Divider, List, ListItem } from "react95";

import LinksMenu from "../LinksMenu";
import WorksMenu from "../WorksMenu";

import LogoIcon from "../LogoIcon";

const StartBarMenu = (props) => {
  const { isMenuOpen, setMenuVisibility, showExperienceWindow, showAboutMeWindow, showShutdownPopup } = props;

  const [isLinksMenuOpen, setLinksMenuVisibility] = useState(false);
  const [isWorksMenuOpen, setWorksMenuVisibility] = useState(false);

  if (!isMenuOpen) {
    return null;
  }

  const handleOverlayClick = () => {
    setMenuVisibility(false);
    setLinksMenuVisibility(false);
    setWorksMenuVisibility(false);
  };

  const activeTabClassName = "bg-[#000080] text-[#ffffff] font-bold";

  return (
    <>
      {isMenuOpen && (
        <div
          data-test-id='menu-overlay'
          className='fixed w-full h-full top-0 left-0 right-0 bottom-0'
          onClick={handleOverlayClick}
        />
      )}
      <LinksMenu
        isLinksMenuOpen={isMenuOpen && isLinksMenuOpen}
        setLinksMenuVisibility={setLinksMenuVisibility}
        onMouseOver={() => setLinksMenuVisibility(true)}
      />

      <WorksMenu
        isWorksMenuOpen={isMenuOpen && isWorksMenuOpen}
        setWorksMenuVisibility={isMenuOpen && setWorksMenuVisibility}
        onMouseOver={() => setWorksMenuVisibility(true)}
      />

      <div>
        <List className='flex flex-col !w-44' horizontalAlign='left' verticalAlign='top' open={isMenuOpen}>
          <ListItem
            className='hover:font-bold'
            onMouseOver={() => {
              setWorksMenuVisibility(false);
              setLinksMenuVisibility(false);
            }}
            onClick={() => {
              setMenuVisibility(false);
              showExperienceWindow();
            }}
          >
            <div className='flex align-middle items-center content-center px-1 gap-x-3'>
              <LogoIcon className='h-8 w-8' image='/icons/experience-computer.png' alt='' />
              <span>Experience</span>
            </div>
          </ListItem>

          <ListItem
            className={`${isWorksMenuOpen && activeTabClassName} hover:font-bold`}
            onMouseOver={() => {
              setWorksMenuVisibility(true);
              setLinksMenuVisibility(false);
            }}
          >
            <div className='flex justify-between'>
              <div className='flex align-middle items-center content-center gap-x-3'>
                <LogoIcon className='h-8 w-8' image='/icons/folder.png' alt='' />
                <span className={isWorksMenuOpen && activeTabClassName}>Works</span>
              </div>
              <span className={`${isWorksMenuOpen && activeTabClassName} items-end`}>▸</span>
            </div>
          </ListItem>

          <ListItem
            className='hover:font-bold'
            onMouseOver={() => {
              setWorksMenuVisibility(false);
              setLinksMenuVisibility(false);
            }}
            onClick={() => {
              setMenuVisibility(false);
              showAboutMeWindow();
            }}
          >
            <div className='flex align-middle items-center content-center gap-x-3'>
              <LogoIcon className='h-8 w-8' image='/icons/notepad.png' alt='' />
              <span>About Me</span>
            </div>
          </ListItem>

          <ListItem
            className={`${isLinksMenuOpen && activeTabClassName} hover:font-bold`}
            onMouseOver={() => {
              setWorksMenuVisibility(false);
              setLinksMenuVisibility(true);
            }}
          >
            <div className='flex justify-between'>
              <div className='flex align-middle items-center content-center gap-x-3'>
                <LogoIcon className='h-8 w-8' image='/icons/links.png' alt='' />
                <span className={isLinksMenuOpen && activeTabClassName}>Links</span>
              </div>
              <span className={`${isLinksMenuOpen && activeTabClassName} items-end`}>▸</span>
            </div>
          </ListItem>

          <Divider />

          <ListItem
            className='hover:font-bold'
            onMouseOver={() => {
              setWorksMenuVisibility(false);
              setLinksMenuVisibility(false);
            }}
            onClick={() => {
              setMenuVisibility(false);
              showShutdownPopup();
            }}
          >
            <div className='flex align-middle items-center content-center gap-x-3'>
              <LogoIcon className='h-8 w-8' image='/icons/shutdown-computer.png' alt='' />
              <span>Shutdown</span>
            </div>
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default StartBarMenu;
