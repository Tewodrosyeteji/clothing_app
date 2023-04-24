import { createAction } from "../../utils/reducer/reducer";
import { USER_ACTION_TYPES } from "./userType";
export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const signinWithGoogle = () =>
  createAction(USER_ACTION_TYPES.SIGNIN_WITH_GOOGLE);
export const signinWithEmail = (email, password) =>
  createAction(USER_ACTION_TYPES.SIGNIN_WITH_EMAIL, { email, password });
export const signinSucces = (user) =>
  createAction(USER_ACTION_TYPES.SIGNIN_SUCCESS, user);
export const signinFaild = (error) =>
  createAction(USER_ACTION_TYPES.SIGNIN_FAILED, error);
