import React from 'react';

const Project = ({ title, link, description, image, idx, selected, selectProject }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Description: {description}</p>
      <img src={image} />
      <p>Selected? {selected}</p>
    </div>
  );
}

export default Project;
