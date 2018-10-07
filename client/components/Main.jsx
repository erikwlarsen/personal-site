import React from 'react';
import PropTypes from 'prop-types';
import { newTabClick, newTabKeyPress } from '../util/util';

const Main = ({ selectedHello, randomHello }) => (
  <div id="main-component">
    <button type="button" id="hello-again" onClick={randomHello}>hello again</button>
    <code
      onClick={newTabClick('http://wiki.c2.com/?HelloWorldInManyProgrammingLanguages')}
      onKeyPress={newTabKeyPress('http://wiki.c2.com/?HelloWorldInManyProgrammingLanguages')}
      aria-hidden
    >
      {selectedHello}
    </code>
  </div>
);

Main.propTypes = {
  selectedHello: PropTypes.number.isRequired,
  randomHello: PropTypes.func.isRequired,
};

export default Main;
