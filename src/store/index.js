import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import history from "./history";

const reducers = combineReducers({
  history,
});

export default createStore(reducers, compose(applyMiddleware(thunk)));
