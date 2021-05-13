import {
  SET_FRIEND_LIST,
  SET_CHAT_LIST,
  GET_CONVERSATION,
  SET_USER_INFO,
} from '../static';

const initialState = {
  users: [],
  chat: [],
  messages: {},
  selected: '',
  profile: {},
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIEND_LIST: {
      return {
        ...state,
        users: action.payload,
      };
    }

    case SET_CHAT_LIST: {
      return {
        ...state,
        chat: action.payload,
      };
    }

    case GET_CONVERSATION: {
      return {
        ...state,
        messages: action.payload,
        selected: action.track,
      };
    }

    case SET_USER_INFO: {
      return {
        ...state,
        profile: action.payload,
      };
    }

    default:
      return state;
  }
};

export default appData;
