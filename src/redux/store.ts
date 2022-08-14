// ** Redux, Thunk & Root Reducer Imports
import thunk from "redux-thunk";
import rootReducer from "./reducers/root.reducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// ** init middleware
const middleware = [thunk];
// ** Dev Tools
// const composeEnhancers = compose || window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

// ** Create store
const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middleware))
);

export { store };
