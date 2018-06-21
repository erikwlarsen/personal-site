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
});

const mapDispatchToProps = {
  selectComponent: actions.selectComponent,
};

const componentMap = {
  main: <Main />,
  projects: <Projects />,
  globe: <Globe />,
  about: <About />,
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      selectComponent,
      selectedComponent,
    } = this.props;

    return (
      <div>
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
