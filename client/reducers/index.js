import { combineReducers } from 'redux';

import * as types from '../actions/actionTypes.js';

const initialState = {
  selectedComponent: 'main',
  selectedProject: 'null',
  projects: [
    {
      title: 'woven-js',
      link: 'https://github.com/CSdare/woven-js',
      description: 'dev library that moves intensive functions off the main thread',
      image: ''
    },
    {
      title: 'woven-loader',
      link: 'https://github.com/CSdare/woven-loader',
      description: 'webpack loader that transforms plain js files into web workers',
      image: ''
    },
    {
      title: 'minesweeper',
      link: 'https://github.com/erikwlarsen/minesweeper',
      description: 'text-based minesweeper game that runs in node',
      image: ''
    },
    {
      title: 'github-vision',
      link: 'https://github.com/Team-Peja/github-vision',
      description: 'visualizer for github commits',
      image: ''
    },
    {
      title: 'personal-site',
      link: 'https://github.com/erikwlarsen/personal-site',
      description: 'source code for this site',
      image: ''
    },
  ],
};

const copyState = (state) => {

}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_COMPONENT:
      const selectedComponent = action.payload;
      return ({ ...state, selectedComponent });
    case types.SELECT_PROJECT:
      const selectedProject = action.payload;
      return ({ ...state, selectedProject });
    default:
      return state;
  }
}

const reducers = combineReducers({
  main: mainReducer,
});

export default reducers;
