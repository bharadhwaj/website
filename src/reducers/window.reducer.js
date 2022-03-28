import { actions, WINDOW } from "../constants";

const initialState = {
  active: null,
  [WINDOW.EXPERIENCE]: {
    visible: false,
    minimized: false,
    maximized: false,
  },
  [WINDOW.EDUCATION]: {
    visible: false,
    minimized: false,
    maximized: false,
  },
  [WINDOW.ABOUT_ME]: {
    visible: false,
    minimized: false,
    maximized: false,
  },
  [WINDOW.LINKS]: {
    visible: false,
    minimized: false,
    maximized: false,
  },
};

export default function windowReducer(state = initialState, action) {
  switch (action.type) {
    case actions.WINDOW.SET_ACTIVE_WINDOW:
      return {
        ...state,
        active: action.payload.window,
      };

    case actions.WINDOW.SHOW_WINDOW:
      return {
        ...state,
        active: action.payload.windowName,
        [action.payload.windowName]: {
          ...state[action.payload.windowName],
          visible: true,
          minimized: false,
        },
      };

    case actions.WINDOW.MINIMIZE_WINDOW:
      return {
        ...state,
        [action.payload.windowName]: {
          ...state[action.payload.windowName],
          minimized: true,
        },
      };

    case actions.WINDOW.CLOSE_WINDOW:
      return {
        ...state,
        active: null,
        [action.payload.windowName]: {
          visible: false,
          minimized: false,
          maximized: false,
        },
      };

    case actions.WINDOW.TOGGLE_MAXIMIZE_WINDOW:
      return {
        ...state,
        active: action.payload.windowName,
        [action.payload.windowName]: {
          ...state[action.payload.windowName],
          maximized: !state[action.payload.windowName].maximized,
          minimized: false,
        },
      };

    case actions.WINDOW.MINIMIZE_ALL_EXCEPT:
      return {
        ...state,
        [WINDOW.EXPERIENCE]: {
          ...state[WINDOW.EXPERIENCE],
          minimized: true,
        },
        [WINDOW.EDUCATION]: {
          ...state[WINDOW.EDUCATION],
          minimized: true,
        },
        [WINDOW.ABOUT_ME]: {
          ...state[WINDOW.ABOUT_ME],
          minimized: true,
        },
        [WINDOW.LINKS]: {
          ...state[WINDOW.LINKS],
          minimized: true,
        },
        [action.payload.windowName]: {
          ...state[action.payload.windowName],
          minimized: false,
        },
      };

    default:
      return { ...state };
  }
}
