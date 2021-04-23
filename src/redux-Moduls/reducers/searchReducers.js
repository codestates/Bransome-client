import { act } from "react-dom/test-utils";
import { LOADING, SEARCH_BRAND, FIND_BRAND } from "../actions";
import initialState from "./initialState";

export const searchChangeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH_BRAND:
      return {
        ...state,
        searchField: action.payload,
      };
    default:
      return state;
  }
};

export const fetchBrandsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FIND_BRAND:
      return {
        ...state,
        brands: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
