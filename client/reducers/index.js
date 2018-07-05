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
      image: 'https://s3.us-east-2.amazonaws.com/elarsen-personal-site/woven-js.png',
    },
    {
      title: 'woven-loader',
      link: 'https://github.com/CSdare/woven-loader',
      description: 'webpack loader that transforms plain js files into web workers',
      image: 'https://s3.us-east-2.amazonaws.com/elarsen-personal-site/woven-loader.png',
    },
    {
      title: 'minesweeper',
      link: 'https://github.com/erikwlarsen/minesweeper',
      description: 'text-based minesweeper game that runs in node',
      image: 'https://s3.us-east-2.amazonaws.com/elarsen-personal-site/minesweeper.png',
    },
    {
      title: 'github-vision',
      link: 'https://github.com/Team-Peja/github-vision',
      description: 'visualizer for github commits',
      image: 'https://cdn.pixabay.com/photo/2016/08/19/06/53/coming-soon-1604663_960_720.png'
    },
    {
      title: 'personal-site',
      link: 'https://github.com/erikwlarsen/personal-site',
      description: 'source code for this site',
      image: 'https://cdn.pixabay.com/photo/2016/08/19/06/53/coming-soon-1604663_960_720.png'
    },
  ],
};

const copyState = (state) => {
  const { projects } = state;
  const projectsCopy = projects.map((project) => ({ ...project }));
  return ({ ...state, projects: projectsCopy });
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_COMPONENT:
      const selectedComponent = action.payload;
      return ({ ...copyState(state), selectedComponent });
    case types.SELECT_PROJECT:
      const selectedProject = action.payload;
      return ({ ...copyState(state), selectedProject });
    default:
      return state;
  }
}

const reducers = combineReducers({
  main: mainReducer,
});

export default reducers;
