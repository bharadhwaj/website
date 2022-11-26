import React from "react";
import { Button, Window, WindowContent, WindowHeader } from "react95";

import LogoIcon from "../LogoIcon";

const Popup = (props) => {
  const { title, image, action, handleClose } = props;

  return (
    <div className='flex h-screen'>
      <Window className='m-auto items-center md:w-[60%] lg:w-[30%]'>
        <WindowHeader className='flex items-center justify-between'>
          <span>Shut Down Windows</span>
          <Button className='-ml-0.5 -mb-0.5 font-bold' size={"sm"} square onClick={handleClose}>
            <span>x</span>
          </Button>
        </WindowHeader>
        <WindowContent>
          <div className='flex items-center'>
            <LogoIcon className='w-10' image={image} alt='' />
            <span>{title}</span>
          </div>
          <div className='flex items-center justify-end'>{action}</div>
        </WindowContent>
      </Window>
    </div>
  );
};

export default Popup;
