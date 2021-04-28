import { SET_NAV_TAB } from '../static';

const initialState = {
  nav: {
    name: 'chat',
    action: 'getMessage',
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

    default:
      return state;
  }
};

export default uiInterface;
