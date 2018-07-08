import React, { Component } from 'react';
import { openInNewTab } from '../util/util.js';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.randomHello();
  }

  render() {
    const { selectedHello, randomHello } = this.props;

    return (
      <div>
        <code onClick={() => openInNewTab('http://wiki.c2.com/?HelloWorldInManyProgrammingLanguages')}>
          {selectedHello}
        </code>
        <div onClick={randomHello}>Hello again!</div>
      </div>
    );
  }
}

export default Main;
