import React from 'react';
import Project from './Project.jsx';

const Projects = ({ projects, selectedProject, selectProject }) => {
  const projComponents = projects.map((proj, idx) => (
    <Project
      {...proj}
      idx={idx}
      key={proj.title}
      selected={selectedProject === idx}
      selectProject={selectProject}
    />
  ));

  return (
    <div>
      {projComponents}
    </div>
  );
}

export default Projects;
