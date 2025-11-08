import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../hooks/useI18n';
import type { Locale } from '../types';
import FIDCLogo from './FIDCLogo';

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header: React.FC = () => {
  const { t, setLocale, locale } = useI18n();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lang: Locale) => {
    setLocale(lang);
  };

  const handleEnrollClick = (e: React.MouseEvent) => {
    if (location.pathname !== '/') {
      setIsMenuOpen(false);
      // Let the Link navigate to home, then scroll will happen via the anchor
    }
  };

  const navLinks: { path: string; textKey: string }[] = [
    { path: '/', textKey: 'navHome' },
    { path: '/clases', textKey: 'navClasses' },
    { path: '/dancehall', textKey: 'navDancehall' },
    { path: '/afrobeats', textKey: 'navAfrobeats' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg shadow-primary-accent/10' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" aria-label="FIDC Home">
            <FIDCLogo />
          </Link>

          <nav className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center space-x-8 text-sm font-medium">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`transition-colors duration-300 ${
                      location.pathname === link.path
                        ? 'text-white'
                        : 'text-neutral/60 hover:text-white'
                    }`}
                    aria-current={location.pathname === link.path ? 'page' : undefined}
                  >
                    {t(link.textKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-black/20 p-1 rounded-full">
              {(['es', 'ca', 'en', 'fr'] as Locale[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                    locale === lang
                      ? 'bg-primary-accent text-white'
                      : 'text-neutral/70 hover:bg-neutral/20 hover:text-white'
                  }`}
                  aria-label={`Switch to ${lang}`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <Link
              to="/#enroll"
              onClick={handleEnrollClick}
              className="bg-primary-accent text-white font-bold py-2 px-6 rounded-full transition-all duration-300 hover:bg-white hover:text-primary-accent shadow-md hover:shadow-accent-glow animate-pulse-strong"
            >
              {t('enrollNow')}
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="z-50 relative"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <CloseIcon className="w-8 h-8"/> : <MenuIcon className="w-8 h-8"/>}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-bold transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-primary-accent'
                    : 'text-neutral/80 hover:text-white'
                }`}
                aria-current={location.pathname === link.path ? 'page' : undefined}
              >
                {t(link.textKey)}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-2 bg-black/20 p-1 rounded-full">
            {(['es', 'ca', 'en', 'fr'] as Locale[]).map((lang) => (
              <button
                key={lang}
                onClick={() => { handleLanguageChange(lang); setIsMenuOpen(false); }}
                className={`px-4 py-2 rounded-full text-lg font-bold transition-colors duration-300 ${
                  locale === lang
                    ? 'bg-primary-accent text-white'
                    : 'text-neutral/70 hover:bg-neutral/20 hover:text-white'
                }`}
                aria-label={`Switch to ${lang}`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <Link
            to="/#enroll"
            onClick={(e) => { handleEnrollClick(e); setIsMenuOpen(false); }}
            className="bg-primary-accent text-white text-xl font-bold py-4 px-10 rounded-full transition-all duration-300 hover:bg-white hover:text-primary-accent shadow-md hover:shadow-accent-glow animate-pulse-strong"
          >
            {t('enrollNow')}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
