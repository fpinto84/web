import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useI18n } from '../hooks/useI18n';
import Hero from './Hero';
import Philosophy from './Philosophy';
import About from './About';
import Classes from './Classes';
import WhyFIDC from './WhyFIDC';
import Services from './Services';
import Teachers from './Teachers';
import Testimonials from './Testimonials';
import HowToGetHere from './HowToGetHere';
import FinalCTA from './FinalCTA';
import InstagramFeed from './InstagramFeed';

const HomePage: React.FC = () => {
  const { t, locale } = useI18n();
  const baseUrl = 'https://www.farrayscenter.com';

  return (
    <>
      <Helmet>
        <title>{t('pageTitle')}</title>
        <meta name="description" content={t('metaDescription')} />
        <link rel="canonical" href={`${baseUrl}/${locale}`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/${locale}`} />
        <meta property="og:title" content={t('pageTitle')} />
        <meta property="og:description" content={t('metaDescription')} />
        <meta property="og:image" content={`${baseUrl}/images/og-image.jpg`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${baseUrl}/${locale}`} />
        <meta name="twitter:title" content={t('pageTitle')} />
        <meta name="twitter:description" content={t('metaDescription')} />
        <meta name="twitter:image" content={`${baseUrl}/images/twitter-image.jpg`} />

        {/* Hreflang tags */}
        <link rel="alternate" hreflang="es" href={`${baseUrl}/es`} />
        <link rel="alternate" hreflang="ca" href={`${baseUrl}/ca`} />
        <link rel="alternate" hreflang="en" href={`${baseUrl}/en`} />
        <link rel="alternate" hreflang="fr" href={`${baseUrl}/fr`} />
        <link rel="alternate" hreflang="x-default" href={`${baseUrl}/es`} />
      </Helmet>

      <Hero />
      <Philosophy />
      <About />
      <Classes />
      <WhyFIDC />
      <Services />
      <Teachers />
      <Testimonials />
      <InstagramFeed />
      <FinalCTA />
      <HowToGetHere />
    </>
  );
};

export default HomePage;
