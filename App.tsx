import React, { useEffect, useState } from 'react';
import { I18nProvider, useI18n } from './hooks/useI18n';
import Header from './components/Header';
import HomePage from './components/HomePage';
import DanceClassesPage from './components/DanceClassesPage';
import DancehallPage from './components/DancehallPage';
import AfrobeatsPage from './components/AfrobeatsPage';
import Footer from './components/Footer';
import type { Page } from './types';

const AppContent: React.FC = () => {
  const { locale, t } = useI18n();
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    // Scroll to the top of the page whenever the page changes
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    document.documentElement.lang = locale;
    let titleKey = 'pageTitle';
    if (page === 'classes') {
        titleKey = 'danceClassesPageTitle';
    } else if (page === 'dancehall') {
        titleKey = 'dancehallPageTitle';
    } else if (page === 'afrobeats') {
        titleKey = 'afrobeatsPageTitle';
    }
    document.title = t(titleKey);
  }, [locale, t, page]);

  const renderPage = () => {
    switch (page) {
      case 'classes':
        return <DanceClassesPage />;
      case 'dancehall':
        return <DancehallPage />;
      case 'afrobeats':
        return <AfrobeatsPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-black text-neutral antialiased font-sans overflow-x-hidden">
      <Header setPage={setPage} currentPage={page} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

const App: React.FC = () => {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
};

export default App;