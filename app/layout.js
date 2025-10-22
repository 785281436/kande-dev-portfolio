// app/layout.js

import './globals.css'; // Nécessaire pour les styles Tailwind CSS

export const metadata = {
  title: 'Abdoulaye Kande - Portfolio Full-Stack',
  description: 'Portfolio professionnel d\'Abdoulaye Kande, Futur Développeur Full-Stack spécialisé Next.js et React.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}