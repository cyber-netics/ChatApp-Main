import { TEST } from '../static';

const initialState = {};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case TEST: {
      return {
        ...state,
        data: action.payload,
      };
    }

    default:
      return state;
  }
};

export default appData;