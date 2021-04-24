import { combineReducers } from "redux";
import searchReducer from "./searchReducers";
import showbrandinfo from "./brandsReducers";

/* 작성예시
 */
const rootReducer = combineReducers({
  // brandSearch: searchReducer,
  showInfo: showbrandinfo,
});

export default rootReducer;
