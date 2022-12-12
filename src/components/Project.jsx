import React from 'react';
import { openInNewTab } from '../util/util.js';

const Project = ({ title, link, description, image, idx, selected, selectProject }) => {
  return (
    <div className={`project${selected ? ' selected' : ''}`}>
      <div>
        <p>{description}</p>
        <img src={image} className="external-link" onClick={() => openInNewTab(link)} />
      </div>
    </div>
  );
}

export default Project;
