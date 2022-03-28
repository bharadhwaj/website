import React from "react";

import style from "./style";

const LogoIcon = ({ image, alt, size }) => {
  const classes = style();

  const styleObj = size ? { height: size } : {};

  return (
    <span className={classes.icon} style={styleObj}>
      <img className={classes.iconImage} src={image} alt={alt} />
    </span>
  );
};

export default LogoIcon;
