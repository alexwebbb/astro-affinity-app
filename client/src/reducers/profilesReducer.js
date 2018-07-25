import { FETCH_PROFILES } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_PROFILES:
      return action.payload;
    default:
      return state;
  }
}
