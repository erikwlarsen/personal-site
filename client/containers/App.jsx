import React, { Component } from 'react';
import { connect } from 'react-redux';
import Globe from '../components/Globe.jsx';

const mapStateToProps = (state) => ({
  selectedComponent: this.state.selectedComponent,
})

const mapDispatchToProps = {
  
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>SICK APP</h1>
        <Globe />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
