import { actions, utils } from '../constants';

const initialState = {
  active: null,
  [utils.WINDOW_VARIABLES.EXPERIENCE]: {
    show: false,
    minimize: false,
  },
  [utils.WINDOW_VARIABLES.EDUCATION]: {
    show: false,
    minimize: false,
  },
  [utils.WINDOW_VARIABLES.ABOUT_ME]: {
    show: false,
    minimize: false,
  },
  [utils.WINDOW_VARIABLES.LINKS]: {
    show: false,
    minimize: false,
  },
  [utils.WINDOW_VARIABLES.SHUTDOWN]: {
    show: false,
  },
};

export default function windowReducer(state = initialState, action) {
  switch (action.type) {
    case actions.WINDOW.SET_ACTIVE_WINDOW:
      return {
        ...state,
        active: action.payload.window,
      };

    case actions.WINDOW.SET_EXPERIENCE_WINDOW_VISIBILITY:
      return {
        ...state,
        active: utils.WINDOW_NAME.EXPERIENCE,
        [utils.WINDOW_VARIABLES.EXPERIENCE]: {
          ...state[utils.WINDOW_VARIABLES.EXPERIENCE],
          show: action.payload.isVisible,
          minimize: false,
        },
      };

    case actions.WINDOW.SET_EXPERIENCE_WINDOW_MINIMIZE:
      return {
        ...state,
        [utils.WINDOW_VARIABLES.EXPERIENCE]: {
          ...state[utils.WINDOW_VARIABLES.EXPERIENCE],
          minimize: action.payload.isMinimized,
        },
      };

    case actions.WINDOW.SET_EDUCATION_WINDOW_VISIBILITY:
      return {
        ...state,
        active: utils.WINDOW_NAME.EDUCATION,
        [utils.WINDOW_VARIABLES.EDUCATION]: {
          ...state[utils.WINDOW_VARIABLES.EDUCATION],
          show: action.payload.isVisible,
          minimize: false,
        },
      };

    case actions.WINDOW.SET_EDUCATION_WINDOW_MINIMIZE:
      return {
        ...state,
        [utils.WINDOW_VARIABLES.EDUCATION]: {
          ...state[utils.WINDOW_VARIABLES.EDUCATION],
          minimize: action.payload.isMinimized,
        },
      };

    case actions.WINDOW.SET_ABOUT_ME_WINDOW_VISIBILITY:
      return {
        ...state,
        active: utils.WINDOW_NAME.ABOUT_ME,
        [utils.WINDOW_VARIABLES.ABOUT_ME]: {
          ...state[utils.WINDOW_VARIABLES.ABOUT_ME],
          show: action.payload.isVisible,
          minimize: false,
        },
      };

    case actions.WINDOW.SET_ABOUT_ME_WINDOW_MINIMIZE:
      return {
        ...state,
        [utils.WINDOW_VARIABLES.ABOUT_ME]: {
          ...state[utils.WINDOW_VARIABLES.ABOUT_ME],
          minimize: action.payload.isMinimized,
        },
      };

    case actions.WINDOW.SET_LINKS_WINDOW_VISIBILITY:
      return {
        ...state,
        active: utils.WINDOW_NAME.LINKS,
        [utils.WINDOW_VARIABLES.LINKS]: {
          ...state[utils.WINDOW_VARIABLES.LINKS],
          show: action.payload.isVisible,
          minimize: false,
        },
      };

    case actions.WINDOW.SET_LINKS_WINDOW_MINIMIZE:
      return {
        ...state,
        [utils.WINDOW_VARIABLES.LINKS]: {
          ...state[utils.WINDOW_VARIABLES.LINKS],
          minimize: action.payload.isMinimized,
        },
      };

    case actions.WINDOW.SET_SHUTDOWN_POPUP_VISIBILITY:
      return {
        ...state,
        active: utils.WINDOW_NAME.SHUTDOWN,
        [utils.WINDOW_VARIABLES.SHUTDOWN]: {
          ...state[utils.WINDOW_VARIABLES.SHUTDOWN],
          show: action.payload.isVisible,
        },
      };

    case actions.WINDOW.MINIMIZE_ALL_EXCEPT:
      return {
        ...state,
        [utils.WINDOW_VARIABLES.EXPERIENCE]: {
          ...state[utils.WINDOW_VARIABLES.EXPERIENCE],
          minimize: true,
        },
        [utils.WINDOW_VARIABLES.EDUCATION]: {
          ...state[utils.WINDOW_VARIABLES.EDUCATION],
          minimize: true,
        },
        [utils.WINDOW_VARIABLES.ABOUT_ME]: {
          ...state[utils.WINDOW_VARIABLES.ABOUT_ME],
          minimize: true,
        },
        [utils.WINDOW_VARIABLES.LINKS]: {
          ...state[utils.WINDOW_VARIABLES.LINKS],
          minimize: true,
        },
        [action.payload.windowName]: {
          ...state[action.payload.windowName],
          minimize: false,
        },
      };

    default:
      return { ...state };
  }
}
