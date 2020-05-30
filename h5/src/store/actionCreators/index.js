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

export const login = token => ({
  type: types.LOGIN,
  payload: token
});

export const addGoodsToCart = goods => ({
  type: types.ADD_GOODS_TO_CART,
  payload: goods
});

export const removeGoodsFromCart = goods => ({
  type: types.REMOVE_GOODS_TO_CART,
  payload: goods
});
