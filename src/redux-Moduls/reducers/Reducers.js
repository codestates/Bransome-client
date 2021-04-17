import { combineReducers } from "redux";
import searchReducers from "./searchReducers";
import authModalReducers from "./authModalReducers";
import showbrandinfo from "./brandsReducers";

/* 작성예시
 */
const rootReducer = combineReducers({
  brandSearch: searchReducers,
  authModalReducers,
  showInfo: showbrandinfo,
});

export default rootReducer;
