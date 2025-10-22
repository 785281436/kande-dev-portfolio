// components/Header.jsx
'use client';

import React from 'react';
import NavLink from './NavLink';
import { Home as HomeIcon, User, Layers, Phone } from 'lucide-react';

const Header = ({ currentPath, onNavigate }) => {
    const navItems = [
      { path: '/', label: 'Accueil', Icon: HomeIcon },
      { path: '/about', label: 'À Propos', Icon: User },
      { path: '/projects', label: 'Projets', Icon: Layers },
      { path: '/contact', label: 'Contact', Icon: Phone },
    ];

    return (
      <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-extrabold text-[#007BFF]">
           
          </div>
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                href={item.path}
                isActive={currentPath === item.path}
                onClick={onNavigate}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          {/* Mobile menu (simulé) */}
          <div className="md:hidden">
            <select
              className="p-2 border rounded-lg bg-gray-50"
              value={currentPath}
              onChange={(e) => onNavigate(e.target.value)}
            >
              {navItems.map((item) => (
                <option key={item.path} value={item.path}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>
    );
};

export default Header;