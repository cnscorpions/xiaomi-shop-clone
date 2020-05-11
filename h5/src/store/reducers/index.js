import { combineReducers } from "redux";
import CommonReducer from "./commonReducer";
import HomeReducer from "./homeReducer";
import SearchReducer from "./searchReducer";
import CategoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  common: CommonReducer,
  home: HomeReducer,
  search: SearchReducer,
  category: CategoryReducer
});

export default rootReducer;
