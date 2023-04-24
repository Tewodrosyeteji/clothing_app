import { USER_ACTION_TYPES } from "./userType";
const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGNIN_FAILED:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
