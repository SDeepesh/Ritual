import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import micro from '../assets/micro.jpg';

// const WHY_RITUAL = [
//   "Balanced bowls designed for daily wellness",
//   "Freshly prepared based on daily orders",
//   "Functional wellness shots included",
//   "Clean cooking with minimal oil",
//   "Real ingredients you can recognize",
// ];

// const WHY_ACCORDION = [
//   {
//     title: "Balanced bowls designed for daily wellness",
//     body: "Each Ritual bowl is engineered with a precise ratio of protein, complex carbohydrates, healthy fats, and fiber to support sustained energy without mid-day crashes.",
//   },
//   {
//     title: "Freshly prepared based on daily orders",
//     body: "We only prepare what's ordered. No pre-cooked batches, no storing food overnight. Your bowl is made the morning of delivery.",
//   },
//   {
//     title: "Functional wellness shots included",
//     body: "Every plan includes a 60ml functional shot — formulated with ingredients like amla, ginger, and spirulina — that targets specific health benefits.",
//   },
//   {
//     title: "Clean cooking with minimal oil",
//     body: "We use only cold-pressed oils in small quantities. No refined seed oils, no excessive fat loading. Just clean, intentional cooking.",
//   },
//   {
//     title: "Real ingredients you can recognize",
//     body: "Every ingredient is traceable, seasonal, and meaningful. We don't hide anything behind proprietary blends or obscure additives.",
//   },
// ];

const BrandStory = () => {
  // const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="w-full bg-[#fcfaf7] overflow-hidden">

      {/* ─── 1. WHY RITUAL — Accordion + Image ─── */}
      {/* <div className="bg-brand-olive py-16 md:py-24 px-4 md:px-16 relative overflow-hidden"> */}
      {/* Background blobs */}
      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-brand-sage/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-white/10 rounded-full mb-4">
              <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-white font-medium leading-tight">
              What Makes Ritual <span className="text-brand-sage italic">Different</span>
            </h2>
          </div> */}

      {/* <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start"> */}
      {/* Accordion */}
      {/* <div className="flex-1 space-y-3">
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
            </div> */}

      {/* Right — image + stat cards */}
      {/* <div className="lg:w-[420px] flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={micro}
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
      </div> */}

      {/* ─── 2. EAT YOUR SKINCARE ─── */}
      <div className="py-12 md:py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
            <div className="lg:w-[40%] relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={micro}
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
            <div className="lg:w-[60%]">
              <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full mb-4">
                <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">Our Concept</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-olive font-medium leading-tight mb-4">
                Eat Your <span className="text-brand-sage italic">Skincare</span>
              </h2>
              <p className="text-brand-olive/80 text-lg leading-relaxed mb-4">
                Healthy skin begins with what you eat. Ritual meals are built with ingredients that support skin health, gut balance, and overall wellness.
              </p>
              <p className="text-brand-olive/70 leading-relaxed mb-4">
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
