import React from 'react';
import heroBg from '../assets/hero_bg.PNG';
import mobileHeroBg from '../assets/mobile_hero_bg.PNG';

const Hero = () => {
  const [bgImage, setBgImage] = React.useState(window.innerWidth < 768 ? mobileHeroBg : heroBg);

  React.useEffect(() => {
    const handleResize = () => {
      setBgImage(window.innerWidth < 768 ? mobileHeroBg : heroBg);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className="pt-28 relative w-full h-[520px] md:h-auto md:min-h-[800px] flex items-start md:items-center bg-[#fdfaf6] bg-cover bg-top md:bg-center bg-no-repeat overflow-hidden px-4 md:px-16 lg:px-24 py-8 md:py-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start justify-between relative z-10">
        <div className="w-full md:w-1/2 max-w-lg text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-brand-olive font-serif font-medium tracking-[3px] leading-[1.1] mb-3 md:mb-6 drop-shadow-sm uppercase">
            RESET YOUR <br /> LUNCH RITUAL
          </h1>
          <p className="text-lg text-brand-olive mb-3 md:mb-6 font-sans max-w-sm drop-shadow-sm font-light">
            Nutritionally balanced power bowls delivered fresh in Chennai
          </p>
          <button className="bg-brand-olive hover:bg-brand-sage text-white px-8 py-3 rounded-md text-sm transition-colors duration-300 shadow-sm hover:shadow-md">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
