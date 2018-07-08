import * as types from './actionTypes';

export const selectComponent = (component) => ({
  type: types.SELECT_COMPONENT,
  payload: component,
});

export const selectProject = (project) => ({
  type: types.SELECT_PROJECT,
  payload: project,
});

export const randomHello = () => ({
  type: types.RANDOM_HELLO,
});
