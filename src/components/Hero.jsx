import React from 'react';
import heroBg from '../assets/hero_bg.jpg';

const Hero = () => {
  return (
    <section
      className="relative w-full h-[350px] md:min-h-[800px] flex items-center bg-[#fdfaf6] bg-cover bg-center bg-no-repeat overflow-hidden px-4 md:px-16 lg:px-24 py-8 md:py-16"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start justify-between relative z-10">
        <div className="w-full md:w-1/2 max-w-lg text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-brand-olive font-serif font-medium tracking-[3px] leading-[1.1] mb-6 drop-shadow-sm uppercase">
            RESET YOUR <br /> LUNCH RITUAL
          </h1>
          <p className="text-lg text-brand-olive mb-10 font-sans max-w-sm drop-shadow-sm font-light">
            Nutritionally balanced power bowls delivered fresh in Chennai
          </p>
          <button className="bg-brand-sage hover:bg-brand-olive text-white px-8 py-3 rounded-md text-sm transition-colors duration-300 shadow-sm hover:shadow-md">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
