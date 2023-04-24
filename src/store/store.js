import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { rootReducer } from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga"
import { rootSaga } from "./rootSaga";



const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware=createSagaMiddleware();

const middleware = [process.env.NODE_ENV !== 'production' && logger,sagaMiddleware].filter(Boolean);

const composeEnhancer=(process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||compose
const enhancedComposer = composeEnhancer(applyMiddleware(...middleware));
export const store = createStore(persistedReducer, undefined, enhancedComposer);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
