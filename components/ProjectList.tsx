"use client";
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
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {projects.map((project, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h2>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <a href={project.link} className="text-teal-500 hover:underline">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;