import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import DailyMenu from '../components/DailyMenu';
// import ProductMenu from '../components/ProductMenu';
import PlanCalculator from '../components/PlanCalculator';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import FooterCTA from '../components/FooterCTA';
import InclusionsInfo from '../components/InclusionsInfo';
import SEO from '../components/SEO';

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
      <SEO 
        title="Premium Wellness Bowls Chennai" 
        description="Premium Wellness Bowls & Functional Nutrition delivered fresh in Chennai. Precision macros, clean label, artisanal ingredients. Reset your ritual today."
        keywords="Meal Delivery Chennai, Healthy Food, Wellness Ritual, Keto Chennai, Vegan Meal Plan"
      />
      <div id="home"><Hero /></div>
      <Features />
      <InclusionsInfo />
      <div id="menu"><DailyMenu /></div>
      {/* <ProductMenu /> */}
      <div id="plans"><PlanCalculator /></div>
      <div id="community"><Testimonials /></div>
      <div id="faq"><FAQ /></div>
      <FooterCTA />
    </main>
  );
};

export default Home;
