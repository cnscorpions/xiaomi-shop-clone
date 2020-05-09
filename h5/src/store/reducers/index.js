import { combineReducers } from "redux";
import CommonReducer from "./commonReducer";

const rootReducer = combineReducers({
  common: CommonReducer
});

export default rootReducer;
