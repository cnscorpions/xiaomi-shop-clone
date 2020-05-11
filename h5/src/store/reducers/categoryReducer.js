import { createReducer } from "./reducerCreator";
import * as types from "../actionTypes/types";

const initialState = {
  setCate: "01"
};

const CategoryReducer = createReducer(initialState, {
  [types.SET_CATE]: (state = initialState, action) => {
    return {
      ...state,
      setCate: action.payload
    };
  }
});

export default CategoryReducer;
