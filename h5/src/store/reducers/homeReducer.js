import { createReducer } from "./reducerCreator";
import * as types from "../actionTypes/types";

const initialState = {
  nav: "recommend",
  selectedTab: "/"
};

const HomeReducer = createReducer(initialState, {
  [types.SET_NAV]: (state = initialState, action) => {
    return {
      ...state,
      nav: action.payload
    };
  },
  [types.SELECT_TAB]: (state, action) => {
    return {
      ...state,
      selectedTab: action.payload
    };
  }
});

export default HomeReducer;
