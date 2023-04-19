import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { rootReducer } from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";

const loggerMiddleware = (state) => (next) => (action) => {
  if (!action.type) return next(action);
  console.log("action:", action.type);
  console.log("Payload:", action.payload);
  console.log("CurrentState", store.getState());

  next(action);
  console.log("next state", store.getState());
};

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [loggerMiddleware];
const enhancedComposer = compose(applyMiddleware(...middleware));
export const store = createStore(persistedReducer, undefined, enhancedComposer);
export const persistor = persistStore(store);
