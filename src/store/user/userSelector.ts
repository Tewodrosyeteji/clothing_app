import { createSelector } from "reselect";
import { userState } from "./userReducer";

export const selectUserReducer = (state): userState => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);
