import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useParams, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { I18nProvider, useI18n } from './hooks/useI18n';
import type { Locale } from './types';
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

// Component to sync URL locale with i18n context
const LocaleSync: React.FC = () => {
  const { locale: urlLocale } = useParams<{ locale: Locale }>();
  const { setLocale } = useI18n();

  useEffect(() => {
    if (urlLocale && ['es', 'en', 'ca', 'fr'].includes(urlLocale)) {
      setLocale(urlLocale as Locale);
    }
  }, [urlLocale, setLocale]);

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
            {/* Redirect root to default locale */}
            <Route path="/" element={<Navigate to={`/${locale}`} replace />} />

            {/* Locale-based routes */}
            <Route path="/:locale" element={<><LocaleSync /><HomePage /></>} />
            <Route path="/:locale/clases" element={<><LocaleSync /><DanceClassesPage /></>} />
            <Route path="/:locale/dancehall" element={<><LocaleSync /><DancehallPage /></>} />
            <Route path="/:locale/afrobeats" element={<><LocaleSync /><AfrobeatsPage /></>} />

            {/* Legacy routes without locale - redirect to current locale */}
            <Route path="/clases" element={<Navigate to={`/${locale}/clases`} replace />} />
            <Route path="/dancehall" element={<Navigate to={`/${locale}/dancehall`} replace />} />
            <Route path="/afrobeats" element={<Navigate to={`/${locale}/afrobeats`} replace />} />
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
