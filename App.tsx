import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { I18nProvider, useI18n } from './hooks/useI18n';
import Header from './components/Header';
import HomePage from './components/HomePage';
import DanceClassesPage from './components/DanceClassesPage';
import DancehallPage from './components/DancehallPage';
import AfrobeatsPage from './components/AfrobeatsPage';
import Footer from './components/Footer';

const ScrollToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const AppContent: React.FC = () => {
  const { locale } = useI18n();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <div className="bg-black text-neutral antialiased font-sans overflow-x-hidden">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clases" element={<DanceClassesPage />} />
          <Route path="/dancehall" element={<DancehallPage />} />
          <Route path="/afrobeats" element={<AfrobeatsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <I18nProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </I18nProvider>
    </HelmetProvider>
  );
};

export default App;