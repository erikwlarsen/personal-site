import React from 'react';
import { openInNewTab } from '../util/util.js';

const Main = ({ selectedHello, randomHello }) => (
  <div id="main-component">
    <button type="button" id="hello-again" onClick={randomHello}>hello again</button>
    <code onClick={() => openInNewTab('http://wiki.c2.com/?HelloWorldInManyProgrammingLanguages')}>
      {selectedHello}
    </code>
  </div>
);

export default Main;
