import { createReducer } from "./reducerCreator";
import * as types from "../actionTypes/types";

const initialState = {
  isShowDownloadAppBanner: true
};

const CommonReducer = createReducer(initialState, {
  [types.HIDE_DOWNLOAD_APP_BANNER]: (state = initialState, action) => {
    return {
      ...state,
      isShowDownloadAppBanner: false
    };
  }
});

export default CommonReducer;
