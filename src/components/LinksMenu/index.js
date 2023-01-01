import React from "react";
import { List, ListItem } from "react95";

import LogoIcon from "../LogoIcon";

const LinksMenu = (props) => {
  const { isLinksMenuOpen, setLinksMenuVisibility } = props;

  if (!isLinksMenuOpen) {
    return null;
  }

  return (
    <div className='relative inline-block bottom-12 left-[173px]'>
      {isLinksMenuOpen && (
        <List
          className='flex flex-col !w-44'
          horizontalAlign='left'
          verticalAlign='top'
          open={isLinksMenuOpen}
          onClick={() => setLinksMenuVisibility(false)}
        >
          <ListItem as='a' href='https://github.com/bharadhwaj' target='_blank'>
            <div className='flex align-middle hover:font-bold'>
              <LogoIcon className='w-7 mr-2 mt-2' image='/icons/github.png' alt='' />
              <span>Github</span>
            </div>
          </ListItem>

          <ListItem as='a' href='https://stackoverflow.com/users/3978238/bharadhwaj' target='_blank'>
            <div className='flex align-middle hover:font-bold'>
              <LogoIcon className='w-7 mr-2 mt-2' image='/icons/stackoverflow.png' alt='' />
              <span>Stackoverflow</span>
            </div>
          </ListItem>

          <ListItem as='a' href='https://www.linkedin.com/in/bharadhwaj' target='_blank'>
            <div className='flex align-middle hover:font-bold'>
              <LogoIcon className='w-7 mr-2 mt-2' image='/icons/linkedin.png' alt='' />
              <span>LinkedIn</span>
            </div>
          </ListItem>

          <ListItem as='a' href='https://angel.co/u/bharadhwajcn' target='_blank'>
            <div className='flex align-middle hover:font-bold'>
              <LogoIcon className='w-7 mr-2 mt-2' image='/icons/angellist.png' alt='' />
              <span>AngelList</span>
            </div>
          </ListItem>

          <ListItem as='a' href='https://www.visualcv.com/bharadhwaj' target='_blank'>
            <div className='flex align-middle hover:font-bold'>
              <LogoIcon className='w-6 mr-2 mt-2' image='/icons/resume.png' alt='' />
              <span>Resume</span>
            </div>
          </ListItem>
        </List>
      )}
    </div>
  );
};

export default LinksMenu;
