import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useI18n } from '../hooks/useI18n';
import AnimateOnScroll from './AnimateOnScroll';
import FinalCTA from './FinalCTA';
import type { Testimonial, ValuePillar } from '../types';

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M10 16.535l-5.223 2.745.998-5.816L.99 8.28l5.838-.848L10 2l2.174 5.432 5.838.848-4.785 4.184.998 5.816L10 16.535z" clipRule="evenodd" />
    </svg>
);

// --- Icon Set for Pillars ---
const MusicalNoteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V7.5A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v1.5M9 9l-3 3m0 0l3 3m-3-3h12" />
  </svg>
);
const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.51.056 1.02.082 1.5.082a2.25 2.25 0 012.25 2.25m-9.75 0h9.75m-9.75 0a2.25 2.25 0 01-2.25-2.25M13.5 18.75m-7.5-2.962a3.375 3.375 0 00-5.624-2.496A3.375 3.375 0 006.75 15.75m-7.5-2.962V7.5A2.25 2.25 0 014.5 5.25h5.25A2.25 2.25 0 0112 7.5v3.038m-7.5-2.962a3.375 3.375 0 00-5.624-2.496A3.375 3.375 0 006.75 15.75m-7.5-2.962V7.5a2.25 2.25 0 012.25-2.25h5.25a2.25 2.25 0 012.25 2.25v3.038m0 0a2.25 2.25 0 003.75 0V7.5a2.25 2.25 0 00-2.25-2.25h-5.25a2.25 2.25 0 00-2.25 2.25v3.038" />
  </svg>
);
const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
);

const afrobeatsPillars: ValuePillar[] = [
    { id: 'groove', titleKey: 'afrobeatsPillar1Title', contentKey: 'afrobeatsPillar1Desc', Icon: MusicalNoteIcon },
    { id: 'fusion', titleKey: 'afrobeatsPillar2Title', contentKey: 'afrobeatsPillar2Desc', Icon: UsersIcon },
    { id: 'joy', titleKey: 'afrobeatsPillar3Title', contentKey: 'afrobeatsPillar3Desc', Icon: SunIcon },
];

