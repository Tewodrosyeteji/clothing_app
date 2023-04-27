import { Middleware } from "redux";
import { rootState } from "../store/store";

export const loggerMiddleware: Middleware<{}, rootState> =
  (store) => (next) => (action) => {
    if (!action.type) return next(action);
    console.log("action:", action.type);
    console.log("Payload:", action.payload);
    console.log("CurrentState", store.getState());

    next(action);
    console.log("next state", store.getState());
  };
