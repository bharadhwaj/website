import React from "react";

const LogoIcon = ({ image, alt, className = "" }) => {
  return (
    <span className={className}>
      <img src={image} alt={alt} />
    </span>
  );
};

export default LogoIcon;
