import { actions } from "../constants";

export const setActiveWindow = (windowName) => ({
  type: actions.WINDOW.SET_ACTIVE_WINDOW,
  payload: { windowName },
});

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

export const toggleMaximizeWindow = (windowName) => ({
  type: actions.WINDOW.TOGGLE_MAXIMIZE_WINDOW,
  payload: { windowName },
});

export const minimizeAllExcept = (windowName) => ({
  type: actions.WINDOW.MINIMIZE_ALL_EXCEPT,
  payload: { windowName },
});
