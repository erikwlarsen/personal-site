import React from 'react';
import PropTypes from 'prop-types';
import { newTabClick, newTabKeyPress } from '../util/util';

const Project = ({
  link,
  description,
  image,
  selected,
}) => (
  <div className={`project${selected ? ' selected' : ''}`}>
    <div>
      <p>{description}</p>
      <img
        src={image}
        className="external-link"
        onClick={newTabClick(link)}
        onKeyPress={newTabKeyPress(link)}
        alt={description}
        aria-hidden
      />
    </div>
  </div>
);

Project.propTypes = {
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default Project;
