import React from "react";
import { List, ListItem } from "react95";

import style from "./style";

const WorksMenu = (props) => {
  const { isWorksMenuOpen, setWorksMenuVisibility } = props;

  if (!isWorksMenuOpen) {
    return null;
  }

  const classes = style();

  return (
    <>
      <div className={classes.startMenuStyle}>
        <List
          className={classes.menu}
          horizontalAlign='left'
          verticalAlign='top'
          open={isWorksMenuOpen}
          onClick={() => setWorksMenuVisibility(false)}
        >
          <ListItem as='a' href='https://fubar-charts.bharadhwajcn.com/' target='_blank' className={classes.menuItem}>
            Fubar Charts
          </ListItem>

          <ListItem as='a' href='https://app.getbasis.co/' target='_blank' className={classes.menuItem}>
            Basis
          </ListItem>

          <ListItem
            as='a'
            href='https://www.qburst.com/products/automate/'
            target='_blank'
            className={classes.menuItem}
          >
            Automate
          </ListItem>

          <ListItem as='a' href='https://www.github.com/bharadhwaj' target='_blank' className={classes.menuItem}>
            More on Github...
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default WorksMenu;
