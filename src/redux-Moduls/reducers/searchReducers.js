import { SEARCH_BRAND, FETCH_BRANDS, FETCH_BRAND, LOADING } from "../actions";
import initialState from "./initialState";
export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_BRAND:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    case FETCH_BRANDS:
      return {
        ...state,
        brands: action.payload,
        loading: false,
      };
    case FETCH_BRAND:
      return {
        ...state,
        brand: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
