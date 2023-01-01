import React from "react";
import { List, ListItem } from "react95";

const WorksMenu = (props) => {
  const { isWorksMenuOpen, setWorksMenuVisibility } = props;

  if (!isWorksMenuOpen) {
    return null;
  }

  return (
    <>
      <div className='relative inline-block bottom-12 left-[173px]'>
        <List
          className='flex flex-col !w-44'
          horizontalAlign='left'
          verticalAlign='top'
          open={isWorksMenuOpen}
          onClick={() => setWorksMenuVisibility(false)}
        >
          <ListItem
            as='a'
            href='https://app.trakstar.com/'
            target='_blank'
            className='flex align-middle hover:font-bold'
          >
            Trakstar
          </ListItem>

          <ListItem
            as='a'
            href='https://app.getbasis.co/'
            target='_blank'
            className='flex align-middle hover:font-bold'
          >
            Basis
          </ListItem>

          <ListItem
            as='a'
            href='https://www.qburst.com/products/automate/'
            target='_blank'
            className='flex align-middle hover:font-bold'
          >
            Automate
          </ListItem>

          <ListItem
            as='a'
            href='https://fubar-charts.bharadhwajcn.com/'
            target='_blank'
            className='flex align-middle hover:font-bold'
          >
            Fubar Charts
          </ListItem>

          <ListItem
            as='a'
            href='https://www.github.com/bharadhwaj'
            target='_blank'
            className='flex align-middle hover:font-bold'
          >
            More on Github...
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default WorksMenu;
