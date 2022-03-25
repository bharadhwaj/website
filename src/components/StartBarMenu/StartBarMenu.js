import React, { useState } from 'react';
import { Divider, List, ListItem } from 'react95';

import LinksMenu from '../LinksMenu';
import WorksMenu from '../WorksMenu';

import LogoIcon from '../LogoIcon';

import style from './style';

const StartBarMenu = (props) => {
  const { isMenuOpen, setMenuVisibility, showExperienceWindow, showAboutMeWindow, showShutdownPopup } = props;

  const classes = style();

  const [isLinksMenuOpen, setLinksMenuVisibility] = useState(false);
  const [isWorksMenuOpen, setWorksMenuVisibility] = useState(false);

  if (!isMenuOpen) {
    return null;
  }

  return (
    <>
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

      <div className={classes.startMenuStyle}>
        <List className={classes.menu} horizontalAlign='left' verticalAlign='top' open={isMenuOpen}>
          <ListItem
            className={classes.menuItem}
            onMouseOver={() => {
              setWorksMenuVisibility(false);
              setLinksMenuVisibility(false);
            }}
            onClick={() => {
              setMenuVisibility(false);
              showExperienceWindow();
            }}
          >
            <LogoIcon image='/icons/experience-computer.png' alt='' size={30} />
            Experience
          </ListItem>

          <ListItem
            className={classes.subMenuItem}
            onMouseOver={() => {
              setWorksMenuVisibility(true);
              setLinksMenuVisibility(false);
            }}
            style={{ marginLeft: -7 }}
          >
            <LogoIcon image='/icons/folder.png' alt='' size={40} />
            Works
            <span className={classes.subMenuIcon}>▸</span>
          </ListItem>

          <ListItem
            className={classes.menuItem}
            onMouseOver={() => {
              setWorksMenuVisibility(false);
              setLinksMenuVisibility(false);
            }}
            onClick={() => {
              setMenuVisibility(false);
              showAboutMeWindow();
            }}
          >
            <LogoIcon image='/icons/notepad.png' alt='' size={25} />
            About Me
          </ListItem>

          <ListItem
            className={classes.subMenuItem}
            onMouseOver={() => {
              setWorksMenuVisibility(false);
              setLinksMenuVisibility(true);
            }}
          >
            <LogoIcon image='/icons/globe.png' alt='' size={30} />
            Links
            <span className={classes.subMenuIcon}>▸</span>
          </ListItem>

          <Divider />

          <ListItem
            className={classes.menuItem}
            onMouseOver={() => {
              setWorksMenuVisibility(false);
              setLinksMenuVisibility(false);
            }}
            onClick={() => {
              setMenuVisibility(false);
              showShutdownPopup();
            }}
          >
            <LogoIcon image='/icons/shutdown-computer.png' alt='' size={30} />
            Shutdown
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default StartBarMenu;
