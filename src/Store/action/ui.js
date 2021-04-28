import { SET_NAV_TAB } from '../static';

export const navTab = (tab) => {
  return (dispatch) => {
    dispatch({
      type: SET_NAV_TAB,
      payload: tab,
    });
  };
};
