import React from 'react';
import { useI18n } from '../hooks/useI18n';
import type { DetailedClassInfo } from '../types';
import AnimateOnScroll from './AnimateOnScroll';
import FinalCTA from './FinalCTA';

const detailedClassData: DetailedClassInfo[] = [
  { 
    id: 'contemporary', 
    titleKey: 'classCatContemporaryTitle', 
    descriptionKey: 'classCatContemporaryDesc',
    detailedDescriptionKey: 'classDetailContemporaryDesc',
    substylesKey: 'classDetailContemporarySubstyles',
    levelKey: 'classDetailContemporaryLevel',
    image: '/images/classes/class-contemporary-jazz.jpg' 
  },
  { 
    id: 'urban', 
    titleKey: 'classCatUrbanTitle', 
    descriptionKey: 'classCatUrbanDesc',
    detailedDescriptionKey: 'classDetailUrbanDesc',
    substylesKey: 'classDetailUrbanSubstyles',
    levelKey: 'classDetailUrbanLevel',
    image: '/images/classes/class-urban.jpg' 
  },
  { 
    id: 'latin', 
    titleKey: 'classCatLatinTitle', 
    descriptionKey: 'classCatLatinDesc',
    detailedDescriptionKey: 'classDetailLatinDesc',
    substylesKey: 'classDetailLatinSubstyles',
    levelKey: 'classDetailLatinLevel',
    image: '/images/classes/class-latin.jpg' 
  },
  { 
    id: 'fitness', 
    titleKey: 'classCatFitnessTitle', 
    descriptionKey: 'classCatFitnessDesc',
    detailedDescriptionKey: 'classDetailFitnessDesc',
    substylesKey: 'classDetailFitnessSubstyles',
    levelKey: 'classDetailFitnessLevel',
    image: '/images/classes/class-fitness.jpg' 
  },
  { 
    id: 'morning', 
    titleKey: 'classCatMorningTitle', 
    descriptionKey: 'classCatMorningDesc',
    detailedDescriptionKey: 'classDetailMorningDesc',
    substylesKey: 'classDetailMorningSubstyles',
    levelKey: 'classDetailMorningLevel',
    image: '/images/classes/class-morning.jpg' 
  },
  { 
    id: 'world', 
    titleKey: 'classCatWorldTitle', 
    descriptionKey: 'classCatWorldDesc',
    detailedDescriptionKey: 'classDetailWorldDesc',
    substylesKey: 'classDetailWorldSubstyles',
    levelKey: 'classDetailWorldLevel',
    image: '/images/classes/class-world.jpg' 
  },
];

const DanceClassesPage: React.FC = () => {
    const { t } = useI18n();

    return (
        <div className="pt-20 md:pt-24">
            <section id="classes-hero" className="relative text-center py-20 md:py-28 overflow-hidden bg-black">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/40 via-black to-black opacity-70"></div>
                 <video
                    className="absolute z-0 top-0 left-0 w-full h-full object-cover opacity-20"
                    src="/videos/final-cta-epic.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    title="Dynamic dance class montage"
                ></video>
                <div className="relative z-10 container mx-auto px-6">
                    <AnimateOnScroll>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-tight mb-4 holographic-text">
                            {t('danceClassesPageTitle')}
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-xl text-neutral/80 mt-6">
                            {t('danceClassesPageSubtitle')}
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            <section id="class-details" className="py-20 md:py-32 bg-primary-dark/10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {detailedClassData.map((cls, index) => (
                            <AnimateOnScroll key={cls.id} delay={index * 100}>
                                <div className="group bg-black/50 backdrop-blur-md border border-primary-dark/50 rounded-2xl shadow-lg h-full flex flex-col overflow-hidden transition-all duration-300 hover:border-primary-accent hover:shadow-accent-glow hover:-translate-y-2">
                                    <div className="relative h-64 overflow-hidden">
                                        <img src={cls.image} alt={t(cls.titleKey)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    </div>
                                    <div className="p-8 flex-grow flex flex-col">
                                        <h2 className="text-3xl font-bold mb-3 text-neutral">{t(cls.titleKey)}</h2>
                                        <p className="text-neutral/80 mb-6 flex-grow">{t(cls.detailedDescriptionKey)}</p>
                                        <div className="mt-auto border-t border-primary-dark/50 pt-6 space-y-4 text-sm">
                                            <div>
                                                <h4 className="font-bold text-neutral/60 uppercase tracking-wider mb-1">{t('danceClassesSubstylesTitle')}</h4>
                                                <p className="text-primary-accent font-medium">{t(cls.substylesKey)}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-neutral/60 uppercase tracking-wider mb-1">{t('danceClassesLevelTitle')}</h4>
                                                <p className="text-neutral">{t(cls.levelKey)}</p>
                                            </div>
                                        </div>
                                        <div className="mt-8">
                                            <a href="#schedule" className="font-bold text-lg text-white hover:text-primary-accent transition-colors duration-300 bg-primary-dark/50 hover:bg-primary-dark/20 rounded-full py-3 px-6 inline-flex items-center">
                                                <span>{t('danceClassesViewSchedule')}</span>
                                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 ml-2">→</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>
            <FinalCTA />
        </div>
    );
}

export default DanceClassesPage;
