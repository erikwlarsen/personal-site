import React from 'react';
import { openInNewTab } from '../util/util.js';

const Project = ({ title, link, description, image, idx, selected, selectProject }) => {
  return (
    <div className={`project${selected ? ' selected' : ''}`}>
      <h3 onClick={() => selectProject(idx)}>{title}</h3>
      <div>
        <p>{description}</p>
        <img src={image} />
        {/* figure out how to use img complete property to only load when ready */}
        <p className="external-link" onClick={() => openInNewTab(link)}>view on github</p>
      </div>
    </div>
  );
}

export default Project;
