import React from "react";
import { Button, Hourglass } from "react95";

import Popup from "../../components/Popup";

const ShutdownPopup = (props) => {
  const { isVisible, closePopup } = props;
  const [shutdown, setShowDown] = React.useState(false);

  if (!isVisible) {
    return null;
  }

  const shutdownAction = (
    <>
      <Button
        className='m-1'
        onClick={() => {
          setShowDown(true);
          setTimeout(() => {
            window.open("about:blank", "_self");
            window.close();
          }, 3000);
        }}
      >
        Yes
      </Button>
      <Button className='m-1' onClick={closePopup}>
        Cancel
      </Button>
    </>
  );

  if (!shutdown) {
    return (
      <Popup
        title='Are you sure you want to shutdown the Window?'
        image='/icons/shutdown-computer.png'
        action={shutdownAction}
        handleClose={closePopup}
      />
    );
  }

  return <Hourglass className='px-[20%]' />;
};

export default ShutdownPopup;
