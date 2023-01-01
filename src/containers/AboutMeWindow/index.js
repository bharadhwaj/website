import { connect } from "react-redux";

import AboutMeWindow from "./AboutMeWindow";

import { windowAction } from "../../actions";
import { windowSelector } from "../../selectors";
import { WINDOW } from "../../constants";

const mapStateToProps = (state) => ({
  activeWindow: windowSelector.getActiveWindow()(state),
  isVisible: windowSelector.isWindowOpen(WINDOW.ABOUT_ME)(state),
  isMinimized: windowSelector.isWindowMinimized(WINDOW.ABOUT_ME)(state),
  isMaximized: windowSelector.isWindowMaximized(WINDOW.ABOUT_ME)(state),
});

const mapDispatchToProps = (dispatch) => ({
  setAboutMeWindowActive: () => dispatch(windowAction.setActiveWindow(WINDOW.ABOUT_ME)),
  minimizeWindow: () => dispatch(windowAction.minimizeWindow(WINDOW.ABOUT_ME)),
  toggleMaximizeWindow: () => {
    dispatch(windowAction.minimizeAllExcept(WINDOW.ABOUT_ME));
    dispatch(windowAction.toggleMaximizeWindow(WINDOW.ABOUT_ME));
  },
  closeWindow: () => dispatch(windowAction.closeWindow(WINDOW.ABOUT_ME)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutMeWindow);
