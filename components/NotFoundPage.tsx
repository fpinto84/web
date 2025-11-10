import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../hooks/useI18n';

const NotFoundPage: React.FC = () => {
  const { t, locale } = useI18n();

  const messages = {
    es: {
      title: '404 - Página No Encontrada',
      subtitle: 'Lo sentimos, la página que buscas no existe.',
      description: 'Es posible que la URL esté mal escrita o que la página haya sido movida.',
      backHome: 'Volver al Inicio',
      classes: 'Ver Clases',
      dancehall: 'Dancehall',
      afrobeats: 'Afrobeats',
    },
    en: {
      title: '404 - Page Not Found',
      subtitle: 'Sorry, the page you are looking for does not exist.',
      description: 'The URL may be misspelled or the page may have been moved.',
      backHome: 'Back to Home',
      classes: 'View Classes',
      dancehall: 'Dancehall',
      afrobeats: 'Afrobeats',
    },
    ca: {
      title: '404 - Pàgina No Trobada',
      subtitle: 'Ho sentim, la pàgina que cerques no existeix.',
      description: 'És possible que la URL estigui mal escrita o que la pàgina hagi estat moguda.',
      backHome: 'Tornar a l\'Inici',
      classes: 'Veure Classes',
      dancehall: 'Dancehall',
      afrobeats: 'Afrobeats',
    },
    fr: {
      title: '404 - Page Non Trouvée',
      subtitle: 'Désolé, la page que vous recherchez n\'existe pas.',
      description: 'L\'URL peut être mal orthographiée ou la page a peut-être été déplacée.',
      backHome: 'Retour à l\'Accueil',
      classes: 'Voir les Cours',
      dancehall: 'Dancehall',
      afrobeats: 'Afrobeats',
    },
  };

  const msg = messages[locale as keyof typeof messages] || messages.es;

  return (
    <div className="min-h-screen bg-black text-neutral flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-9xl font-extrabold text-primary-accent holographic-text mb-6">
          404
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          {msg.title}
        </h2>
        <p className="text-lg sm:text-xl text-neutral/80 mb-2">
          {msg.subtitle}
        </p>
        <p className="text-neutral/60 mb-12">
          {msg.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to={`/${locale}`}
            className="bg-primary-accent text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-primary-accent shadow-md hover:shadow-accent-glow"
          >
            {msg.backHome}
          </Link>
          <Link
            to={`/${locale}/clases`}
            className="bg-transparent border-2 border-primary-accent text-primary-accent font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-primary-accent hover:text-white"
          >
            {msg.classes}
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap gap-6 justify-center text-neutral/60">
          <Link to={`/${locale}/dancehall`} className="hover:text-primary-accent transition-colors">
            {msg.dancehall}
          </Link>
          <Link to={`/${locale}/afrobeats`} className="hover:text-primary-accent transition-colors">
            {msg.afrobeats}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
