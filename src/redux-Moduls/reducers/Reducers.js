import { combineReducers } from "redux";

import showbrandinfo from "./brandsReducers";

/* 작성예시
 */
const rootReducer = combineReducers({
  showInfo: showbrandinfo,
});

export default rootReducer;
