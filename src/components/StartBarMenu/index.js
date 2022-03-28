import { connect } from "react-redux";

import StartBarMenu from "./StartBarMenu";

import { showWindow } from "../../actions/window.action";
import { WINDOW } from "../../constants";

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return {
    showExperienceWindow: () => dispatch(showWindow(WINDOW.EXPERIENCE)),
    showAboutMeWindow: () => dispatch(showWindow(WINDOW.ABOUT_ME)),
    showShutdownPopup: () => dispatch(showWindow(WINDOW.SHUTDOWN)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartBarMenu);
