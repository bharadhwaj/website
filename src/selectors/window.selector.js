import { createSelector } from "reselect";

const windowSelector = (state) => state?.window;

export const getActiveWindow = () => createSelector(windowSelector, (windowState) => windowState?.active);

export const isWindowOpen = (windowName) =>
  createSelector(windowSelector, (windowState) => !!windowState?.[windowName]?.visible);

export const isWindowMinimized = (windowName) =>
  createSelector(windowSelector, (windowState) => !!windowState?.[windowName]?.minimized);

export const isWindowMaximized = (windowName) =>
  createSelector(windowSelector, (windowState) => !!windowState?.[windowName]?.maximized);
