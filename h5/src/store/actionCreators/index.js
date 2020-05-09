import * as types from "../actionTypes/types";

export const selectTabActionCreator = tab => ({
  type: types.SELECT_TAB,
  payload: tab
});

export const selectNavActionCreator = nav => ({
  type: types.SET_NAV,
  payload: nav
});
