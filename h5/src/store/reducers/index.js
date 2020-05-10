import { combineReducers } from "redux";
import CommonReducer from "./commonReducer";
import HomeReducer from "./homeReducer";
import SearchReducer from "./searchReducer";

const rootReducer = combineReducers({
  common: CommonReducer,
  home: HomeReducer,
  search: SearchReducer
});

export default rootReducer;
