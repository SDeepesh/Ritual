import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import DailyMenu from '../components/DailyMenu';
// import ProductMenu from '../components/ProductMenu';
import PlanCalculator from '../components/PlanCalculator';
// import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';
// import BrandStory from '../components/BrandStory';
import HowItWorks from '../components/HowItWorks';
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
        title="Ritual Wellness | Functional Meals Delivered Fresh in Chennai"
        description="Premium wellness bowls, functional shots, and infused hydration delivered fresh daily in Chennai. Build healthy habits with our curated meal subscription."
        keywords="Meal Delivery Chennai, Functional Meals, Wellness Bowls, Eat Your Skincare, Healthy Food Subscription, Ritual Chennai"
      />
      <Hero />
      <Features />
      {/* <BrandStory /> */}
      <InclusionsInfo />
      <DailyMenu />
      {/* <ProductMenu /> */}
      <HowItWorks />
      <PlanCalculator />
      <BlogSection />
      <FAQ />
      <FooterCTA />
    </main>
  );
};

export default Home;
