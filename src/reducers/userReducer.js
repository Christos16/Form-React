import { SET_USER, LOADING_USER } from '../actions/types';

const initialState = {
  User: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        User: action.payload,
        loading: false
      };
    case LOADING_USER:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
}
