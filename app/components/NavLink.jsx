// components/NavLink.jsx
'use client';

import React from 'react';

const NavLink = ({ href, children, isActive, onClick }) => (
    <button
      onClick={() => onClick(href)}
      className={`px-4 py-2 font-semibold transition duration-300 rounded-lg ${
        isActive
          ? 'bg-[#007BFF] text-white shadow-lg'
          : 'text-gray-700 hover:text-[#007BFF] hover:bg-gray-100'
      }`}
    >
      {children}
    </button>
);

export default NavLink;