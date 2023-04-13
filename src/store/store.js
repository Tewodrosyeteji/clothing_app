import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { rootReducer } from "./rootReducer";
import logger from "redux-logger";
const middleware = [logger];
const enhancedComposer = compose(applyMiddleware(...middleware));
export const store = createStore(rootReducer, undefined, enhancedComposer);
