// app/page.js
'use client'; // Indispensable car vous utilisez des hooks React (useState, useEffect)

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages-content/Home';
import AboutPage from './pages-content/About';
import ProjectsPage from './pages-content/Projects';
import ContactPage from './pages-content/Contact';
import { getPortfolioData } from './data/portfolioData';

export default function AppRouterPage() {
    // ... (tout le reste de la logique et des fonctions: useState, useEffect, handleNavigate, renderPage) ...
    const [currentPath, setCurrentPath] = useState('/');
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Simulation de la récupération de données
    useEffect(() => {
        const initialData = getPortfolioData();
        setData(initialData);
        setIsLoading(false);
    }, []);

    const handleNavigate = (path) => {
        setCurrentPath(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const renderPage = () => {
        if (isLoading) {
            return (
                <div className="pt-24 min-h-screen flex items-center justify-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#007BFF]"></div>
                    <p className="ml-4 text-xl text-gray-600">Chargement des données...</p>
                </div>
            );
        }

        switch (currentPath) {
            case '/':
                return <HomePage profile={data.profile} />;
            case '/about':
                return <AboutPage profile={data.profile} />;
            case '/projects':
                return <ProjectsPage projects={data.projects} />;
            case '/contact':
                return <ContactPage contact={data.profile.contact} />;
            default:
                // Page 404 simple (simulée)
                return (
                    <div className="pt-24 min-h-screen text-center p-12">
                        <h1 className="text-6xl font-extrabold text-[#FF5E5B] mt-12">404</h1>
                        <p className="text-2xl text-gray-700 mt-4">Page non trouvée.</p>
                        <button onClick={() => handleNavigate('/')} className="mt-8 text-[#007BFF] hover:underline">Retour à l'accueil</button>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header currentPath={currentPath} onNavigate={handleNavigate} />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
}