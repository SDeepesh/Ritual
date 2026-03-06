import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductMenu from './components/ProductMenu';
import MealInclusions from './components/MealInclusions';
import PlanCalculator from './components/PlanCalculator';
import DailyMenu from './components/DailyMenu';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FooterCTA from './components/FooterCTA';
import logoImg from './assets/ritual-logo-trim.png';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-olive selection:bg-brand-sage selection:text-white">
      {/* Top Navigation Bar placeholder */}
      <nav className="w-full z-50 py-5 px-4 md:px-16 flex justify-between items-center transition-all bg-white/90 backdrop-blur-md border-b border-brand-beige/50">
        <a href="/" className="flex items-center">
          <img src={logoImg} alt="Ritual Logo" className="h-8 object-contain w-[100px] md:w-[120px]" />
        </a>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-brand-olive text-md tracking-wide font-medium">
            <button className="hover:text-brand-sage transition-colors normal-case tracking-wide font-medium">Menu</button>
            <button className="hover:text-brand-sage transition-colors normal-case tracking-wide font-medium">Plans</button>
            <button className="hover:text-brand-sage transition-colors normal-case tracking-wide font-medium">Our Story</button>
          </div>
          <button className="border border-brand-olive text-brand-olive px-6 py-2 rounded text-md hover:bg-brand-olive hover:text-white transition-all">
            Order now
          </button>
        </div>
      </nav>

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Features />
        <DailyMenu />
        {/* <ProductMenu />
        <MealInclusions /> */}
        <PlanCalculator />
        <Testimonials />
        <FAQ />
        <FooterCTA />
      </main>

      {/* Simple Footer */}
      <footer className="bg-white py-8 px-4 md:px-16 border-t border-brand-beige/20 flex flex-col md:flex-row justify-between items-center text-sm text-brand-sage">
        <p>&copy; {new Date().getFullYear()} Ritual Foods. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <button className="hover:text-brand-olive transition-colors">Instagram</button>
          <button className="hover:text-brand-olive transition-colors">Twitter</button>
          <button className="hover:text-brand-olive transition-colors">Privacy</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
