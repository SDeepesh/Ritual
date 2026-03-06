import React from 'react';
import footerDrinks from '../assets/footer_bg.png';

const FooterCTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#cf9a89] via-[#c49282] to-[#d4a89a] bg-cover bg-center bg-no-repeat overflow-hidden px-4 md:px-16" style={{ backgroundImage: `url(${footerDrinks})` }}>
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between py-12 md:py-16 relative z-10">

        {/* Left Content */}
        <div className="w-full md:w-[60%] max-w-lg text-left text-white">
          <h2 className="text-white mb-4">
            Your Health Ritual, Delivered.
          </h2>
          <p className="text-lg opacity-90 font-light mb-10 w-full max-w-sm">
            Functional detox shots, infused hydration bottles
          </p>
          <button className="bg-brand-beige hover:bg-white hover:text-brand-olive px-8 py-3 rounded-md text-sm transition-colors duration-300 shadow-sm hover:shadow-md">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
