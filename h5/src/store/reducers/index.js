import { combineReducers } from "redux";
import CommonReducer from "./commonReducer";
import HomeReducer from "./homeReducer";

const rootReducer = combineReducers({
  common: CommonReducer,
  home: HomeReducer
});

export default rootReducer;
