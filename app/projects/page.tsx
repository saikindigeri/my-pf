
'use client'

import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A web application that allows users to track their daily tasks and improve productivity.',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'An e-commerce platform that provides a seamless shopping experience with various payment options.',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A mobile app that connects users with local service providers for home repairs and maintenance.',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'A social media platform that focuses on connecting people with similar interests and hobbies.',
  },
  {
    id: 5,
    title: 'Project Five',
    description: 'A data visualization tool that helps businesses analyze their performance metrics effectively.',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="pt-20 px-6 bg-white text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(project => (
            <div key={project.id} className="p-4 border rounded shadow">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-lg leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