const AfrobeatsPage: React.FC = () => {
    const { t, locale } = useI18n();
    const baseUrl = 'https://www.farrayscenter.com';

    const afrobeatsTestimonials: Testimonial[] = [
      { id: 1, name: t('afrobeatsTestimonial1Name'), image: '/images/testimonials/fatou-d.jpg', rating: 5, 
        city: { en: 'Dakar, Senegal', es: 'Dakar, Senegal', ca: 'Dakar, Senegal', fr: 'Dakar, Sénégal' },
        quote: { en: t('afrobeatsTestimonial1Quote'), es: t('afrobeatsTestimonial1Quote'), ca: t('afrobeatsTestimonial1Quote'), fr: t('afrobeatsTestimonial1Quote') } },
      { id: 2, name: t('afrobeatsTestimonial2Name'), image: '/images/testimonials/liam-s.jpg', rating: 5, 
        city: { en: 'Dublin, Ireland', es: 'Dublín, Irlanda', ca: 'Dublín, Irlanda', fr: 'Dublin, Irlande' },
        quote: { en: t('afrobeatsTestimonial2Quote'), es: t('afrobeatsTestimonial2Quote'), ca: t('afrobeatsTestimonial2Quote'), fr: t('afrobeatsTestimonial2Quote') } }
    ];

    return (
        <>
            <Helmet>
                <title>{t('afrobeatsPageTitle')}</title>
                <meta name="description" content={t('afrobeatsMetaDescription')} />
                <link rel="canonical" href={`${baseUrl}/${locale}/afrobeats`} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${baseUrl}/${locale}/afrobeats`} />
                <meta property="og:title" content={t('afrobeatsPageTitle')} />
                <meta property="og:description" content={t('afrobeatsMetaDescription')} />
                <meta property="og:image" content={`${baseUrl}/images/og-image-afrobeats.jpg`} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={`${baseUrl}/${locale}/afrobeats`} />
                <meta name="twitter:title" content={t('afrobeatsPageTitle')} />
                <meta name="twitter:description" content={t('afrobeatsMetaDescription')} />
                <meta name="twitter:image" content={`${baseUrl}/images/twitter-image-afrobeats.jpg`} />

                {/* Hreflang tags */}
                <link rel="alternate" hreflang="es" href={`${baseUrl}/es/afrobeats`} />
                <link rel="alternate" hreflang="ca" href={`${baseUrl}/ca/afrobeats`} />
                <link rel="alternate" hreflang="en" href={`${baseUrl}/en/afrobeats`} />
                <link rel="alternate" hreflang="fr" href={`${baseUrl}/fr/afrobeats`} />
                <link rel="alternate" hreflang="x-default" href={`${baseUrl}/es/afrobeats`} />
            </Helmet>

            <div className="pt-20 md:pt-24">
                {/* Hero */}
                <section id="afrobeats-hero" className="relative text-center py-24 md:py-32 overflow-hidden bg-black flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/40 via-black to-black opacity-70 z-10"></div>
                 <video
                    className="absolute z-0 top-0 left-0 w-full h-full object-cover opacity-30"
                    src="/videos/afrobeats-hero.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    title="Dynamic afrobeats performance"
                ></video>
                <div className="relative z-20 container mx-auto px-6">
                    <AnimateOnScroll>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-tight mb-4 holographic-text">
                            {t('afrobeatsHeroTitle')}
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-xl text-neutral/80 mt-6">
                            {t('afrobeatsHeroSubtitle')}
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>
            
            {/* About Afrobeats */}
            <section id="about-afrobeats" className="py-20 md:py-32 bg-black">
              <div className="container mx-auto px-6">
                  <AnimateOnScroll>
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                      <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral mb-4">
                        {t('afrobeatsAboutTitle')}
                      </h2>
                    </div>
                  </AnimateOnScroll>
                  <div className="max-w-4xl mx-auto text-lg text-neutral/80 leading-relaxed space-y-6 mb-16 text-center">
                    <AnimateOnScroll delay={100}><p>{t('afrobeatsAboutDesc1')}</p></AnimateOnScroll>
                    <AnimateOnScroll delay={200}><p>{t('afrobeatsAboutDesc2')}</p></AnimateOnScroll>
                  </div>
                  <div className="flex flex-wrap justify-center -m-4">
                    {afrobeatsPillars.map((pillar, index) => (
                      <div key={pillar.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                        <AnimateOnScroll delay={300 + index * 100} className="h-full">
                          <div className="group p-8 bg-black/50 backdrop-blur-md border border-primary-dark/50 rounded-2xl shadow-lg transition-all duration-300 hover:border-primary-accent hover:shadow-accent-glow hover:-translate-y-2 h-full flex flex-col items-center text-center">
                            <div className="mb-6">
                              <div className="bg-primary-dark/30 p-4 rounded-xl inline-block shadow-inner">
                                <pillar.Icon className="h-10 w-10 text-primary-accent" />
                              </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-neutral">{t(pillar.titleKey)}</h3>
                            <p className="text-neutral/80 leading-relaxed flex-grow">{t(pillar.contentKey)}</p>
                          </div>
                        </AnimateOnScroll>
                      </div>
                    ))}
                  </div>
              </div>
            </section>

            {/* Our Classes */}
            <section id="afrobeats-classes" className="py-20 md:py-32 bg-primary-dark/10">
              <div className="container mx-auto px-6">
                <AnimateOnScroll>
                  <div className="text-center mb-16 max-w-3xl mx-auto">
                      <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral mb-4">{t('afrobeatsClassesTitle')}</h2>
                      <p className="text-lg text-neutral/80">{t('afrobeatsClassesSubtitle')}</p>
                  </div>
                </AnimateOnScroll>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <AnimateOnScroll delay={100}>
                        <div className="group p-8 bg-black/50 backdrop-blur-md border border-primary-dark/50 rounded-2xl shadow-lg h-full flex flex-col text-center items-center">
                            <h3 className="text-3xl font-bold mb-4 text-neutral">{t('afrobeatsLevelBeginnerTitle')}</h3>
                            <p className="text-neutral/80 mb-6 flex-grow">{t('afrobeatsLevelBeginnerDesc')}</p>
                            <a href="#schedule" className="font-bold text-primary-accent hover:text-white transition-colors duration-300 mt-auto">{t('danceClassesViewSchedule')} <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span></a>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={200}>
                         <div className="group p-8 bg-black/50 backdrop-blur-md border-2 border-primary-accent shadow-accent-glow rounded-2xl shadow-lg h-full flex flex-col text-center items-center scale-105">
                            <h3 className="text-3xl font-bold mb-4 text-primary-accent holographic-text">{t('afrobeatsLevelInterTitle')}</h3>
                            <p className="text-neutral/80 mb-6 flex-grow">{t('afrobeatsLevelInterDesc')}</p>
                            <a href="#schedule" className="font-bold text-primary-accent hover:text-white transition-colors duration-300 mt-auto">{t('danceClassesViewSchedule')} <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span></a>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={300}>
                         <div className="group p-8 bg-black/50 backdrop-blur-md border border-primary-dark/50 rounded-2xl shadow-lg h-full flex flex-col text-center items-center">
                            <h3 className="text-3xl font-bold mb-4 text-neutral">{t('afrobeatsLevelAdvancedTitle')}</h3>
                            <p className="text-neutral/80 mb-6 flex-grow">{t('afrobeatsLevelAdvancedDesc')}</p>
                            <a href="#schedule" className="font-bold text-primary-accent hover:text-white transition-colors duration-300 mt-auto">{t('danceClassesViewSchedule')} <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span></a>
                        </div>
                    </AnimateOnScroll>
                </div>
              </div>
            </section>

            {/* Instructor */}
            <section id="afrobeats-instructor" className="py-20 md:py-32 bg-black">
                <div className="container mx-auto px-6">
                    <AnimateOnScroll>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral">{t('afrobeatsInstructorTitle')}</h2>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={200} className="max-w-4xl mx-auto">
                      <div className="group bg-black/50 backdrop-blur-md border border-primary-dark/50 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary-accent/50 group-hover:border-primary-accent transition-colors duration-300">
                           <img src="/images/teachers/david-adeleke.jpg" alt={t('afrobeatsInstructorName')} loading="lazy" className="w-full h-full object-cover"/>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-bold text-neutral">{t('afrobeatsInstructorName')}</h3>
                            <p className="text-primary-accent font-semibold text-lg mb-3">{t('afrobeatsInstructorSpecialty')}</p>
                            <p className="text-neutral/80 leading-relaxed">{t('afrobeatsInstructorBio')}</p>
                        </div>
                      </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Testimonials */}
            <section id="afrobeats-testimonials" className="py-20 md:py-32 bg-primary-dark/10">
                <div className="container mx-auto px-6">
                    <AnimateOnScroll>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral">{t('afrobeatsTestimonialsTitle')}</h2>
                        </div>
                    </AnimateOnScroll>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {afrobeatsTestimonials.map((testimonial, index) => (
                            <AnimateOnScroll key={testimonial.id} delay={index * 150}>
                                <div className="flex flex-col h-full p-8 bg-black/50 backdrop-blur-md border border-primary-dark/50 rounded-2xl shadow-lg">
                                    <div className="flex mb-4" role="img" aria-label={t('ratingAriaLabel').replace('{rating}', testimonial.rating.toString())}>
                                        {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-primary-accent" />)}
                                    </div>
                                    <blockquote className="flex-grow text-neutral/90 italic mb-6">
                                        <p className="text-lg">"{testimonial.quote[locale]}"</p> 
                                    </blockquote>
                                    <div className="flex items-center space-x-4 mt-auto">
                                        <img src={testimonial.image} alt={testimonial.name} loading="lazy" className="w-14 h-14 rounded-full border-2 border-primary-accent object-cover"/>
                                        <div>
                                            <cite className="font-bold text-lg text-neutral not-italic">{testimonial.name}</cite>
                                            <p className="text-sm text-neutral/60">{testimonial.city[locale]}</p>
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
        </>
    );
}

export default AfrobeatsPage;
