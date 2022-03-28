import React from "react";
import { Button, Window, WindowContent, WindowHeader } from "react95";

import style from "./style";

import LogoIcon from "../LogoIcon";

const Popup = (props) => {
  const { title, image, action, handleClose } = props;

  const classes = style();

  return (
    <Window className={classes.screen}>
      <WindowHeader className={classes.header}>
        <span>Shut Down Windows</span>
        <Button className={classes.headerButton} size={"sm"} square onClick={handleClose}>
          <span>x</span>
        </Button>
      </WindowHeader>
      <WindowContent>
        <div className={classes.content}>
          <LogoIcon image={image} alt='' size={40} />
          <span>{title}</span>
        </div>
        <div className={classes.action}>{action}</div>
      </WindowContent>
    </Window>
  );
};

export default Popup;
