import { SET_SELECTED } from "../actions/types";

export default function(state = 0, action) {
  switch (action.type) {
    case SET_SELECTED:
      return action.payload;
    default:
      return state;
  }
}
