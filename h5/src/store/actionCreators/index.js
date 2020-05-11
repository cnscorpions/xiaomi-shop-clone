import * as types from "../actionTypes/types";

export const selectTabActionCreator = tab => ({
  type: types.SELECT_TAB,
  payload: tab
});

export const selectNavActionCreator = nav => ({
  type: types.SET_NAV,
  payload: nav
});

export const hideDownloadAppBanner = () => ({
  type: types.HIDE_DOWNLOAD_APP_BANNER
});

export const addSearchHistory = history => ({
  type: types.ADD_SEARCH_HISTORY,
  payload: history
});

export const removeAllSearchHistory = () => ({
  type: types.REMOVE_ALL_SEARCH_HISTORY
});

export const setCate = cate => ({
  type: types.SET_CATE,
  payload: cate
});
