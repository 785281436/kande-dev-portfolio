// data/portfolioData.js

export const getPortfolioData = () => {
    return {
      profile: {
        name: 'Abdoulaye Kande',
        title: 'Développeur Full-Stack (Junior) | Étudiant Gomycode',
        bio: 'Actuellement en formation intensive Full-Stack chez Gomycode, je me spécialise dans les architectures modernes de développement web. Passionné par la création d\'expériences utilisateur rapides et modernes, je mets l\'accent sur les projets utilisant Next.js et ses stratégies de pré-rendu pour une performance maximale. Je suis activement à la recherche d\'une opportunité de stage pour appliquer mes compétences.',
        skills: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'GraphQL', 'MongoDB', 'Déploiement Vercel'],
        photoUrl: 'https://placehold.co/150x150/007BFF/white?text=AK',
        contact: {
            email: 'kandea404@gmail.com',
            phone: '785281436',
            location: 'Dakar, Sénégal (simulé)'
        }
      },
      projects: [
        {
          id: 1,
          title: 'Plateforme E-commerce (ISR)',
          description: 'Solution d\'achat en ligne haute performance utilisant l\'ISR pour des mises à jour de produits en temps quasi réel.',
          technologies: ['Next.js', 'React', 'MongoDB', 'Tailwind CSS'],
          link: '#'
        },
        {
          id: 2,
          title: 'Tableau de Bord SaaS (CSR)',
          description: 'Application d\'analyse de données en temps réel nécessitant un rendu côté client pour une interactivité complexe.',
          technologies: ['React', 'D3.js', 'Redux', 'API REST'],
          link: '#'
        },
        {
          id: 3,
          title: 'Blog Statique (SSG)',
          description: 'Site d\'actualités techniques pré-rendu en HTML pur pour un chargement instantané et un SEO parfait.',
          technologies: ['Next.js', 'Markdown', 'SSG', 'CSS Modules'],
          link: '#'
        },
      ]
    };
};