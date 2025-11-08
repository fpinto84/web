import React from 'react';
import { useI18n } from '../hooks/useI18n';
import type { ClassInfo } from '../types';
import AnimateOnScroll from './AnimateOnScroll';

const classData: ClassInfo[] = [
  { id: 'contemporary', titleKey: 'classCatContemporaryTitle', descriptionKey: 'classCatContemporaryDesc', image: '/images/classes/class-contemporary-jazz.jpg' },
  { id: 'urban', titleKey: 'classCatUrbanTitle', descriptionKey: 'classCatUrbanDesc', image: '/images/classes/class-urban.jpg' },
  { id: 'latin', titleKey: 'classCatLatinTitle', descriptionKey: 'classCatLatinDesc', image: '/images/classes/class-latin.jpg' },
  { id: 'fitness', titleKey: 'classCatFitnessTitle', descriptionKey: 'classCatFitnessDesc', image: '/images/classes/class-fitness.jpg' },
  { id: 'morning', titleKey: 'classCatMorningTitle', descriptionKey: 'classCatMorningDesc', image: '/images/classes/class-morning.jpg' },
  { id: 'world', titleKey: 'classCatWorldTitle', descriptionKey: 'classCatWorldDesc', image: '/images/classes/class-world.jpg' },
];

const CIDLogo: React.FC = () => (
    <div className="w-24 h-24 bg-neutral/10 border-2 border-primary-accent/50 rounded-full flex items-center justify-center p-2 backdrop-blur-sm">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary-accent">
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="3"/>
            <text x="50" y="55" textAnchor="middle" fontSize="24" fill="currentColor" fontWeight="bold">CID</text>
            <text x="50" y="75" textAnchor="middle" fontSize="12" fill="currentColor">UNESCO</text>
        </svg>
    </div>
);


const Classes: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="classes" className="py-20 md:py-32 bg-primary-dark/10">
      <div className="container mx-auto px-6 text-center">
        <AnimateOnScroll>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-neutral">
            {t('classesTitle')}
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="max-w-3xl mx-auto text-lg text-neutral/80 mb-12">
            {t('classesIntro')}
          </p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {classData.map((cls, index) => (
            <AnimateOnScroll key={cls.id} delay={index * 100} className="[perspective:1000px]">
              <div className="group relative rounded-xl overflow-hidden shadow-lg h-80 bg-black text-white transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:shadow-accent-glow group-hover:[transform:translateY(-0.5rem)_scale(1.05)_rotateY(5deg)]">
                <img
                  src={cls.image}
                  alt={t(cls.titleKey)}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 opacity-40 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-accent rounded-xl transition-all duration-300 pointer-events-none"></div>

                <div className="relative flex flex-col justify-end h-full p-6 text-left">
                   <h3 className="text-3xl font-bold mt-2">{t(cls.titleKey)}</h3>
                   <div className="h-0 group-hover:h-20 overflow-hidden transition-all duration-300 ease-in-out">
                     <p className="text-neutral/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">{t(cls.descriptionKey)}</p>
                   </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll>
          <div className="flex flex-col items-center gap-6 mt-16">
              <CIDLogo/>
              <a href="#schedule" className="bg-primary-accent text-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:bg-white hover:text-primary-accent shadow-lg hover:shadow-accent-glow">
              {t('classesCTA')}
              </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Classes;