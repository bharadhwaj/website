import { connect } from 'react-redux';

import EducationWIndow from './EducationWIndow';

import { windowAction } from '../../actions';
import { WINDOW } from '../../constants';
import { windowSelector } from '../../selectors';

const mapStateToProps = (state) => ({
  activeWindow: windowSelector.getActiveWindow(state),
  isVisible: windowSelector.isWindowOpen(WINDOW.EDUCATION)(state),
  isMinimized: windowSelector.isWindowMinimized(WINDOW.EDUCATION)(state),
  isMaximized: windowSelector.isWindowMaximized(WINDOW.EDUCATION)(state),
});

const mapDispatchToProps = (dispatch) => ({
  setEducationWindowActive: () => dispatch(windowAction.setActiveWindow(WINDOW.EDUCATION)),
  minimizeWindow: () => dispatch(windowAction.minimizeWindow(WINDOW.EDUCATION)),
  toggleMaximizeWindow: () => {
    dispatch(windowAction.minimizeAllExcept(WINDOW.EDUCATION));
    dispatch(windowAction.toggleMaximizeWindow(WINDOW.EDUCATION));
  },
  closeWindow: () => dispatch(windowAction.closeWindow(WINDOW.EDUCATION)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EducationWIndow);
