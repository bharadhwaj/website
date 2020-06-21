import { actions } from '../constants';

export const setActiveWindow = (window) => ({
  type: actions.WINDOW.SET_ACTIVE_WINDOW,
  payload: { window },
});

export const setExperienceWindowVisibility = (isVisible) => ({
  type: actions.WINDOW.SET_EXPERIENCE_WINDOW_VISIBILITY,
  payload: { isVisible },
});

export const setExperienceWindowMinimize = (isMinimized) => ({
  type: actions.WINDOW.SET_EXPERIENCE_WINDOW_MINIMIZE,
  payload: { isMinimized },
});

export const setEducationWindowVisibility = (isVisible) => ({
  type: actions.WINDOW.SET_EDUCATION_WINDOW_VISIBILITY,
  payload: { isVisible },
});

export const setEducationWindowMinimize = (isMinimized) => ({
  type: actions.WINDOW.SET_EDUCATION_WINDOW_MINIMIZE,
  payload: { isMinimized },
});

export const setAboutMeWindowVisibility = (isVisible) => ({
  type: actions.WINDOW.SET_ABOUT_ME_WINDOW_VISIBILITY,
  payload: { isVisible },
});

export const setAboutMeWindowMinimize = (isMinimized) => ({
  type: actions.WINDOW.SET_ABOUT_ME_WINDOW_MINIMIZE,
  payload: { isMinimized },
});

export const setLinksWindowVisibility = (isVisible) => ({
  type: actions.WINDOW.SET_LINKS_WINDOW_VISIBILITY,
  payload: { isVisible },
});

export const setLinksWindowMinimize = (isMinimized) => ({
  type: actions.WINDOW.SET_LINKS_WINDOW_MINIMIZE,
  payload: { isMinimized },
});

export const setShutdownPopupVisibility = (isVisible) => ({
  type: actions.WINDOW.SET_SHUTDOWN_POPUP_VISIBILITY,
  payload: { isVisible },
});

export const minimizeAllExcept = (windowName) => ({
  type: actions.WINDOW.MINIMIZE_ALL_EXCEPT,
  payload: { windowName },
});
