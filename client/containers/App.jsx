import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Globe from '../components/Globe.jsx';
import Menu from '../components/Menu';
import Main from '../components/Main';
import Projects from '../components/Projects';
import About from '../components/About';
import Draw from '../components/Draw';
import * as actions from '../actions/actionCreators';

const mapStateToProps = state => ({
  selectedComponent: state.main.selectedComponent,
  selectedProject: state.main.selectedProject,
  projects: state.main.projects,
  helloWorlds: state.main.helloWorlds,
  selectedHello: state.main.selectedHello,
});

const mapDispatchToProps = {
  selectComponent: actions.selectComponent,
  selectProject: actions.selectProject,
  randomHello: actions.randomHello,
};

const App = (props) => {
  const {
    selectComponent,
    selectedComponent,
    selectProject,
    selectedProject,
    projects,
    randomHello,
    helloWorlds,
    selectedHello,
  } = props;

  const componentMap = {
    main: <Main
      randomHello={randomHello}
      selectedHello={helloWorlds[selectedHello]}
    />,
    projects: <Projects
      projects={projects}
      selectProject={selectProject}
      selectedProject={selectedProject}
    />,
    // globe: <Globe />,
    draw: <Draw />,
    about: <About />,
  };

  return (
    <div id="app">
      <div id="header">
      erik
        <br />
      larsen
      </div>
      <Menu
        selectComponent={selectComponent}
        selectedComponent={selectedComponent}
      />
      <div id="component-container">
        {componentMap[selectedComponent]}
      </div>
    </div>
  );
};

App.propTypes = {
  selectComponent: PropTypes.func.isRequired,
  selectedComponent: PropTypes.string.isRequired,
  selectProject: PropTypes.func.isRequired,
  selectedProject: PropTypes.number.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  randomHello: PropTypes.func.isRequired,
  helloWorlds: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedHello: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
