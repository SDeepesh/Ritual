import React from 'react';
import { Link } from 'react-router-dom';

const EVERY_RITUAL = [
  { icon: "🥗", label: "A balanced wellness bowl" },
  { icon: "⚗️", label: "A functional wellness shot" },
  { icon: "💧", label: "Infused hydration water" },
  { icon: "🔄", label: "Rotating seasonal recipes" },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Choose your Ritual meal", desc: "Pick a plan that fits your lifestyle — wellness bowl, shots, and hydration included." },
  { step: "02", title: "We prepare it fresh daily", desc: "Every bowl is cooked to order using real, recognizable ingredients. No batch cooking." },
  { step: "03", title: "Delivered within Chennai", desc: <>Fresh delivery every morning across selected areas in Chennai. <Link to="/delivery" class="text-brand-olive/60 text-sm leading-relaxed underline">Check if your pincode is serviceable.</Link></> },
  { step: "04", title: "Enjoy your daily wellness ritual", desc: "A meal that supports skin, gut, and energy — every single day." },
];

const HowItWorks = () => {
  return (
    <div className="bg-brand-beige/20 py-12 md:py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">

          {/* Every Ritual Includes */}
          <div>
            <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full mb-6">
              <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">Every Order</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-olive font-medium mb-4">
              What Goes Into Every Ritual
            </h2>
            <p className="text-brand-olive/70 mb-4 leading-relaxed">
              Designed to nourish your body from within. Each Ritual is a complete wellness experience — not just a meal.
            </p>
            <div className="space-y-4">
              {EVERY_RITUAL.map((item, idx) => (
                <div key={idx} className="flex items-center gap-5 bg-white rounded-xl px-6 py-5 border border-brand-beige/20 shadow-sm">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-brand-olive font-serif text-base md:text-lg">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div>
            <div className="inline-block px-3 py-1 bg-brand-olive/10 rounded-full mb-6">
              <span className="text-[10px] text-brand-olive uppercase tracking-[3px] font-bold">Simple Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-olive font-medium mb-4">
              How Ritual Works
            </h2>
            <p className="text-brand-olive/70 mb-4 leading-relaxed">
              A simple daily routine built around nourishment, designed to fit seamlessly into your Chennai lifestyle.
            </p>
            <div className="space-y-6">
              {HOW_IT_WORKS.map((item, idx) => (
                <div key={idx} className="flex gap-5 items-start">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-brand-olive text-white flex items-center justify-center font-serif font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-brand-olive font-serif text-base md:text-lg mb-1">{item.title}</h4>
                    <p className="text-brand-olive/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="mt-10">
              <Link
                to="/start-ritual"
                className="inline-flex items-center gap-2 bg-brand-olive text-white px-8 py-3 rounded-md text-sm font-medium uppercase tracking-widest hover:bg-brand-sage transition-colors"
              >
                View Plans
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div> */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
