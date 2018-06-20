import Cesium from 'cesium/Cesium';
import 'cesium/Widgets/widgets.css';
// import { Viewer, Entity } from 'cesium-react';
import React, { Component } from 'react';

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2NTIzNzE0MC0yYzczLTQyNmYtYmM0MS1jYTAxYWZmMzc3NjUiLCJpZCI6MTYxNiwiaWF0IjoxNTI5MjkzMDc3fQ.XtEVkrZCmzGYVe-w4VOb3cKOy2atprfjNX-5HpspZ0k';

const globeOptions = {
  animation: false,
  baseLayerPicker: false,
  fullscreenButton: false,
  geocoder: false,
  homeButton: false,
  infoBox: false,
  sceneModePicker: false,
  selectionIndicator: false,
  timeline: false,
  navigationHelpButton: false,
  navigationInstructionsInitiallyVisible: false,
};

class Globe extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const viewer = new Cesium.Viewer('mount', globeOptions);
  }

  render() {
    return (
      <div id="mount" ref={(mount) => this.mount = mount} />
    );
  }
}

export default Globe;
