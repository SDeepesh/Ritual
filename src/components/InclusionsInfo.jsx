import React, { useMemo } from 'react';
import trioDeskImg from '../assets/ritual_trio_desk.jpeg';
import glowShotImg from '../assets/glow_shot_concept.jpeg';
import LazyImage from './LazyImage';

const SHOT_ROTATION = [
  {
    title: "Berry Glow Shot",
    description: "Antioxidant-rich blend of beetroot and pomegranate designed to boost circulation and support radiant skin, finished with a refreshing touch of lemon.",
    ingredients: ["Beetroot", "Pomegranate", "Lemon Juice", "Raw Honey", "Vapor-Distilled Water"],
    glow: ["Beetroot", "Pomegranate"],
    digest: ["Lemon Juice"],
    hydrate: ["Vapor-Distilled Water"]
  },
  {
    title: "Coconut Hydration Shot",
    description: "Electrolyte-rich tender coconut water with lemon and mineral salt to replenish hydration and support daily energy balance.",
    ingredients: ["Tender Coconut Water", "Lemon Juice", "Raw Honey", "Pink Himalayan Salt"],
    glow: ["Lemon Juice"],
    digest: ["Lemon Juice"],
    hydrate: ["Tender Coconut Water", "Pink Himalayan Salt"]
  },
  {
    title: "Green Detox Shot",
    description: "Refreshing detox blend of green apple, cucumber and mint designed to support digestion, hydration and clear glowing skin.",
    ingredients: ["Green Apple", "Cucumber", "Mint", "Lemon Juice", "Raw Honey", "Vapor-Distilled Water"],
    glow: ["Green Apple", "Cucumber"],
    digest: ["Mint", "Lemon Juice"],
    hydrate: ["Cucumber", "Vapor-Distilled Water"]
  },
  {
    title: "Blue Beauty Shot",
    description: "Antioxidant-rich pineapple and blue spirulina shot designed to support skin repair and cellular health.",
    ingredients: ["Pineapple", "Blue Spirulina", "Lemon Juice", "Raw Honey", "Vapor-Distilled Water"],
    glow: ["Blue Spirulina", "Pineapple"],
    digest: ["Pineapple", "Lemon Juice"],
    hydrate: ["Vapor-Distilled Water"]
  },
  {
    title: "Golden Glow Shot",
    description: "Carrot, pineapple and turmeric blend designed to support skin glow, reduce inflammation and promote natural radiance.",
    ingredients: ["Carrot", "Pineapple", "Turmeric", "Lemon Juice", "Raw Honey", "Vapor-Distilled Water"],
    glow: ["Carrot", "Turmeric"],
    digest: ["Pineapple", "Lemon Juice"],
    hydrate: ["Vapor-Distilled Water"]
  },
  {
    title: "Digestive Shot",
    description: "Pineapple and ginger digestive shot crafted to reduce bloating and support gut health.",
    ingredients: ["Pineapple", "Ginger", "Lemon Juice", "Raw Honey", "Vapor-Distilled Water"],
    glow: ["Lemon Juice"],
    digest: ["Ginger", "Pineapple"],
    hydrate: ["Vapor-Distilled Water"]
  },
  {
    title: "Amla Immunity Shot",
    description: "Vitamin C rich amla shot blended with ginger, lemon and honey to strengthen immunity and support skin health.",
    ingredients: ["Amla", "Ginger", "Lemon Juice", "Raw Honey", "Vapor-Distilled Water"],
    glow: ["Amla"],
    digest: ["Ginger", "Lemon Juice"],
    hydrate: ["Vapor-Distilled Water"]
  }
];

