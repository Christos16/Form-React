import { SET_USER, LOADING_USER } from './types';

export const setLoading = () => dispatch => {
  dispatch({ type: LOADING_USER, payload: true });
};

export const setUserForm = userData => dispatch => {
  dispatch({ type: SET_USER, payload: userData });
};
