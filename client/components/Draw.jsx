import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import * as actions from '../actions/actionCreators';

const mapStateToProps = state => ({
  drawing: state.draw.drawing,
});

const mapDispatchToProps = {
  startDrawing: actions.startDrawing,
  stopDrawing: actions.stopDrawing,
  updateMouseAndCanvas: actions.updateMouseAndCanvas,
};

class Draw extends Component {
  constructor(props) {
    super(props);
    this.drawing = false;
  }

  componentDidMount() {
    this.context = this.canvas.getContext('2d');
  }

  render() {
    const { startDrawing, stopDrawing, updateMouseAndCanvas } = this.props;
    return (
      <div>
        <canvas
          ref={(c) => {
            this.canvas = c;
          }}
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onMouseMove={updateMouseAndCanvas}
        />
      </div>
    );
  }
}

Draw.propTypes = {
  startDrawing: func.isRequired,
  stopDrawing: func.isRequired,
  updateMouseAndCanvas: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Draw);
