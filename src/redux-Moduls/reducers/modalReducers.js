import initialState from "./initialState";
import { SHOWMODAL, HIDEMODAL } from "../actions";

export default function modalReducers(state = initialState, action) {
  switch (action.type) {
    case SHOWMODAL:
      return {
        ...state,
        modals: action.payload,
      };
    case HIDEMODAL:
      return {
        ...state,
        modals: action.payload,
      };
    default:
      return state;
  }
}
