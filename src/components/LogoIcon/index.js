import React from "react";

const LogoIcon = ({ image, alt, className = "" }) => {
  return (
    <span className={className}>
      <img src={image} alt={alt} height='auto' width='auto' />
    </span>
  );
};

export default LogoIcon;
