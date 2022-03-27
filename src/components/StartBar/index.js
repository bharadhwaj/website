import { connect } from 'react-redux';

import StartBar from './StartBar';

import { windowAction } from '../../actions';
import { windowSelector } from '../../selectors';
import { WINDOW } from '../../constants';

const mapStateToProps = (state) => ({
  isAboutMeWindowVisible: windowSelector.isWindowOpen(WINDOW.ABOUT_ME)(state),
  isAboutMeWindowMinimized: windowSelector.isWindowMinimized(WINDOW.ABOUT_ME)(state),
  isEducationWindowVisible: windowSelector.isWindowOpen(WINDOW.EDUCATION)(state),
  isEducationWindowMinimized: windowSelector.isWindowMinimized(WINDOW.EDUCATION)(state),
  isExperienceWindowVisible: windowSelector.isWindowOpen(WINDOW.EXPERIENCE)(state),
  isExperienceWindowMinimized: windowSelector.isWindowMinimized(WINDOW.EXPERIENCE)(state),
});

const mapDispatchToProps = (dispatch) => ({
  setVisibility: (windowName, isVisible) => {
    if (isVisible) {
      dispatch(windowAction.showWindow(windowName));
    } else {
      dispatch(windowAction.minimizeWindow(windowName));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StartBar);
