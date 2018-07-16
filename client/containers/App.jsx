import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Globe from '../components/Globe.jsx';
import Menu from '../components/Menu.jsx';
import Main from '../components/Main.jsx';
import Projects from '../components/Projects.jsx';
import About from '../components/About.jsx';
import * as actions from '../actions/actionCreators.js';

const mapStateToProps = (state) => ({
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

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      selectComponent,
      selectedComponent,
      selectProject,
      selectedProject,
      projects,
      randomHello,
      helloWorlds,
      selectedHello,
    } = this.props;

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
      about: <About />,
    }

    return (
      <div id="app">
        <div id="header">erik<br></br>larsen</div>
        <Menu
          selectComponent={selectComponent}
          selectedComponent={selectedComponent}
        />
        <div id="component-container">
          {componentMap[selectedComponent]}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
