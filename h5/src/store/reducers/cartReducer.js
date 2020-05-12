import { createReducer } from "./reducerCreator";
import * as types from "../actionTypes/types";

const initialState = {
  goods: []
};

const CartReducer = createReducer(initialState, {
  [types.ADD_GOODS_TO_CART]: (state = initialState, action) => {
    return {
      ...state,
      goods: [...state.goods, action.payload]
    };
  }
});

export default CartReducer;
