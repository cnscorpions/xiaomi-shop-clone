import { createReducer } from "./reducerCreator";
import * as types from "../actionTypes/types";

const initialState = {
  selectedTab: "/"
};

const CommonReducer = createReducer(initialState, {
  [types.SELECT_TAB]: (state, action) => {
    return {
      ...state,
      selectedTab: action.payload
    };
  }
});

export default CommonReducer;
