import { connect } from 'react-redux';

import ExperienceWindow from './ExperienceWindow';

import { windowAction } from '../../actions';
import { windowSelector } from '../../selectors';
import { WINDOW } from '../../constants';

const mapStateToProps = (state) => ({
  activeWindow: windowSelector.getActiveWindow(state),
  isVisible: windowSelector.isWindowOpen(WINDOW.EXPERIENCE)(state),
  isMinimized: windowSelector.isWindowMinimized(WINDOW.EXPERIENCE)(state),
  isMaximized: windowSelector.isWindowMaximized(WINDOW.EXPERIENCE)(state),
});

const mapDispatchToProps = (dispatch) => ({
  setExperienceWindowActive: () => dispatch(windowAction.setActiveWindow(WINDOW.EXPERIENCE)),
  minimizeWindow: () => dispatch(windowAction.minimizeWindow(WINDOW.EXPERIENCE)),
  toggleMaximizeWindow: () => {
    dispatch(windowAction.minimizeAllExcept(WINDOW.EXPERIENCE));
    dispatch(windowAction.toggleMaximizeWindow(WINDOW.EXPERIENCE));
  },
  closeWindow: () => dispatch(windowAction.closeWindow(WINDOW.EXPERIENCE)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceWindow);
