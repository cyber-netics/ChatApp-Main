import {
  SET_FRIEND_LIST,
  SET_CHAT_LIST,
} from '../static';

const initialState = {
  friendList: [],
  chatList: [],
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIEND_LIST: {
      return {
        ...state,
        friendList: action.payload,
      };
    }

    case SET_CHAT_LIST: {
      return {
        ...state,
        chatList: action.payload,
      };
    }

    default:
      return state;
  }
};

export default appData;
