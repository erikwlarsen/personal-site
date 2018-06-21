import * as types from './actionTypes';

export const selectComponent = (component) => ({
  type: types.SELECT_COMPONENT,
  payload: component,
});
