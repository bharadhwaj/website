import { actions } from '../constants';

export const showWindow = (windowName) => ({
  type: actions.WINDOW.SHOW_WINDOW,
  payload: { windowName },
});

export const minimizeWindow = (windowName) => ({
  type: actions.WINDOW.MINIMIZE_WINDOW,
  payload: { windowName },
});

export const closeWindow = (windowName) => ({
  type: actions.WINDOW.CLOSE_WINDOW,
  payload: { windowName },
});

export const maximizeWindow = (windowName) => ({
  type: actions.WINDOW.MAXIMIZE_WINDOW,
  payload: { windowName },
});

export const setActiveWindow = (windowName) => ({
  type: actions.WINDOW.SET_ACTIVE_WINDOW,
  payload: { windowName },
});

export const minimizeAllExcept = (windowName) => ({
  type: actions.WINDOW.MINIMIZE_ALL_EXCEPT,
  payload: { windowName },
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
