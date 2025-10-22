// components/ProjectCard.jsx

import React from 'react';

const ProjectCard = ({ title, description, technologies, link }) => (
    <div className="bg-white p-6 rounded-xl shadow-xl transition-transform transform hover:scale-[1.02] hover:shadow-2xl flex flex-col h-full">
      <div className="relative w-full h-40 bg-gray-200 rounded-lg overflow-hidden mb-4">
        {/* Simulation d'image (en Next.js réel, on utiliserait <Image>) */}
        <img
          src={`https://placehold.co/400x200/${technologies[0] === 'React' ? '007BFF' : 'FF5E5B'}/white?text=${title}`}
          alt={`Image du projet ${title}`}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-700">
                {tech}
              </span>
            ))}
          </div>
          <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block text-[#007BFF] hover:text-[#00CECB] font-medium transition">
            Voir le Projet →
          </a>
      </div>
    </div>
);

export default ProjectCard;