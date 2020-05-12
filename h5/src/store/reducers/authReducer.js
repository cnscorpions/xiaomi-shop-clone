import { createReducer } from "./reducerCreator";
import * as types from "../actionTypes/types";

const initialState = {
  isAuthed: false
};

const AuthReducer = createReducer(initialState, {
  [types.LOGIN]: (state = initialState, action) => {
    return {
      ...state,
      isAuthed: true
    };
  }
});

export default AuthReducer;
