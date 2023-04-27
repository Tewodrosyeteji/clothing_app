import { createSelector } from "reselect";
import { userState } from "./userReducer";
import { rootState } from "../store";

export const selectUserReducer = (state: rootState): userState => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);
