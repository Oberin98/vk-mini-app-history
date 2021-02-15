import * as types from "./actionTypes";

export const setView = (payload) => ({
  type: types.SET_VIEW,
  payload,
});

export const setPanel = (payload) => ({
  type: types.SET_PANEL,
  payload,
});

export const filterHistory = (payload) => ({
  type: types.FILTER_HISTORY,
  payload,
});
