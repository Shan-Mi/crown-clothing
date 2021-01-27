import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

// config middleware, can check it out on redux docs
// middleware is an array
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
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

sagaMiddleware.run(rootSaga);
// pass each individuel saga inside of run

export const persistor = persistStore(store);
// a persisted version of our store
// don't really need to export the upper two

export default { store, persistor };
