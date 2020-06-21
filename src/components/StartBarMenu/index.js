import React, { useState } from 'react';
import { Divider, List, ListItem } from 'react95';

import LinksMenu from "../LinksMenu";
import WorksMenu from "../WorksMenu";

import LogoIcon from '../LogoIcon';

import style from './style';

const StartBarMenu = props => {
  const {
    setExperienceWindowVisibility,
    setAboutMeWindowVisibility,
    setShutdownPopupVisibility,
    menuOpen,
    setMenuOpen,
  } = props;

  const classes = style();

  const [linksMenuOpen, setLinksMenuOpen] = useState(false);
  const [worksMenuOpen, setWorksMenuOpen] = useState(false);

  return (
    <>
      <LinksMenu
          linksMenuOpen={menuOpen && linksMenuOpen}
          setLinksMenuOpen={setLinksMenuOpen}
          onMouseOver={()=>setLinksMenuOpen(true)}
      />

      <WorksMenu
          worksMenuOpen={menuOpen && worksMenuOpen}
          setWorksMenuOpen={menuOpen && setWorksMenuOpen}
          onMouseOver={()=>setWorksMenuOpen(true)}
      />
      <div className={classes.startMenuStyle}>
        {menuOpen && (
          <List
            className={classes.menu}
            horizontalAlign="left"
            verticalAlign="top"
            open={menuOpen}
          >
            <ListItem
              className={classes.menuItem}
              onMouseOver={() => {setWorksMenuOpen(false); setLinksMenuOpen(false); }}
              onClick={() => { setMenuOpen(false); setExperienceWindowVisibility(true);}}
            >
              <LogoIcon image="/icons/experience-computer.png" alt="" size={30} />
              Experience
            </ListItem>

            <ListItem
              className={classes.subMenuItem}
              onMouseOver={() => { setWorksMenuOpen(true); setLinksMenuOpen(false);}}
              style={{marginLeft: -7}}
            >
              <LogoIcon image="/icons/folder.png" alt="" size={40}/>
              Works
              <span className={classes.subMenuIcon}>
               ▸
              </span>
            </ListItem>

            <ListItem
              className={classes.menuItem}
              onMouseOver={() => {setWorksMenuOpen(false); setLinksMenuOpen(false); }}
              onClick={() => { setMenuOpen(false); setAboutMeWindowVisibility(true);}}
            >
              <LogoIcon image="/icons/notepad.png" alt="" size={25} />
              About Me
            </ListItem>

           <ListItem
              className={classes.subMenuItem}
              onMouseOver={() => {setWorksMenuOpen(false); setLinksMenuOpen(true); }}
           >
             <LogoIcon image="/icons/globe.png" alt="" size={30} />
              Links
               <span className={classes.subMenuIcon}>
               ▸
              </span>
            </ListItem>

            <Divider />

            <ListItem
              className={classes.menuItem}
              onMouseOver={() => {setWorksMenuOpen(false); setLinksMenuOpen(false); }}
              onClick={() => { setMenuOpen(false); setShutdownPopupVisibility(true);}}
            >
              <LogoIcon image="/icons/shutdown-computer.png" alt="" size={30} />
              Shutdown
            </ListItem>
          </List>
        )}
      </div>
    </>
  );
};

export default StartBarMenu;
