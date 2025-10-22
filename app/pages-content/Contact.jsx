// pages-content/Contact.jsx
'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const ContactPage = ({ contact }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Envoi en cours...');
        // Simulation d'envoi API
        setTimeout(() => {
            console.log({ name, email, message });
            setStatus('Merci ! Votre message a été envoyé.');
            setName('');
            setEmail('');
            setMessage('');
        }, 1500);
    };

    return (
      <div className="pt-24 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b-4 border-[#00CECB] pb-2">
          Contactez-Moi
        </h1>
        <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-xl shadow-2xl">
            {/* Colonne Contact Info */}
            <div>
                <p className="text-lg text-gray-700 mb-6">
                    Que vous ayez un projet à discuter, une offre d'emploi, ou si vous souhaitez simplement vous connecter, n'hésitez pas à me contacter.
                </p>
                <div className="space-y-4">
                    <p className="flex items-center text-lg text-gray-800">
                        <Mail className="mr-3 text-[#00CECB]" /> Email :
                        <a href={`mailto:${contact.email}`} className="ml-2 font-medium hover:underline">{contact.email}</a>
                    </p>
                    <p className="flex items-center text-lg text-gray-800">
                        <Phone className="mr-3 text-[#00CECB]" /> Téléphone :
                        <span className="ml-2 font-medium">{contact.phone}</span>
                    </p>
                    <p className="flex items-center text-lg text-gray-800">
                        <MapPin className="mr-3 text-[#00CECB]" /> Localisation :
                        <span className="ml-2 font-medium">{contact.location}</span>
                    </p>
                    <p className="flex items-center text-lg text-gray-800">
                        <Github className="mr-3 text-[#00CECB]" /> GitHub :
                        <a href="#github" target="_blank" className="ml-2 font-medium hover:underline">/AbdoulayeKandeDev</a>
                    </p>
                    <p className="flex items-center text-lg text-gray-800">
                        <Linkedin className="mr-3 text-[#00CECB]" /> LinkedIn :
                        <a href="#linkedin" target="_blank" className="ml-2 font-medium hover:underline">/in/AbdoulayeKande</a>
                    </p>
                </div>
            </div>

            {/* Colonne Formulaire de Contact */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <input
                    type="text"
                    placeholder="Votre Nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] transition duration-200"
                />
                <input
                    type="email"
                    placeholder="Votre Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] transition duration-200"
                />
                <textarea
                    placeholder="Votre Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="5"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] transition duration-200"
                />
                <button
                    type="submit"
                    className="w-full bg-[#007BFF] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-[1.01]"
                >
                    Envoyer le Message
                </button>
                {status && <p className={`text-center font-medium ${status.includes('Merci') ? 'text-green-600' : 'text-gray-600'}`}>{status}</p>}
            </form>
        </div>
      </div>
    );
};

export default ContactPage;