const InclusionsInfo = () => {
  // Calculate current day of week (0=Mon, 6=Sun)
  const todayIndex = useMemo(() => {
    const today = new Date();
    let day = today.getDay(); // 0 is Sunday, 1 is Monday
    return day === 0 ? 6 : day - 1;
  }, []);

  // Helper for dynamic coloring based on shot title
  const getShotColorTag = (title) => {
    return 'bg-brand-sage/10 text-brand-sage border-brand-sage/20';
  };

  const currentWeekDays = useMemo(() => {
    const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    return labels.map((label, i) => ({
      label,
      isToday: i === todayIndex,
      shotBg: getShotColorTag(SHOT_ROTATION[i].title)
    }));
  }, [todayIndex]);

  const todaysShot = SHOT_ROTATION[todayIndex];

  const featuredShots = useMemo(() => {
    return {
      glow: { title: 'Glow', desc: todaysShot.glow.join(' + ') },
      digest: { title: 'Digest', desc: todaysShot.digest.join(' + ') },
      hydrate: { title: 'Hydrate', desc: todaysShot.hydrate.join(' + ') }
    };
  }, [todaysShot]);
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden relative">
      <div className="hidden md:block absolute top-0 right-0 w-1/3 h-full bg-brand-sage/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-0 relative z-10">
        {/* Section 1: The Lunch Ritual */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-12 md:mb-16">
          <div className="flex-[6] space-y-6 md:space-y-8 w-full text-left">
            <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full mb-6">
              <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">THE DAILY RITUAL</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl text-brand-olive font-serif font-medium tracking-[2px] uppercase leading-tight mb-4">
              One Clean <br /> <span className="font-serif normal-case text-brand-sage">Ritual Every Day.</span>
            </h3>
            <p className="text-base md:text-lg text-brand-olive/80 leading-relaxed font-sans font-normal max-w-xl mb-4">
              Every Ritual meal is crafted with real, intentional ingredients.
              Freshly prepared daily with balanced grains, quality proteins, and locally sourced produce.
              Each Ritual includes a nourishing bowl, a functional wellness shot, and infused hydration.

            </p>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 md:gap-6 pt-4">
              <div className="bg-brand-beige/5 p-3 md:p-6 rounded-2xl border border-brand-beige/30 hover:bg-white hover:shadow-md transition-all">
                <span className="text-xl md:text-3xl font-serif font-bold text-brand-olive block mb-1">28</span>
                <span className="text-[8px] md:text-[10px] uppercase tracking-[2px] text-brand-sage font-bold">ROTATING Power bowls</span>
              </div>
              <div className="bg-brand-beige/5 p-3 md:p-6 rounded-2xl border border-brand-beige/30 hover:bg-white hover:shadow-md transition-all">
                <span className="text-xl md:text-3xl font-serif font-bold text-brand-olive block mb-1">60ml</span>
                <span className="text-[8px] md:text-[10px] uppercase tracking-[2px] text-brand-sage font-bold">FUNCTIONAL WELLNESS SHOT</span>
              </div>
              <div className="bg-brand-beige/5 p-3 md:p-6 rounded-2xl border border-brand-beige/30 hover:bg-white hover:shadow-md transition-all">
                <span className="text-xl md:text-3xl font-serif font-bold text-brand-olive block mb-1">350ml</span>
                <span className="text-[8px] md:text-[10px] uppercase tracking-[2px] text-brand-sage font-bold">Infused HYDRATION</span>
              </div>
            </div>
          </div>
          <div className="flex-[4] relative w-full">
            <div className="aspect-[4/5] rounded-[20px] overflow-hidden shadow-2xl transform md:rotate-1 hover:rotate-0 transition-transform duration-700">
              <LazyImage src={trioDeskImg} alt="Ritual Lunch Setup: Power Bowl, Functional Shot, and Infused Water" className="w-full h-full" />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-brand-olive text-white p-5 rounded-full shadow-2xl animate-bounce-slow z-20 scale-90 md:scale-100">
              <div className="text-center">
                <span className="block text-xl md:text-2xl font-bold font-serif">28</span>
                <span className="text-[10px] uppercase tracking-widest font-bold">Day Variety</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Dietary Choices */}
        <div className="mb-12 md:mb-16">
          <div className="bg-[#fcfaf7] rounded-[20px] p-6 flex flex-col justify-center border border-brand-beige/30 relative overflow-hidden">
            <div className="hidden sm:block absolute top-0 right-0 w-32 h-32 bg-brand-sage/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <h4 className="text-3xl font-serif text-brand-olive font-medium tracking-[1px] mb-4 leading-tight">
              Your Ritual, <span className="normal-case text-brand-sage">Your Way.</span>
            </h4>
            <p className="text-brand-sage/80 mb-4 leading-relaxed font-sans font-normal text-sm md:text-base">
              Choose plant-based, vegetarian, or non-vegetarian bowls — all crafted with the same Ritual balance.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full">
              <div className="flex items-center gap-4 bg-white p-[10px] rounded-md md:rounded-2xl shadow-sm border border-brand-beige/20 hover:shadow-md transition-shadow flex-1">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-md flex-shrink-0 flex items-center justify-center text-white font-bold text-[10px] md:text-xs shadow-inner bg-green-600">V</div>
                <span className="text-brand-olive text-base md:text-lg">Plant Based / Vegan</span>
              </div>
              <div className="flex items-center gap-4 bg-white p-[10px] rounded-md md:rounded-2xl shadow-sm border border-brand-beige/20 hover:shadow-md transition-shadow flex-1">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-md flex-shrink-0 flex items-center justify-center text-white font-bold text-[10px] md:text-xs shadow-inner bg-orange-500">VG</div>
                <span className="text-brand-olive text-base md:text-lg">Vegetarian</span>
              </div>
              <div className="flex items-center gap-4 bg-white p-[10px] rounded-md md:rounded-2xl shadow-sm border border-brand-beige/20 hover:shadow-md transition-shadow flex-1">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-md flex-shrink-0 flex items-center justify-center text-white font-bold text-[10px] md:text-xs shadow-inner bg-red-500">NV</div>
                <span className="text-brand-olive text-base md:text-lg">Non-Vegetarian</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Inside The Shot */}
        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-10 md:gap-16">
          <div className="flex-[6] space-y-6 md:space-y-8 w-full text-left">
            <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full mb-6">
              <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">Inside The Ritual Shot</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl text-brand-olive font-serif font-medium tracking-[2px] uppercase leading-tight mb-4">
              Eat Your <br /> <span className="font-serif normal-case text-brand-sage">Skin Care</span>
            </h3>
            <p className="text-base md:text-lg text-brand-olive leading-relaxed font-sans font-normal mb-4">
              Each 60ml shot delivers a concentrated blend of functional ingredients to support glow, digestion, hydration, and daily wellness.
            </p>
            <div className="space-y-3 md:space-y-4 mb-4">
              <div className="flex items-center justify-between py-2.5 md:py-3 border-b border-brand-beige/20">
                <span className="text-brand-olive font-serif text-base md:text-lg">{featuredShots.glow.title}</span>
                <span className="text-[12px] uppercase tracking-widest text-brand-sage font-bold">{featuredShots.glow.desc}</span>
              </div>
              <div className="flex items-center justify-between py-2.5 md:py-3 border-b border-brand-beige/20">
                <span className="text-brand-olive font-serif text-base md:text-lg">{featuredShots.digest.title}</span>
                <span className="text-[12px] uppercase tracking-widest text-brand-sage font-bold">{featuredShots.digest.desc}</span>
              </div>
              <div className="flex items-center justify-between py-2.5 md:py-3 border-b border-brand-beige/20">
                <span className="text-brand-olive font-serif text-base md:text-lg">{featuredShots.hydrate.title}</span>
                <span className="text-[12px] uppercase tracking-widest text-brand-sage font-bold">{featuredShots.hydrate.desc}</span>
              </div>
            </div>
            <div className="pt-4">
              <div className="flex flex-wrap gap-2">
                {currentWeekDays.map((day, idx) => (
                  <div
                    key={idx}
                    className={`w-8 h-8 rounded-lg border flex items-center justify-center text-[10px] font-bold transition-all ${day.isToday
                      ? 'bg-brand-olive text-white border-brand-olive shadow-sm scale-110'
                      : `${day.shotBg}`
                      }`}
                    title={`Day ${day.dayIndex} Shot`}
                  >
                    {day.label}
                  </div>
                ))}
              </div>
              <p className="text-[9px] uppercase tracking-[2px] text-brand-sage/60 mt-4 font-bold">Weekly Rotation Ritual</p>
            </div>
          </div>
          <div className="flex-[4] w-full">
            <div className="rounded-[20px] overflow-hidden shadow-2xl relative group">
              <LazyImage src={glowShotImg} alt="Ritual 'Eat Your Skin Care' Campaign — The Glow Shot elixirs" className="w-full h-full group-hover:scale-105 transition-transform duration-[2000ms]" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-olive/80 via-transparent to-transparent flex items-end p-6 md:p-12">
                <div>
                  <span className="text-white text-[10px] uppercase tracking-[4px] font-bold block mb-2">Today's Elixir</span>
                  <h4 className="text-white text-3xl font-serif italic mb-2">{todaysShot?.title || 'The Glow Shot'}</h4>
                  <p className="text-white/90 text-sm font-medium tracking-wide">
                    {todaysShot?.ingredients?.slice(0, 2).join(' + ') || 'Functional Wellness Blend'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InclusionsInfo;
