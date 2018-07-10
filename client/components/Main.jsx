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
        <div id="main-component">
          <code onClick={() => openInNewTab('http://wiki.c2.com/?HelloWorldInManyProgrammingLanguages')}>
            {selectedHello}
          </code>
        </div>
        <button type="button" id="hello-again" onClick={randomHello}>Hello again!</button>
      </div>
    );
  }
}

export default Main;
