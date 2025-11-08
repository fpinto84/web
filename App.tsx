import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { I18nProvider, useI18n } from './hooks/useI18n';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';
import Header from './components/Header';
import SkipLink from './components/SkipLink';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

// Code splitting: Lazy load secondary pages to reduce initial bundle size
const DanceClassesPage = lazy(() => import('./components/DanceClassesPage'));
const DancehallPage = lazy(() => import('./components/DancehallPage'));
const AfrobeatsPage = lazy(() => import('./components/AfrobeatsPage'));

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
      <SEO />
      <SkipLink />
      <Header />
      <main id="main-content">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/clases" element={<DanceClassesPage />} />
            <Route path="/dancehall" element={<DancehallPage />} />
            <Route path="/afrobeats" element={<AfrobeatsPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <I18nProvider>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </I18nProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
