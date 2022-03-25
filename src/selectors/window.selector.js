import { createSelector } from 'reselect';

const windowSelector = (state) => state?.window;
const activeWindowSelector = (state) => state?.window?.active;

export const getActiveWindow = () => createSelector(activeWindowSelector, (activeWindow) => !activeWindow);

export const isWindowOpen = (windowName) => createSelector(windowSelector, (window) => !!window?.[windowName]?.visible);

export const isWindowMinimized = (windowName) =>
  createSelector(windowSelector, (window) => !!window?.[windowName]?.minimized);

export const isWindowMaximized = (windowName) =>
  createSelector(windowSelector, (window) => !!window?.[windowName]?.maximized);
