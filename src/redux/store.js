import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [];
window.devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer,

  compose(
    applyMiddleware(...middlewares),
    typeof window === "object" &&
      typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : (f) => f
  )
);

export const persistor = persistStore(store);

export default { store, persistStore };
