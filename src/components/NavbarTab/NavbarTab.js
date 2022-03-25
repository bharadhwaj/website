import React from 'react';

const NavbarTab = (props) => {
  return (
    <Button
      onClick={() => setExperienceWindowMinimize(!minimizeExperienceWindow)}
      active={!minimizeExperienceWindow}
      style={{ fontWeight: 'bold' }}
    >
      <LogoIcon image='/icons/app.png' alt='' />
      experience.exe
    </Button>
  );
};

export default NavbarTab;
