// pages-content/About.jsx

import React from 'react';
import { Layers, BookOpen } from 'lucide-react';

const AboutPage = ({ profile }) => (
    <div className="pt-24 container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b-4 border-[#007BFF] pb-2">
        À Propos de Moi
      </h1>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {profile.bio}
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6 rounded-lg flex items-start">
              <BookOpen className="text-yellow-700 mr-4 mt-1 flex-shrink-0" size={24} />
              <p className="text-lg text-yellow-800">
                **Formation en cours** : Actuellement étudiant Full-Stack chez **Gomycode**, j'acquiers une base solide en développement d'applications modernes, avec un focus particulier sur l'écosystème React et Next.js.
              </p>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Mon objectif est de créer des applications qui ne sont pas seulement fonctionnelles, mais qui offrent également des expériences utilisateur exceptionnelles, en tirant parti des capacités de pré-rendu de Next.js pour un temps de chargement quasi instantané.
          </p>
        </div>
        <div className="md:col-span-1 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <Layers className="mr-3 text-[#00CECB]" /> Mes Compétences Clés
          </h2>
          <div className="flex flex-wrap gap-3">
            {profile.skills.map((skill) => (
              <span key={skill} className="px-4 py-2 text-sm font-medium rounded-full bg-[#007BFF] text-white shadow-md">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
);

export default AboutPage;