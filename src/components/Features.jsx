import React from 'react';
import heroBg from '../assets/bg.png';
import mixingBowl from '../assets/mixing-bowl.png';
import fresh from '../assets/fresh.png';
import recycle from '../assets/recycle.png';
import subscription from '../assets/subscription.png';

const FeatureItem = ({ image, title, description }) => (
  <div className="flex flex-col items-center text-center px-4">
    <div className="w-16 h-16 rounded-full bg-brand-sage flex items-center justify-center mb-6 shadow-sm p-3">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-contain brightness-0 invert"
      />
    </div>
    <h3 className="text-lg text-brand-olive font-medium mb-3 tracking-[1px] font-serif uppercase">{title}</h3>
    <p className="text-sm text-brand-sage leading-relaxed max-w-[220px]">
      {description}
    </p>
  </div>
);

const Features = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 md:px-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="mb-4">
            Transform Your Lunch Break
          </h2>
          <p className="text-brand-sage text-lg">
            Convenient healthy grain bowls crafted with real, fresh ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <FeatureItem
            image={mixingBowl}
            title="Expert-Crafted Recipes"
            description="Simple down to earth recipes that hit the spot perfectly."
          />
          <FeatureItem
            image={fresh}
            title="Delivered Fresh Daily"
            description="Experience our freshest bowls delivered right to your door."
          />
          <FeatureItem
            image={subscription}
            title="Flexible Plans"
            description="Powerful plans adapted to your busy work schedule."
          />
          <FeatureItem
            image={recycle}
            title="Zero Waste Packaging"
            description="We care about the planet. All our packaging is 100% compostable."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
