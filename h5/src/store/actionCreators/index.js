import * as types from "../actionTypes/types";

export const selectTabActionCreator = tab => ({
  type: types.SELECT_TAB,
  payload: tab
});
