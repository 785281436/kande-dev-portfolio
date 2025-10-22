// components/Footer.jsx

import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => (
    <footer className="bg-gray-800 text-white p-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © 2025 Abdoulaye Kande. Construit avec Next.js et stylisé avec Tailwind CSS.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href={`mailto:kandea404@gmail.com`} className="hover:text-[#00CECB] transition"><Mail size={20} /></a>
          <a href="#github" className="hover:text-[#00CECB] transition"><Github size={20} /></a>
          <a href="#linkedin" className="hover:text-[#00CECB] transition"><Linkedin size={20} /></a>
        </div>
      </div>
    </footer>
);

export default Footer;