import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

// config middleware, can check it out on redux docs
// middleware is an array
// const middlewares = [];
const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
// a persisted version of our store
// don't really need to export the upper two

export default { store, persistor };
