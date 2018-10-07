import * as types from './actionTypes';

export const selectComponent = component => ({
  type: types.SELECT_COMPONENT,
  payload: component,
});

export const selectProject = project => ({
  type: types.SELECT_PROJECT,
  payload: project,
});

export const randomHello = () => ({
  type: types.RANDOM_HELLO,
});

export const startDrawing = () => ({
  type: types.START_DRAWING,
});

export const stopDrawing = () => ({
  type: types.STOP_DRAWING,
});

export const updateMouseAndCanvas = ({ xOffset, yOffset }) => ({
  type: types.UPDATE_MOUSE_AND_CANVAS,
  payload: { xOffset, yOffset },
});
