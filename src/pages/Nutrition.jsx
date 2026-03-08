import React from 'react';
import PageHeader from '../components/PageHeader';

const Nutrition = () => {
  return (
    <div className="pb-24">
      <PageHeader 
        title="Nutrition" 
        subtitle="Optimizing your health through nutrient density and portion control." 
      />
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-16 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-8 bg-brand-sage/5 rounded-2xl border border-brand-beige/20 text-center">
            <h3 className="text-xl font-serif text-brand-olive mb-4">Precision Macros</h3>
            <p className="text-brand-sage/70 font-serif italic text-sm">Every meal is balanced for sustained energy, not just calories.</p>
          </div>
          <div className="p-8 bg-brand-sage/5 rounded-2xl border border-brand-beige/20 text-center">
            <h3 className="text-xl font-serif text-brand-olive mb-4">Probiotics</h3>
            <p className="text-brand-sage/70 font-serif italic text-sm">Nourishing the gut microbiome with fermented and fiber-rich ingredients.</p>
          </div>
          <div className="p-8 bg-brand-sage/5 rounded-2xl border border-brand-beige/20 text-center">
            <h3 className="text-xl font-serif text-brand-olive mb-4">Micronutrients</h3>
            <p className="text-brand-sage/70 font-serif italic text-sm">Vitamins and minerals from a diverse "rainbow" of seasonal produce.</p>
          </div>
          <div className="p-8 bg-brand-sage/5 rounded-2xl border border-brand-beige/20 text-center">
            <h3 className="text-xl font-serif text-brand-olive mb-4">Clean Lab</h3>
            <p className="text-brand-sage/70 font-serif italic text-sm">Absolutely no refined sugars, harmful seed oils, or hidden preservatives.</p>
          </div>
        </div>
        
        <div className="mt-24 p-8 md:p-12 bg-brand-olive rounded-3xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-sage/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="max-w-3xl relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-white uppercase tracking-wider">The Macro Standard</h2>
            <p className="text-brand-beige/70 text-lg md:text-xl leading-relaxed font-serif italic mb-10">
              We provide full transparency. Our ritual includes a detailed nutritional breakdown for every meal, tracking protein, carbs, healthy fats, and calories to support your fitness objectives.
            </p>
            <button className="bg-brand-olive text-white px-10 py-4 rounded-xl font-bold uppercase tracking-[2px] transition-all hover:bg-white hover:text-brand-sage shadow-lg">
              Download Menu Macros (PDF)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nutrition;
