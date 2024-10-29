import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'This is a description of the first project.',
    link: '#'
  },
  {
    title: 'Project Two',
    description: 'This is a description of the second project.',
    link: '#'
  },
  {
    title: 'Project Three',
    description: 'This is a description of the third project.',
    link: '#'
  },
];

const ProjectList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <a href={project.link} className="text-blue-500 hover:underline">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;