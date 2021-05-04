import {
  SET_NAV_TAB,
  SET_DRAWER_STATE,
} from '../static';

const initialState = {
  nav: {
    name: 'chat',
    action: 'getMessage',
  },
  drawer: {
    isOpen: true,
  },
};

const uiInterface = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAV_TAB: {
      return {
        ...state,
        nav: action.payload,
      };
    }

    case SET_DRAWER_STATE: {
      return {
        ...state,
        drawer: {
          ...state.drawer,
          ...action.payload,
        },
      };
    }

    default:
      return state;
  }
};

export default uiInterface;
