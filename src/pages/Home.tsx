import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import TrustBadges from '../components/TrustBadges';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <div className="bg-secondary-dark">
      <Hero />
      <Services />
      <Testimonials />
      <TrustBadges />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;