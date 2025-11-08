import React from 'react';
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
  return (
    <>
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
