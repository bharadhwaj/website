import { createSelector } from 'reselect';

const selectActiveWindowState = state => state.window.active;
const selectExperienceWindowState = state => state.window.experience;
const selectEducationWindowState = state => state.window.education;
const selectAboutMeWindowState = state => state.window.aboutme;
const selectLinksWindowState = state => state.window.links;
const selectShutdownPopupState = state => state.window.shutdown;

export const getActiveWindow = () =>
  createSelector(selectActiveWindowState, activeWindow => activeWindow);

export const showExperienceWindow = () =>
  createSelector(
    selectExperienceWindowState,
    experienceWindow => experienceWindow.show
  );

export const minimizeExperienceWindow = () =>
  createSelector(
    selectExperienceWindowState,
    experienceWindow => experienceWindow.minimize
  );

export const showEducationWindow = () =>
  createSelector(
    selectEducationWindowState,
    educationWindow => educationWindow.show
  );

export const minimizeEducationWindow = () =>
  createSelector(
    selectEducationWindowState,
    educationWindow => educationWindow.minimize
  );

export const showAboutMeWindow = () =>
  createSelector(selectAboutMeWindowState, aboutMeWindow => aboutMeWindow.show);

export const minimizeAboutMeWindow = () =>
  createSelector(
    selectAboutMeWindowState,
    aboutMeWindow => aboutMeWindow.minimize
  );

export const showLinksWindow = () =>
  createSelector(selectLinksWindowState, linksWindow => linksWindow.show);

export const minimizeLinksWindow = () =>
  createSelector(selectLinksWindowState, linksWindow => linksWindow.minimize);

export const showShutdownPopup = () =>
  createSelector(selectShutdownPopupState, shutdownPopup => shutdownPopup.show);
