import React from 'react';
import { useI18n } from '../hooks/useI18n';
import type { Locale, Testimonial } from '../types';
import AnimateOnScroll from './AnimateOnScroll';

const testimonialData: Testimonial[] = [
  { id: 1, name: 'Anna K.', image: '/images/testimonials/anna-k.jpg', rating: 5, 
    city: { en: 'Barcelona, Spain', es: 'Barcelona, España', ca: 'Barcelona, Espanya', fr: 'Barcelone, Espagne' },
    quote: { en: 'FIDC transformed not just my dancing, but my confidence. Yunaisy is a true inspiration!', es: 'FIDC transformó no solo mi baile, sino mi confianza. ¡Yunaisy es una verdadera inspiración!', ca: 'FIDC va transformar no només el meu ball, sinó la meva confiança. La Yunaisy és una veritable inspiració!', fr: 'FIDC a transformé non seulement ma danse, mais aussi ma confiance. Yunaisy est une véritable inspiration !' } },
  { id: 2, name: 'David L.', image: '/images/testimonials/david-l.jpg', rating: 5, 
    city: { en: 'London, UK', es: 'Londres, Reino Unido', ca: 'Londres, Regne Unit', fr: 'Londres, Royaume-Uni' },
    quote: { en: 'The level of professionalism and the sense of community here are unmatched in Barcelona.', es: 'El nivel de profesionalismo y el sentido de comunidad aquí son inigualables en Barcelona.', ca: 'El nivell de professionalitat i el sentit de comunitat aquí són inigualables a Barcelona.', fr: 'Le niveau de professionnalisme et le sens de la communauté ici sont inégalés à Barcelone.' } },
  { id: 3, name: 'Sophie M.', image: '/images/testimonials/sophie-m.jpg', rating: 5, 
    city: { en: 'Paris, France', es: 'París, Francia', ca: 'París, França', fr: 'Paris, France' },
    quote: { en: "The 'Método Farray®' is challenging but incredibly rewarding. I've grown so much as a dancer.", es: "El 'Método Farray®' es desafiante pero increíblemente gratificante. He crecido mucho como bailarina.", ca: "El 'Mètode Farray®' és desafiador però increïblement gratificant. He crescut molt com a ballarina.", fr: "La 'Méthode Farray®' est exigeante mais incroyablement enrichissante. J'ai tellement grandi en tant que danseuse." } },
    { id: 4, name: 'Maria G.', image: '/images/testimonials/maria-g.jpg', rating: 5,
    city: { en: 'New York, USA', es: 'Nueva York, EE. UU.', ca: 'Nova York, EUA', fr: 'New York, États-Unis' },
    quote: { en: 'Coming from an international background, I was looking for a school with a global vision. FIDC exceeded all my expectations. World-class.', es: 'Viniendo de un entorno internacional, buscaba una escuela con una visión global. FIDC superó todas mis expectativas. De clase mundial.', ca: 'Venint d\'un entorn internacional, buscava una escola amb una visió global. FIDC va superar totes les meves expectatives. De classe mundial.', fr: 'Venant d\'un milieu international, je cherchais une école avec une vision globale. FIDC a dépassé toutes mes attentes. De classe mondiale.' } },
  { id: 5, name: 'Carlos R.', image: '/images/testimonials/carlos-r.jpg', rating: 5,
    city: { en: 'Miami, USA', es: 'Miami, EE. UU.', ca: 'Miami, EUA', fr: 'Miami, États-Unis' },
    quote: { en: 'The energy at FIDC is contagious. It\'s more than a dance school; it\'s a family that pushes you to be your best.', es: 'La energía en FIDC es contagiosa. Es más que una escuela de baile; es una familia que te impulsa a ser tu mejor versión.', ca: 'L\'energia a FIDC és contagiosa. És més que una escola de ball; és una família que t\'impulsa a ser la teva millor versió.', fr: 'L\'énergie à FIDC est contagieuse. C\'est plus qu\'une école de danse ; c\'est une famille qui vous pousse à donner le meilleur de vous-même.' } }
];

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M10 16.535l-5.223 2.745.998-5.816L.99 8.28l5.838-.848L10 2l2.174 5.432 5.838.848-4.785 4.184.998 5.816L10 16.535z" clipRule="evenodd" />
  </svg>
);


const Testimonials: React.FC = () => {
  const { t, locale } = useI18n();

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-primary-dark/10 overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral">
              {t('testimonialsTitle')}
            </h2>
          </div>
        </AnimateOnScroll>
        <div className="flex flex-col items-center max-w-6xl mx-auto gap-8">
            {testimonialData.map((testimonial, index) => (
                <AnimateOnScroll
                    key={testimonial.id} 
                    delay={index * 150}
                    className="w-full max-w-3xl"
                    style={{ zIndex: index }}
                >
                    <div className="flex flex-col h-full p-8 bg-black/50 backdrop-blur-md border border-primary-dark/50 rounded-2xl shadow-lg transition-all duration-300 hover:border-primary-accent hover:shadow-accent-glow hover:-translate-y-2 hover:!z-50">
                        <div 
                          className="flex mb-4" 
                          role="img" 
                          aria-label={t('ratingAriaLabel').replace('{rating}', testimonial.rating.toString())}
                        >
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <StarIcon key={i} className="w-5 h-5 text-primary-accent" />
                            ))}
                        </div>
                        <blockquote className="flex-grow text-neutral/90 italic mb-6">
                           <p className="text-lg">"{testimonial.quote[locale]}"</p> 
                        </blockquote>
                        <div className="flex items-center space-x-4 mt-auto">
                            <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full border-2 border-primary-accent object-cover"/>
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
  );
};

export default Testimonials;