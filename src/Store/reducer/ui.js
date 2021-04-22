import { SET_NAV_TAB } from '../static';

const initialState = {
  tab: 'message',
};

const uiInterface = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAV_TAB: {
      return {
        ...state,
        tab: action.payload,
      };
    }

    default:
      return state;
  }
};

export default uiInterface;
