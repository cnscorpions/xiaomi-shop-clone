import { createReducer } from "./reducerCreator";
import * as types from "../actionTypes/types";

const initialState = {
  isAuthed: false,
  token: null
};

const AuthReducer = createReducer(initialState, {
  [types.LOGIN]: (state = initialState, action) => {
    return {
      isAuthed: true,
      token: action.payload
    };
  }
});

export default AuthReducer;
