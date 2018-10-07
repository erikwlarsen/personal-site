import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';

const Projects = ({ projects, selectedProject, selectProject }) => {
  const projComponents = projects.map((proj, idx) => (
    <Project
      {...proj}
      idx={idx}
      key={proj.title}
      selected={selectedProject === idx}
    />
  ));

  const projectTitles = projects.map((proj, idx) => {
    const selected = selectedProject === idx;
    return (
      <button
        type="button"
        className={`project-title${selected ? ' selected' : ''}`}
        onClick={() => selectProject(idx)}
        key={`title ${proj.title}`}
      >
        {proj.title.replace('-', '\u2011')}
      </button>
    );
  });

  return (
    <div>
      <div id="titles-container">
        {projectTitles}
      </div>
      {projComponents[selectedProject]}
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedProject: PropTypes.number.isRequired,
  selectProject: PropTypes.func.isRequired,
};

export default Projects;
