import { combineReducers } from "redux";
import searchReducers from "./searchReducers";

import showbrandinfo from "./brandsReducers";

/* 작성예시
 */
const rootReducer = combineReducers({
  brandSearch: searchReducers,

  showInfo: showbrandinfo,
});

export default rootReducer;
