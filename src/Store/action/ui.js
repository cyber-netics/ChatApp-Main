import {
  SET_NAV_TAB,
  SET_DRAWER_STATE,
} from '../static';

export const navTab = (tab) => {
  return (dispatch) => {
    dispatch({
      type: SET_NAV_TAB,
      payload: tab,
    });
  };
};

export const toggleDrawer = (action) => {
  return (dispatch, getState) => {
    const state = getState().ui.drawer;
    const isOpen = action || !state.isOpen;

    dispatch({
      type: SET_DRAWER_STATE,
      payload: { isOpen: isOpen },
    });
  };
};
