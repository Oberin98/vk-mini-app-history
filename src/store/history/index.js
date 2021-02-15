import * as types from "./actionTypes";
import { initialState, onHistoryFilter, onSetPanel, onSetView } from "./utils";

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_VIEW:
      return onSetView(state, action.payload);

    case types.SET_PANEL:
      return onSetPanel(state, action.payload);

    case types.FILTER_HISTORY:
      return onHistoryFilter(state, action.payload);

    default:
      return state;
  }
};

export default historyReducer;
