import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button, Hourglass } from 'react95';

import Popup from '../../components/Popup';

import { windowAction } from '../../actions';
import { windowSelector } from '../../selectors';

const ShutdownPopup = props => {
  const { showShutdownPopup, setShutdownPopupVisibility } = props;
  const [shutdown, setShowDown] = React.useState(false);

  const shutdownAction = (
    <>
      <Button
        style={{ margin: 5 }}
        onClick={() => {
          setShowDown(true);
          setTimeout(() => {
            window.open('about:blank', '_self');
            window.close();
          }, 3000);
        }}
      >
        Yes
      </Button>
      <Button
        style={{ margin: 5 }}
        onClick={() => setShutdownPopupVisibility(false)}
      >
        Cancel
      </Button>
    </>
  );

  return (
    <>
      {showShutdownPopup &&
        (shutdown ? (
          <Hourglass style={{ padding: '20% 0' }} />
        ) : (
          <Popup
            title="Are you sure you want to shutdown the Window?"
            image="/icons/shutdown-computer.png"
            action={shutdownAction}
            handleClose={() => setShutdownPopupVisibility(false)}
          />
        ))}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  showShutdownPopup: windowSelector.showShutdownPopup(),
});

const mapDispatchToProps = dispatch => ({
  setShutdownPopupVisibility: isVisible => {
    return dispatch(windowAction.setShutdownPopupVisibility(isVisible));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ShutdownPopup);
