import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WHY_RITUAL = [
  "Balanced bowls designed for daily wellness",
  "Freshly prepared based on daily orders",
  "Functional wellness shots included",
  "Clean cooking with minimal oil",
  "Real ingredients you can recognize",
];

const EVERY_RITUAL = [
  { icon: "🥗", label: "A balanced wellness bowl" },
  { icon: "⚗️", label: "A functional wellness shot" },
  { icon: "💧", label: "Infused hydration water" },
  { icon: "🔄", label: "Rotating seasonal recipes" },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Choose your Ritual meal", desc: "Pick a plan that fits your lifestyle — wellness bowl, shots, and hydration included." },
  { step: "02", title: "We prepare it fresh daily", desc: "Every bowl is cooked to order using real, recognizable ingredients. No batch cooking." },
  { step: "03", title: "Delivered within Chennai", desc: "Fresh delivery every morning to T Nagar and surrounding areas." },
  { step: "04", title: "Enjoy your daily wellness ritual", desc: "A meal that supports skin, gut, and energy — every single day." },
];

const WHY_ACCORDION = [
  {
    title: "Balanced bowls designed for daily wellness",
    body: "Each Ritual bowl is engineered with a precise ratio of protein, complex carbohydrates, healthy fats, and fiber to support sustained energy without mid-day crashes.",
  },
  {
    title: "Freshly prepared based on daily orders",
    body: "We only prepare what's ordered. No pre-cooked batches, no storing food overnight. Your bowl is made the morning of delivery.",
  },
  {
    title: "Functional wellness shots included",
    body: "Every plan includes a 60ml functional shot — formulated with ingredients like amla, ginger, and spirulina — that targets specific health benefits.",
  },
  {
    title: "Clean cooking with minimal oil",
    body: "We use only cold-pressed oils in small quantities. No refined seed oils, no excessive fat loading. Just clean, intentional cooking.",
  },
  {
    title: "Real ingredients you can recognize",
    body: "Every ingredient is traceable, seasonal, and meaningful. We don't hide anything behind proprietary blends or obscure additives.",
  },
];

const BrandStory = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="w-full bg-[#fcfaf7] overflow-hidden">

      {/* ─── 1. WHY RITUAL — Accordion + Image ─── */}
      <div className="bg-brand-olive py-16 md:py-24 px-4 md:px-16 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-sage/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-white/10 rounded-full mb-4">
              <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-white font-medium leading-tight">
              What Makes Ritual <span className="text-brand-sage italic">Different</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
            {/* Accordion */}
            <div className="flex-1 space-y-3">
              {WHY_ACCORDION.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full border border-brand-sage flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-brand-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-white font-serif text-base md:text-lg">{item.title}</span>
                    </div>
                    <svg
                      className={`w-4 h-4 text-brand-sage flex-shrink-0 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${openIdx === idx ? 'max-h-40' : 'max-h-0'}`}>
                    <p className="px-6 py-4 text-brand-beige/70 text-sm leading-relaxed border-t border-white/5">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right — image + stat cards */}
            <div className="lg:w-[420px] flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6">
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Fresh Ritual Bowl"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-olive/60 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { num: "28", label: "Bowl Varieties" },
                      { num: "7", label: "Functional Shots" },
                      { num: "0", label: "Hidden Additives" },
                      { num: "100%", label: "Made Fresh Daily" },
                    ].map((s, i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10 text-center">
                        <span className="text-brand-sage font-serif text-2xl font-bold block">{s.num}</span>
                        <span className="text-white/70 text-[10px] uppercase tracking-widest">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                to="/start-ritual"
                className="flex items-center justify-center gap-2 w-full text-center bg-brand-sage text-white px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-brand-olive transition-colors"
              >
                Start Your Ritual
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 2. EAT YOUR SKINCARE ─── */}
      <div className="py-16 md:py-24 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Eat Your Skincare"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-brand-sage text-white rounded-2xl px-5 py-4 shadow-xl hidden md:block">
                <span className="text-2xl font-serif font-bold block">Glow</span>
                <span className="text-[10px] uppercase tracking-widest">Starts Within</span>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full mb-6">
                <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">Our Concept</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-olive font-medium leading-tight mb-6">
                Eat Your <span className="text-brand-sage italic">Skincare</span>
              </h2>
              <p className="text-brand-olive/80 text-lg leading-relaxed mb-4">
                Healthy skin begins with what you eat. Ritual meals are built with ingredients that support skin health, gut balance, and overall wellness.
              </p>
              <p className="text-brand-olive/70 leading-relaxed mb-8">
                Our recipes are built using ingredients known to support skin glow, gut balance, and natural wellness — from antioxidant vegetables to nutrient-rich grains and healthy fats. Because the best skincare routine starts on your plate.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Antioxidant Rich", "Gut-Friendly", "Anti-Inflammatory", "Skin Glow Support"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-brand-sage/10 border border-brand-sage/20 text-brand-sage rounded-full text-[11px] font-bold uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 3. EVERY RITUAL INCLUDES + HOW IT WORKS ─── */}
      <div className="bg-brand-beige/20 py-16 md:py-24 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Every Ritual Includes */}
            <div>
              <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full mb-6">
                <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">Every Order</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-olive font-medium mb-4">
                What Goes Into Every Ritual
              </h2>
              <p className="text-brand-olive/70 mb-10 leading-relaxed">
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
              <p className="text-brand-olive/70 mb-10 leading-relaxed">
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
              <div className="mt-10">
                <Link
                  to="/#plans"
                  className="inline-flex items-center gap-2 bg-brand-olive text-white px-8 py-4 rounded-md text-sm font-bold uppercase tracking-widest hover:bg-brand-sage transition-colors"
                >
                  View Plans
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ─── 4. OUR PHILOSOPHY ─── */}
      {/* <div className="py-16 md:py-24 px-4 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full mb-6">
            <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">Our Belief</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-olive font-medium mb-6 max-w-3xl mx-auto leading-tight">
            Food Should Nourish More Than Just Hunger
          </h2>
          <p className="text-brand-olive/70 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            At Ritual, we believe everyday meals should support energy, gut health, skin health, and overall wellbeing. Our bowls are designed with intentional ingredients, balanced nutrition, and clean cooking methods — so you always know what you're putting into your body.
          </p>
          <p className="text-brand-olive/60 leading-relaxed max-w-xl mx-auto mb-12 italic font-serif text-xl">
            "Because when you eat better, you feel better."
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🌿", label: "Intentional Ingredients" },
              { icon: "🔥", label: "Clean Cooking Methods" },
              { icon: "⏰", label: "Freshly Prepared Daily" },
              { icon: "🚚", label: "Delivered Fresh" },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#fcfaf7] border border-brand-beige/30 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <span className="text-brand-olive font-serif text-sm md:text-base">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div> */}

    </section>
  );
};

export default BrandStory;
