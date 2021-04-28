import {
  SET_FRIEND_LIST,
  SET_CHAT_LIST,
  GET_CONVERSATION,
} from '../static';

// ** DEV_DATASET
import { friendUsers } from '../../__Dataset/friendsList';
import { chatLists } from '../../__Dataset/latestChat';
import { conversation } from '../../__Dataset/messages';
// ** **/

export const getFriends = () => {
  return async (dispatch) => {
    // Dev
    const dataset = await Promise.all(friendUsers);
    dispatch({
      type: SET_FRIEND_LIST,
      payload: dataset,
    });
  };
};

export const getChat = () => {
  return async (dispatch) => {
    // Dev
    const dataset = await Promise.all(chatLists);
    dispatch({
      type: SET_CHAT_LIST,
      payload: dataset,
    });
  };
};

export const getMessage = (id) => {
  return async (dispatch) => {
    const messages = await Promise.all(
      conversation[id],
    );

    dispatch({
      type: GET_CONVERSATION,
      payload: messages,
    });
  };
};