import { combineReducers } from 'redux';

import * as types from '../actions/actionTypes.js';

const initialState = {
  selectedComponent: 'main',
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_COMPONENT:
      const selectedComponent = action.payload;
      return ({ ...state, selectedComponent });
    default:
      return state;
  }
}

const reducers = combineReducers({
  main: mainReducer,
});

export default reducers;
