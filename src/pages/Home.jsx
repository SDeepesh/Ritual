import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import DailyMenu from '../components/DailyMenu';
import ProductMenu from '../components/ProductMenu';
import PlanCalculator from '../components/PlanCalculator';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import FooterCTA from '../components/FooterCTA';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Small timeout to ensure DOM is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <main>
      <div id="home"><Hero /></div>
      <Features />
      <div id="menu"><DailyMenu /></div>
      <ProductMenu />
      <div id="plans"><PlanCalculator /></div>
      <div id="community"><Testimonials /></div>
      <div id="faq"><FAQ /></div>
      <FooterCTA />
    </main>
  );
};

export default Home;
