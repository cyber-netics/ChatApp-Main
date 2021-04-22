import { TEST } from '../static';

export const getFriends = () => {
  return async (dispatch) => {
    dispatch({
      type: TEST,
      payload: 'data',
    });
  };
};
