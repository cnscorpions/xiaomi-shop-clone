import { combineReducers } from "redux";
import CommonReducer from "./commonReducer";
import HomeReducer from "./homeReducer";
import SearchReducer from "./searchReducer";
import CategoryReducer from "./categoryReducer";
import AuthReducer from "./authReducer";
import CartReducer from "./cartReducer";

const rootReducer = combineReducers({
  common: CommonReducer,
  home: HomeReducer,
  search: SearchReducer,
  category: CategoryReducer,
  auth: AuthReducer,
  cart: CartReducer
});

export default rootReducer;
