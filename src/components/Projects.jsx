import React from 'react';
import Project from './Project.jsx';

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
      <span
        className={`project-title${selected ? ' selected' : ''}`}
        onClick={() => selectProject(idx)}
        key={`title ${proj.title}`}
      >{proj.title.replace('-', '\u2011')}</span>
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
}

export default Projects;
