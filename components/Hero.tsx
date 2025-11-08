import React from 'react';
import { useI18n } from '../hooks/useI18n';

const Hero: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Canvas Placeholder */}
      <div className="absolute inset-0 bg-black">
        {/* This would be the React Three Fiber Canvas */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/30 via-black to-black"></div>
        {/* Particle System Placeholder */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>
      
      <div className="relative z-10 text-center text-neutral px-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-tight mb-4">
          {t('heroTitle1')}
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl opacity-90 font-bold tracking-normal">{t('heroTitle2')}</span>
        </h1>
        <p className="text-xl md:text-2xl my-6 holographic-text font-medium animate-glow">
          {t('heroTagline')}
        </p>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-neutral/80 mb-10">
          {t('heroValue')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#trial" className="w-full sm:w-auto bg-primary-accent text-white font-bold text-lg py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent-glow animate-pulse-strong">
            {t('heroCTA1')}
          </a>
          <a href="#classes" className="w-full sm:w-auto border-2 border-neutral text-neutral font-bold text-lg py-4 px-10 rounded-full transition-all duration-300 hover:bg-neutral hover:text-dark-text">
            {t('heroCTA2')}
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 text-neutral/70 animate-subtle-bob">
        <span>{t('heroScroll')}</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
    </section>
  );
};

export default Hero;