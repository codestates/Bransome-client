import initialState from "./initialState";
import { DETAILS, ADD_BRAND } from "../actions";

const showBrandInfo = (state = initialState, action) => {
  switch (action.type) {
    case DETAILS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default showBrandInfo;
