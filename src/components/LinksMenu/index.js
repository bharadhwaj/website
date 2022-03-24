import React from 'react';
import { List, ListItem } from 'react95';

import LogoIcon from '../LogoIcon';

import style from './style';

const LinksMenu = (props) => {
  const { isLinksMenuOpen, setLinksMenuVisibility } = props;

  if (!isLinksMenuOpen) {
    return null;
  }

  const classes = style();

  return (
    <>
      <div className={classes.startMenuStyle}>
        {isLinksMenuOpen && (
          <List
            className={classes.menu}
            horizontalAlign='left'
            verticalAlign='top'
            open={isLinksMenuOpen}
            onClick={() => setLinksMenuVisibility(false)}
          >
            <ListItem
              as='a'
              href='https://github.com/bharadhwaj'
              target='_blank'
              className={classes.menuItem}
            >
              <span style={{ marginTop: 15 }}>
                <LogoIcon image='/icons/github.png' alt='' size={30} />
              </span>
              Github
            </ListItem>

            <ListItem
              as='a'
              href='https://stackoverflow.com/users/3978238/bharadhwaj'
              target='_blank'
              className={classes.menuItem}
            >
              <span style={{ marginTop: 10 }}>
                <LogoIcon image='/icons/stackoverflow.svg' alt='' size={22} />
              </span>
              Stackoverflow
            </ListItem>

            <ListItem
              as='a'
              href='https://www.linkedin.com/in/bharadhwaj'
              target='_blank'
              className={classes.menuItem}
            >
              <span style={{ marginTop: 15 }}>
                <LogoIcon image='/icons/linkedin.png' alt='' size={30} />
              </span>
              LinkedIn
            </ListItem>

            <ListItem
              as='a'
              href='https://angel.co/u/bharadhwajcn'
              target='_blank'
              className={classes.menuItem}
            >
              <span style={{ marginTop: 15 }}>
                <LogoIcon image='/icons/angellist.png' alt='' size={25} />
              </span>
              AngelList
            </ListItem>

            <ListItem
              as='a'
              href='https://www.visualcv.com/bharadhwaj'
              target='_blank'
              className={classes.menuItem}
            >
              <span style={{ marginTop: 10 }}>
                <LogoIcon image='/icons/resume.png' alt='' size={22} />
              </span>
              Resume
            </ListItem>
          </List>
        )}
      </div>
    </>
  );
};

export default LinksMenu;
