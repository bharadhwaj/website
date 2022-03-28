import { connect } from "react-redux";

import ShutdownPopup from "./ShutdownPopup";

import { windowAction } from "../../actions";
import { windowSelector } from "../../selectors";
import { WINDOW } from "../../constants";

const mapStateToProps = (state) => ({
  isVisible: windowSelector.isWindowOpen(WINDOW.SHUTDOWN)(state),
});

const mapDispatchToProps = (dispatch) => ({
  closePopup: () => dispatch(windowAction.closeWindow(WINDOW.SHUTDOWN)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShutdownPopup);
