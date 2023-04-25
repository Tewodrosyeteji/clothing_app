import { createAction } from "../../utils/reducer/reducer";
import { USER_ACTION_TYPES } from "./userType";
export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const signinWithGoogle = () =>
  createAction(USER_ACTION_TYPES.SIGNIN_WITH_GOOGLE_START);
export const signinWithEmail = (email, password) =>
  createAction(USER_ACTION_TYPES.SIGNIN_WITH_EMAIL_START, { email, password });
export const signinSucces = (user) =>
  createAction(USER_ACTION_TYPES.SIGNIN_SUCCESS, user);
export const signinFaild = (error) =>
  createAction(USER_ACTION_TYPES.SIGNIN_FAILED, error);

export const signupStart = (email, password, displayName) =>
  createAction(USER_ACTION_TYPES.SIGNUP_START, {
    email,
    password,
    displayName,
  });
export const singupSuccess = (user, additionalDetails) =>
  createAction(USER_ACTION_TYPES.SIGNUP_SUCCESS, { user, additionalDetails });
export const signupFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGNUP_FAILED, error);

export const signoutStart = () => createAction(USER_ACTION_TYPES.SIGNOUT_START);
export const signoutSuccess = () =>
  createAction(USER_ACTION_TYPES.SIGNOUT_SUCCESS);
export const signoutFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGNOUT_FAILED);
