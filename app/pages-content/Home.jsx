// pages-content/Home.jsx

import React from 'react';

const HomePage = ({ profile }) => (
    <div className="pt-24 min-h-screen flex items-center bg-gray-50">
      <div className="container mx-auto px-4 py-12 text-center">
        <img
          src={profile.photoUrl}
          alt="Photo de profil de Abdoulaye Kande"
          className="rounded-full w-36 h-36 mx-auto mb-6 object-cover border-4 border-[#007BFF] shadow-lg"
        />
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-4">
         Bonjour, je suis Abdoulaye Kande <span className="text-[#007BFF]"></span>
        </h1>
        <p className="text-xl md:text-3xl font-light text-gray-700 mb-8">
          {profile.title}
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#FF5E5B] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
        >
          Découvrez mes Projets
        </a>
      </div>
    </div>
);

export default HomePage;