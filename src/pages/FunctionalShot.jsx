import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import shotsLineupImg from '../assets/shot.PNG';
import shotsLineupImgMobile from '../assets/footer_bg_.png';
import LazyImage from '../components/LazyImage';

const FunctionalShot = () => {
  const shots = [
    {
      name: 'Coconut Hydration Shot',
      color: 'bg-sky-400',
      tagline: 'Hydration & Mineral Balance',
      ingredients: ['Tender Coconut Water', 'Lemon Juice', 'Raw Honey', 'Pink Himalayan Salt'],
      benefit: 'Electrolyte-rich tender coconut water with lemon and mineral salt to replenish hydration and support daily energy balance.',
    },
    {
      name: 'Green Detox Shot',
      color: 'bg-green-600',
      tagline: 'Daily Detox & Skin Cleanse',
      ingredients: ['Green Apple', 'Cucumber', 'Mint', 'Lemon Juice', 'Raw Honey', 'Vapor-Distilled Water'],
      benefit: 'Refreshing detox blend designed to support digestion, hydration and clear glowing skin.',
    },
    {
      name: 'Blue Beauty Shot',
      color: 'bg-blue-500',
      tagline: 'Skin Repair & Cellular Protection',
      ingredients: ['Pineapple', 'Blue Spirulina', 'Lemon Juice', 'Raw Honey', 'Vapor-Distilled Water'],
      benefit: 'Antioxidant-rich pineapple and blue spirulina shot designed to support skin repair and cellular health.',
    },
    {
      name: 'Golden Glow Shot',
      color: 'bg-amber-500',
      tagline: 'Radiance & Anti-Inflammatory',
      ingredients: ['Carrot', 'Pineapple', 'Turmeric', 'Lemon Juice', 'Raw Honey', 'Vapor-Distilled Water'],
      benefit: 'Carrot, pineapple and turmeric blend designed to support skin glow, reduce inflammation and promote natural radiance.',
    },
    {
      name: 'Digestive Shot',
      color: 'bg-yellow-500',
      tagline: 'Gut Health & Bloating Relief',
      ingredients: ['Pineapple', 'Ginger', 'Lemon Juice', 'Raw Honey', 'Vapor-Distilled Water'],
      benefit: 'Pineapple and ginger digestive shot crafted to reduce bloating and support gut health.',
    },
    {
      name: 'Amla Immunity Shot',
      color: 'bg-lime-600',
      tagline: 'Immunity & Vitamin C Boost',
      ingredients: ['Amla', 'Ginger', 'Lemon Juice', 'Raw Honey', 'Vapor-Distilled Water'],
      benefit: 'Vitamin C rich amla shot blended with ginger, lemon and honey to strengthen immunity and support skin health.',
    },
    {
      name: 'Berry Glow Shot',
      color: 'bg-rose-600',
      tagline: 'Skin Glow & Circulation Support',
      ingredients: ['Beetroot', 'Pomegranate', 'Lemon Juice', 'Raw Honey', 'Vapor-Distilled Water'],
      benefit: 'Antioxidant-rich blend of beetroot and pomegranate designed to boost circulation and support radiant skin.',
    },
  ];

  const weeklyRotation = [
    { day: 'Monday', shot: 'Coconut Hydration', focus: 'Hydration' },
    { day: 'Tuesday', shot: 'Green Detox', focus: 'Detoxification' },
    { day: 'Wednesday', shot: 'Blue Beauty', focus: 'Skin Repair' },
    { day: 'Thursday', shot: 'Golden Glow', focus: 'Radiance' },
    { day: 'Friday', shot: 'Digestive Shot', focus: 'Gut Health' },
    { day: 'Saturday', shot: 'Amla Immunity', focus: 'Immunity' },
    { day: 'Sunday', shot: 'Berry Glow', focus: 'Skin Glow' },
  ];

  return (
    <div className="pb-12">
      <SEO
        title="Functional Shot Therapy"
        description="Discover our cold-pressed functional shots designed for skin health, metabolism, and immunity. 100% natural, scientifically backed nutrition."
        keywords="Functional Drinks Chennai, Cold Pressed Shots, Immunity Boosters, Skin Health Drinks"
      />
      <PageHeader
        title="Functional Shots"
        subtitle="Eat Your Skin Care — 60ml of potent, functional wellness in every bottle."
      />

      {/* Hero Image Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-12 md:mt-16">
        <div className="aspect-[3/4] md:aspect-[21/9] rounded-[20px] overflow-hidden shadow-2xl relative group">
          <div className="hidden md:block w-full h-full">
            <LazyImage
              src={shotsLineupImg}
              alt="Ritual Functional Shot Lineup — 5 vibrant cold-pressed shots"
              className="w-full h-full group-hover:scale-[1.02] transition-transform duration-[2000ms]"
            />
          </div>
          <div className="block md:hidden w-full h-full">
            <LazyImage
              src={shotsLineupImgMobile}
              alt="Ritual Functional Shot Lineup — 5 vibrant cold-pressed shots"
              className="w-full h-full group-hover:scale-[1.02] transition-transform duration-[2000ms]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-start md:items-end p-8 md:p-16">
            <div className="text-white">
              <span className="text-white text-[10px] uppercase tracking-[4px] font-bold block mb-2">Campaign 01</span>
              <h2 className="text-3xl md:text-5xl font-serif">Eat Your Skin Care</h2>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Functional Shot */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-12 md:mt-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full mb-6">
              <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">The Concept</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl text-brand-olive font-serif font-medium tracking-[2px] uppercase leading-tight mb-6">
              What is a <br /><span className="font-serif normal-case text-brand-sage">Functional Shot?</span>
            </h3>
            <p className="text-base md:text-lg text-brand-olive/80 leading-relaxed font-sans font-normal mb-6">
              A functional shot is a concentrated 60ml elixir of cold-pressed, nutrient-dense ingredients designed to target specific health outcomes. Unlike regular juices, every drop is engineered for maximum bioavailability and absorption.
            </p>
            <p className="text-base md:text-lg text-brand-olive/80 leading-relaxed font-sans font-normal">
              At Ritual, we believe that true skin care starts from within. Our "Eat Your Skin Care" campaign is built on the science that what you consume directly impacts your skin's radiance, elasticity, and overall health. Each shot is a micro-dose of functional nutrition.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="flex flex-col gap-6">
              <div className="bg-[#fcfaf7] rounded-[20px] p-6 md:p-8 border border-brand-beige/30">
                <span className="text-4xl font-serif font-bold text-brand-olive block mb-2">60ml</span>
                <span className="text-[10px] uppercase tracking-[2px] text-brand-sage font-bold block mb-4">Per Serving</span>
                <p className="text-brand-sage/80 text-sm font-normal leading-relaxed">Each shot is precisely portioned at 60ml — the optimal volume for concentrated nutrient absorption without dilution.</p>
              </div>
              <div className="bg-[#fcfaf7] rounded-[20px] p-6 md:p-8 border border-brand-beige/30">
                <span className="text-4xl font-serif font-bold text-brand-olive block mb-2">7</span>
                <span className="text-[10px] uppercase tracking-[2px] text-brand-sage font-bold block mb-4">Shot Varieties</span>
                <p className="text-brand-sage/80 text-sm font-normal leading-relaxed">7 unique formulations rotate across the week, targeting different health pillars each day for holistic wellness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Shots */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-12 md:mt-16">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full mb-6">
            <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">The Collection</span>
          </div>
          <h3 className="text-3xl md:text-4xl text-brand-olive font-serif font-medium tracking-[2px] uppercase">
            7 Shots. 7 <span className="normal-case text-brand-sage">Purposes.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {shots.map((shot, idx) => (
            <div key={idx} className="bg-white rounded-[20px] border border-brand-beige/20 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className={`h-2 ${shot.color}`}></div>
              <div className="p-6">
                <div className={`w-10 h-10 rounded-md ${shot.color} flex items-center justify-center text-white font-bold text-xs mb-4 shadow-inner`}>
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h4 className="text-lg font-serif text-brand-olive mb-1">{shot.name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-brand-sage font-bold mb-4">{shot.tagline}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {shot.ingredients.map((ing, i) => (
                    <span key={i} className="text-[10px] bg-brand-sage/5 text-brand-sage px-2 py-1 rounded-full font-medium">{ing}</span>
                  ))}
                </div>
                <p className="text-sm text-brand-olive/70 font-normal leading-relaxed">{shot.benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Weekly Rotation Schedule */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-12 md:mt-16">
        <div className="bg-brand-olive text-white p-8 md:p-12 rounded-[20px] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif mb-2 tracking-wider font-medium">The Weekly Rotation</h3>
                <p className="text-brand-beige/70 text-sm">Each shot repeats weekly, ensuring your body builds a consistent rhythm of targeted nutrition.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
              {weeklyRotation.map((item, idx) => {
                const isToday = idx === (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1);
                return (
                  <div key={idx} className={`p-4 rounded-md border transition-all ${isToday ? 'bg-white/15 border-white/30 shadow-lg' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                    <span className={`text-[10px] uppercase tracking-widest font-bold block mb-3 ${isToday ? 'text-brand-beige' : 'text-white/40'}`}>{item.day}</span>
                    <p className="text-white font-serif text-sm mb-1">{item.shot}</p>
                    <p className="text-[10px] text-brand-beige/60 uppercase tracking-widest font-bold">{item.focus}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-12 md:mt-16">
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-3xl md:text-4xl text-brand-olive font-serif font-medium tracking-[2px] uppercase">
            How It <span className="normal-case text-brand-sage">Works</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Choose Your Plan', desc: 'Pick a 3, 7, 14, or 28-day nourishment cycle that fits your lifestyle.' },
            { step: '02', title: 'Receive Daily', desc: 'Your meal box arrives with a Power Bowl, a 60ml Functional Shot, and 350ml Infused Water.' },
            { step: '03', title: 'Feel the Difference', desc: 'Within 7 days, notice improved skin clarity, better digestion, and sustained energy.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-[#fcfaf7] p-8 rounded-[20px] border border-brand-beige/30 text-center hover:shadow-md transition-shadow">
              <span className="text-5xl font-serif font-bold text-brand-sage/20 block mb-4">{item.step}</span>
              <h4 className="text-xl font-serif text-brand-olive mb-3">{item.title}</h4>
              <p className="text-sm text-brand-sage/80 font-normal leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/#plans"
            className="inline-block bg-brand-olive text-white px-10 py-3 rounded-md font-medium uppercase tracking-[2px] hover:bg-brand-sage transition-all shadow-lg text-sm"
          >
            Start Your Ritual
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FunctionalShot;
