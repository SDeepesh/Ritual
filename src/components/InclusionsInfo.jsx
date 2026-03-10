import React from 'react';
import trioDeskImg from '../assets/ritual_trio_desk.jpeg';
import glowShotImg from '../assets/glow_shot_concept.jpeg';
import LazyImage from './LazyImage';

const InclusionsInfo = () => {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden relative">
      <div className="hidden md:block absolute top-0 right-0 w-1/3 h-full bg-brand-sage/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-0 relative z-10">
        {/* Section 1: The Lunch Ritual */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-12 md:mb-16">
          <div className="flex-1 space-y-6 md:space-y-8 w-full text-left">
            <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full mb-6">
              <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">The Lunch Ritual</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl text-brand-olive font-serif font-medium tracking-[2px] uppercase leading-tight mb-4">
              One Balanced <br /> <span className="font-serif normal-case text-brand-sage">Ritual Each Day.</span>
            </h3>
            <p className="text-base md:text-lg text-brand-olive/80 leading-relaxed font-sans font-normal max-w-xl mb-4">
              We focus exclusively on Lunch to ensure absolute freshness. Each delivery is a complete functional experience designed to fuel your peak performance.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 md:gap-6 pt-4">
              <div className="bg-brand-beige/5 p-4 md:p-6 rounded-2xl border border-brand-beige/30 hover:bg-white hover:shadow-md transition-all">
                <span className="text-xl md:text-3xl font-serif font-bold text-brand-olive block mb-1">30</span>
                <span className="text-[8px] uppercase tracking-[2px] text-brand-sage font-bold">Unique Bowls</span>
              </div>
              <div className="bg-brand-beige/5 p-4 md:p-6 rounded-2xl border border-brand-beige/30 hover:bg-white hover:shadow-md transition-all">
                <span className="text-xl md:text-3xl font-serif font-bold text-brand-olive block mb-1">60ml</span>
                <span className="text-[8px] uppercase tracking-[2px] text-brand-sage font-bold">Functional Shot</span>
              </div>
              <div className="bg-brand-beige/5 p-4 md:p-6 rounded-2xl border border-brand-beige/30 hover:bg-white hover:shadow-md transition-all">
                <span className="text-xl md:text-3xl font-serif font-bold text-brand-olive block mb-1">350ml</span>
                <span className="text-[8px] uppercase tracking-[2px] text-brand-sage font-bold">Infused Water</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative w-full">
            <div className="aspect-[4/5] rounded-[20px] overflow-hidden shadow-2xl transform md:rotate-1 hover:rotate-0 transition-transform duration-700">
              <LazyImage src={trioDeskImg} alt="Ritual Lunch Setup: Power Bowl, Functional Shot, and Infused Water" className="w-full h-full" />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-brand-olive text-white p-5 rounded-full shadow-2xl animate-bounce-slow z-20 scale-90 md:scale-100">
              <div className="text-center">
                <span className="block text-xl md:text-2xl font-bold font-serif">30</span>
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
              We cater to all dietary preferences while maintaining the same nutritional integrity across every functional plan.
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
          <div className="flex-1 space-y-6 md:space-y-8 w-full text-left">
            <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full mb-6">
              <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">Inside The Shot</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl text-brand-olive font-serif font-medium tracking-[2px] uppercase leading-tight mb-4">
              Eat Your <br /> <span className="font-serif normal-case text-brand-sage">Skin Care</span>
            </h3>
            <p className="text-base md:text-lg text-brand-olive leading-relaxed font-sans font-normal mb-4">
              Our signature campaign for a reason. Each 60ml shot is a potent elixir of functional ingredients, designed to manifest wellness from within.
            </p>
            <div className="space-y-3 md:space-y-4 mb-4">
              <div className="flex items-center justify-between py-2.5 md:py-3 border-b border-brand-beige/20">
                <span className="text-brand-olive font-serif text-base md:text-lg">Glow</span>
                <span className="text-[12px] uppercase tracking-widest text-brand-sage font-bold">Vitamin C + Turmeric</span>
              </div>
              <div className="flex items-center justify-between py-2.5 md:py-3 border-b border-brand-beige/20">
                <span className="text-brand-olive font-serif text-base md:text-lg">Digest</span>
                <span className="text-[12px] uppercase tracking-widest text-brand-sage font-bold">Ginger + ACV</span>
              </div>
              <div className="flex items-center justify-between py-2.5 md:py-3 border-b border-brand-beige/20">
                <span className="text-brand-olive font-serif text-base md:text-lg">Hydrate</span>
                <span className="text-[12px] uppercase tracking-widest text-brand-sage font-bold">Cucumber + Mint</span>
              </div>
            </div>
            <div className="pt-4">
              <div className="flex flex-wrap gap-2">
                <div className="w-8 h-8 rounded-lg border flex items-center justify-center text-[10px] font-bold transition-all text-brand-sage border-brand-beige/40">M</div>
                <div className="w-8 h-8 rounded-lg border flex items-center justify-center text-[10px] font-bold transition-all text-brand-sage border-brand-beige/40">T</div>
                <div className="w-8 h-8 rounded-lg border flex items-center justify-center text-[10px] font-bold transition-all text-brand-sage border-brand-beige/40">W</div>
                <div className="w-8 h-8 rounded-lg border flex items-center justify-center text-[10px] font-bold transition-all text-brand-sage border-brand-beige/40">T</div>
                <div className="w-8 h-8 rounded-lg border flex items-center justify-center text-[10px] font-bold transition-all text-brand-sage border-brand-beige/40">F</div>
                <div className="w-8 h-8 rounded-lg border flex items-center justify-center text-[10px] font-bold transition-all text-brand-sage border-brand-beige/40">S</div>
                <div className="w-8 h-8 rounded-lg border flex items-center justify-center text-[10px] font-bold transition-all bg-brand-olive text-white border-brand-olive shadow-sm">S</div>
              </div>
              <p className="text-[9px] uppercase tracking-[2px] text-brand-sage/60 mt-4 font-bold">Weekly Rotation Ritual</p>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-[20px] overflow-hidden shadow-2xl relative group">
              <LazyImage src={glowShotImg} alt="Ritual 'Eat Your Skin Care' Campaign — The Glow Shot elixirs" className="w-full h-full group-hover:scale-105 transition-transform duration-[2000ms]" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-olive/50 via-transparent to-transparent flex items-end p-6 md:p-12">
                <div>
                  <span className="text-white text-[10px] uppercase tracking-[4px] font-bold block mb-2">Campaign 01</span>
                  <h4 className="text-white text-3xl md:text-5xl font-serif italic">The Glow Shot</h4>
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
