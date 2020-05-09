import { createReducer } from "./reducerCreator";
import * as types from "../actionTypes/types";

const initialState = {
  nav: "recommend"
};

const HomeReducer = createReducer(initialState, {
  [types.SET_NAV]: (state = initialState, action) => {
    return {
      ...state,
      nav: action.payload
    };
  }
});

export default HomeReducer;
