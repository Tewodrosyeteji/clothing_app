import { USER_ACTION_TYPES } from "./userType";
import { AnyAction } from "redux";
import { userData } from "../../utils/firebase/firebase";
import {
  signinFaild,
  signinSucces,
  signoutFailed,
  signoutSuccess,
  signupFailed,
} from "./userAction";
export type userState = {
  readonly currentUser: userData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};
const INITIAL_STATE: userState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): userState => {
  if (signinSucces.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }

  if (signoutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
    };
  }
  if (
    signinFaild.match(action) ||
    signoutFailed.match(action) ||
    signupFailed.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
    };
  }
  return state;
};
