// pages-content/Projects.jsx

import React from 'react';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = ({ projects }) => (
    <div className="pt-24 container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 border-b-4 border-[#FF5E5B] pb-2">
        Mes Réalisations Techniques
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Chacun de ces projets a été choisi pour illustrer une stratégie de rendu Next.js spécifique (SSR, SSG, ISR, ou CSR pur), démontrant ma capacité à choisir l'architecture la plus performante.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
);

export default ProjectsPage;