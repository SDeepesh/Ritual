import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';

const Nutrition = () => {
  const pillars = [
    {
      num: '01',
      title: 'Precision Macros',
      desc: 'Every meal is engineered for an optimal ratio of protein, complex carbs, and healthy fats — not just calorie counting.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
      ),
    },
    {
      num: '02',
      title: 'Gut Health',
      desc: 'Probiotic-rich fermented ingredients and high-fiber produce to nourish your gut microbiome and improve digestion.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      ),
    },
    {
      num: '03',
      title: 'Micronutrients',
      desc: 'A rainbow of seasonal produce ensures you get essential vitamins and minerals — from Vitamin C to Zinc.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
      ),
    },
    {
      num: '04',
      title: 'Clean Label',
      desc: 'Zero refined sugars, harmful seed oils, or hidden preservatives. Every ingredient is traceable and transparent.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
      ),
    },
  ];

  const macroBreakdown = [
    { label: 'Protein', range: '25–35g', color: 'bg-orange-500', percent: '30%', detail: 'Lean meats, legumes, paneer, tofu' },
    { label: 'Carbs', range: '45–60g', color: 'bg-amber-500', percent: '45%', detail: 'Brown rice, millets, sweet potato, quinoa' },
    { label: 'Healthy Fats', range: '12–18g', color: 'bg-green-600', percent: '20%', detail: 'Cold-pressed oils, nuts, avocado, seeds' },
    { label: 'Fiber', range: '8–12g', color: 'bg-teal-600', percent: '5%', detail: 'Vegetables, whole grains, functional shots' },
  ];

  const principles = [
    { title: 'No Refined Sugar', desc: 'Only natural sweeteners like dates, jaggery, and honey — in minimal quantities.' },
    { title: 'No Seed Oils', desc: 'We cook only with cold-pressed coconut, olive, and sesame oils.' },
    { title: 'No Preservatives', desc: 'Every meal is cooked fresh on the day of delivery. Nothing stored, nothing added.' },
    { title: 'No Artificial Colors', desc: 'All color comes from real food — turmeric, beetroot, spinach, and saffron.' },
    { title: 'Locally Sourced', desc: 'We partner with organic farms across Tamil Nadu for seasonal, pesticide-free produce.' },
    { title: 'Full Transparency', desc: 'Every meal comes with a complete macro and ingredient breakdown. No hidden ingredients.' },
  ];

  return (
    <div className="pb-16">
      <SEO 
        title="Precision Nutrition & Macros" 
        description="Learn about the Ritual nutrition standard. Precision macros, gut health, and clean label ingredients for optimal metabolic wellness."
        keywords="Precision Nutrition Chennai, Macro Balanced Meals, Gut Health Chennai, Clean Eating"
      />
      <PageHeader
        title="Nutrition"
        subtitle="Optimizing your health through nutrient density and functional ingredients."
      />

      {/* Nutrition Pillars */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-12 md:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <div key={idx} className="bg-white rounded-[20px] border border-brand-beige/20 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="h-2 bg-brand-sage"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-md bg-brand-sage/10 flex items-center justify-center text-brand-sage mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-serif text-brand-olive mb-2">{item.title}</h4>
                <p className="text-sm text-brand-olive/70 font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Macro Standard */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-16 md:mt-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full mb-4">
              <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">Per Meal</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl text-brand-olive font-serif font-medium tracking-[2px] uppercase leading-tight mb-6">
              The Macro <br /><span className="font-serif normal-case text-brand-sage">Standard.</span>
            </h3>
            <p className="text-base md:text-lg text-brand-olive/80 leading-relaxed font-sans font-light mb-8">
              Every Ritual bowl is designed to deliver a precise balance of macronutrients. Our nutritionists calibrate each recipe to fuel sustained energy, muscle recovery, and mental clarity — all within a single, satisfying meal.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#fcfaf7] rounded-[20px] p-6 border border-brand-beige/30 text-center">
                <span className="text-3xl font-serif font-bold text-brand-olive block mb-1">400–550</span>
                <span className="text-[9px] uppercase tracking-[2px] text-brand-sage font-bold">Calories / Bowl</span>
              </div>
              <div className="bg-[#fcfaf7] rounded-[20px] p-6 border border-brand-beige/30 text-center">
                <span className="text-3xl font-serif font-bold text-brand-olive block mb-1">30+</span>
                <span className="text-[9px] uppercase tracking-[2px] text-brand-sage font-bold">Ingredients Rotated</span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="space-y-4">
              {macroBreakdown.map((macro, idx) => (
                <div key={idx} className="bg-white rounded-[16px] border border-brand-beige/20 p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${macro.color}`}></div>
                      <span className="font-serif text-brand-olive font-medium">{macro.label}</span>
                    </div>
                    <span className="text-lg font-serif font-bold text-brand-olive">{macro.range}</span>
                  </div>
                  <div className="w-full bg-brand-beige/10 rounded-full h-2 mb-2">
                    <div className={`h-2 rounded-full ${macro.color} opacity-70`} style={{ width: macro.percent }}></div>
                  </div>
                  <p className="text-[11px] text-brand-sage/60 font-light">{macro.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clean Label Promise */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-16 md:mt-24">
        <div className="bg-brand-olive text-white p-8 md:p-12 rounded-[20px] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-serif mb-2 tracking-wider font-medium">The Clean Label Promise</h3>
            <p className="text-brand-beige/70 text-sm mb-8">What we never use — and why it matters.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {principles.map((item, idx) => (
                <div key={idx} className="p-5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <p className="text-white font-serif text-sm">{item.title}</p>
                  </div>
                  <p className="text-[12px] text-brand-beige/60 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dietary Options */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-16 md:mt-24">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full mb-4">
            <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">For Everyone</span>
          </div>
          <h3 className="text-3xl md:text-4xl text-brand-olive font-serif font-medium tracking-[2px] uppercase">
            Three <span className="normal-case text-brand-sage">Dietary Paths</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Non-Vegetarian', desc: 'Lean chicken, fish, and eggs paired with complex carbs and greens. Highest protein density for active lifestyles.', tag: 'High Protein', accent: 'bg-red-500' },
            { title: 'Vegetarian', desc: 'Paneer, legumes, dairy, and seasonal vegetables. Rich, satisfying meals that never feel like a compromise.', tag: 'Balanced', accent: 'bg-green-500' },
            { title: 'Vegan', desc: 'Plant-powered bowls with tofu, tempeh, quinoa, and nuts. Complete amino acid profiles from diverse plant sources.', tag: 'Plant-Forward', accent: 'bg-teal-500' },
          ].map((option, idx) => (
            <div key={idx} className="bg-[#fcfaf7] rounded-[20px] p-8 border border-brand-beige/30 text-center hover:shadow-md transition-shadow relative overflow-hidden">
              <div className={`w-16 h-1 ${option.accent} rounded-full mx-auto mb-6`}></div>
              <span className={`inline-block text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-full mb-4 ${option.accent}/10 text-brand-olive`}>{option.tag}</span>
              <h4 className="text-xl font-serif text-brand-olive mb-3">{option.title}</h4>
              <p className="text-sm text-brand-sage/80 font-light leading-relaxed">{option.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/#plans"
            className="inline-block bg-brand-olive text-white px-10 py-3 rounded-md font-medium uppercase tracking-[2px] hover:bg-brand-sage transition-all shadow-lg text-sm"
          >
            Choose Your Plan
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Nutrition;
