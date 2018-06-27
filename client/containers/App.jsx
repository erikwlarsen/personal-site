import React, { Component } from 'react';
import { connect } from 'react-redux';
import Globe from '../components/Globe.jsx';
import Menu from '../components/Menu.jsx';
import Main from '../components/Main.jsx';
import Projects from '../components/Projects.jsx';
import About from '../components/About.jsx';
import * as actions from '../actions/actionCreators.js';

const mapStateToProps = (state) => ({
  selectedComponent: state.main.selectedComponent,
  selectedProject: state.main.selectedProject,
});

const mapDispatchToProps = {
  selectComponent: actions.selectComponent,
  selectProject: actions.selectProject,
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
    } = this.props;

    const componentMap = {
      main: <Main />,
      projects: <Projects selectProject={selectProject} selectedProject={selectedProject}/>,
      globe: <Globe />,
      about: <About />,
    }

    return (
      <div id="app">
        <h1>SICK APP</h1>
        <Menu
          selectComponent={selectComponent}
          selectedComponent={selectedComponent}
        />
        {componentMap[selectedComponent]}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
