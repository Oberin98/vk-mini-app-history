import * as constants from "../../utils/constants";

export const initialState = {
  view: constants.INIT_VIEW,
  catalogHistory: [constants.CATALOG_PANEL],
  checkoutHistory: [constants.BASKET_PANEL],
  initHistory: [constants.INIT_PANEL],
  orderHistory: [constants.ORDER_PANEL],
};

export const onSetView = (_state, payload) => ({
  ...initialState,
  view: payload,
});

export const onSetPanel = (state, payload) => {
  const { history, panel, filters = [] } = payload;
  const { view } = state;

  const activeHistory = state[history].filter(
    (historyItem) => !filters.includes(historyItem)
  );

  if (
    activeHistory.length >= 2 &&
    activeHistory[activeHistory.length - 2] === panel
  ) {
    return {
      ...initialState,
      view,
      [history]: [...activeHistory.slice(0, activeHistory.length - 2), panel],
    };
  } else if (activeHistory[activeHistory.length - 1] === panel) {
    return {
      ...initialState,
      view,
      [history]: activeHistory,
    };
  } else {
    return {
      ...initialState,
      view,
      [history]: [...activeHistory, panel],
    };
  }
};

export const onHistoryFilter = (state, payload) => {
  const { history, filters } = payload;

  return {
    ...state,
    [history]: state[history].filter(
      (historyItem) => !filters.includes(historyItem)
    ),
  };
};
