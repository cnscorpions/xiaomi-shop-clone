import { createReducer } from "./reducerCreator";
import * as types from "../actionTypes/types";

const initialState = {
  historyList: []
};

const SearchReducer = createReducer(initialState, {
  [types.ADD_SEARCH_HISTORY]: (state = initialState, action) => {
    return {
      ...state,
      historyList: [...state.historyList, action.payload]
    };
  },
  [types.REMOVE_ALL_SEARCH_HISTORY]: (state = initialState, action) => {
    return {
      ...state,
      historyList: []
    };
  }
});

export default SearchReducer;
