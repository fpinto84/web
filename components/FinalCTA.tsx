import React from 'react';
import { useI18n } from '../hooks/useI18n';
import AnimateOnScroll from './AnimateOnScroll';

const FinalCTA: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="enroll" className="relative py-24 md:py-40 flex items-center justify-center text-center text-neutral overflow-hidden">
      <div className="absolute inset-0 z-0">
         <video 
          className="w-full h-full object-cover"
          src="/videos/final-cta-epic.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          title="Energetic dance performances at FIDC"
        >
          <track kind="captions" src="/videos/captions/captions_en.vtt" srcLang="en" label="English" />
          <track kind="captions" src="/videos/captions/captions_es.vtt" srcLang="es" label="Español" />
          <track kind="captions" src="/videos/captions/captions_ca.vtt" srcLang="ca" label="Català" />
          <track kind="captions" src="/videos/captions/captions_fr.vtt" srcLang="fr" label="Français" />
        </video>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-6">
            {t('finalCtaTitle')}
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-neutral/80 mb-12">
            {t('finalCtaSubtitle')}
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#enroll-form" className="w-full sm:w-auto bg-primary-accent text-white font-bold text-xl py-5 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent-glow animate-glow">
              {t('finalCtaButton1')}
            </a>
            <a href="#trial-form" className="w-full sm:w-auto border-2 border-neutral text-neutral font-bold text-xl py-5 px-12 rounded-full transition-all duration-300 hover:bg-neutral hover:text-dark-text">
              {t('finalCtaButton2')}
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FinalCTA;