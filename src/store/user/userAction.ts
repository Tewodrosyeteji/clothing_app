import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer";
import { USER_ACTION_TYPES } from "./userType";
import { userData, otherInfo } from "../../utils/firebase/firebase";

export type checkUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;
export type setCurrentUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  userData
>;
export type signinWithGoogle =
  Action<USER_ACTION_TYPES.SIGNIN_WITH_GOOGLE_START>;
export type signinWithEmail = ActionWithPayload<
  USER_ACTION_TYPES.SIGNIN_WITH_EMAIL_START,
  { email: string; password: string }
>;
export type signinSucces = ActionWithPayload<
  USER_ACTION_TYPES.SIGNIN_SUCCESS,
  userData
>;
export type signinFaild = ActionWithPayload<
  USER_ACTION_TYPES.SIGNIN_FAILED,
  Error
>;
export type signupStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGNUP_START,
  {
    email: string;
    password: string;
    displayName: string;
  }
>;
export type singupSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGNUP_SUCCESS,
  { user: userData; additionalDetails: otherInfo }
>;
export type signupFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGNUP_FAILED,
  Error
>;
export type signoutStart = Action<USER_ACTION_TYPES.SIGNOUT_START>;
export type signoutSuccess = Action<USER_ACTION_TYPES.SIGNOUT_SUCCESS>;
export type signoutFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGNOUT_FAILED,
  Error
>;

export const checkUserSession = withMatcher(
  (): checkUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
);
export const setCurrentUser = withMatcher(
  (user: userData): setCurrentUser =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
);
export const signinWithGoogle = withMatcher(
  (): signinWithGoogle =>
    createAction(USER_ACTION_TYPES.SIGNIN_WITH_GOOGLE_START)
);
export const signinWithEmail = (email: string, password: string) =>
  createAction(USER_ACTION_TYPES.SIGNIN_WITH_EMAIL_START, { email, password });
export const signinSucces = withMatcher(
  (user: userData): signinSucces =>
    createAction(USER_ACTION_TYPES.SIGNIN_SUCCESS, user)
);
export const signinFaild = withMatcher(
  (error: Error): signinFaild =>
    createAction(USER_ACTION_TYPES.SIGNIN_FAILED, error)
);

export const signupStart = withMatcher(
  (email: string, password: string, displayName: string): signupStart =>
    createAction(USER_ACTION_TYPES.SIGNUP_START, {
      email,
      password,
      displayName,
    })
);
export const singupSuccess = withMatcher(
  (user: userData, additionalDetails: otherInfo): singupSuccess =>
    createAction(USER_ACTION_TYPES.SIGNUP_SUCCESS, { user, additionalDetails })
);

export const signupFailed = withMatcher(
  (error: Error): signupFailed =>
    createAction(USER_ACTION_TYPES.SIGNUP_FAILED, error)
);

export const signoutStart = withMatcher(
  (): signoutStart => createAction(USER_ACTION_TYPES.SIGNOUT_START)
);
export const signoutSuccess = withMatcher(
  (): signoutSuccess => createAction(USER_ACTION_TYPES.SIGNOUT_SUCCESS)
);
export const signoutFailed = withMatcher(
  (error: Error): signoutFailed =>
    createAction(USER_ACTION_TYPES.SIGNOUT_FAILED, error)
);
