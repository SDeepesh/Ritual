import React from 'react';
import heroBg from '../assets/bg.png';
import mixingBowl from '../assets/mixing-bowl.png';
import fresh from '../assets/fresh.png';
import recycle from '../assets/recycle.png';
import subscription from '../assets/subscription.png';
import LazyImage from './LazyImage';

const FeatureItem = ({ image, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 rounded-full bg-brand-sage flex items-center justify-center mb-4 shadow-sm p-3">
      <LazyImage
        src={image}
        alt={`Ritual Wellness Feature: ${title}`}
        className="w-full h-full brightness-0 invert"
        objectFit="contain"
      />
    </div>
    <h3 className="text-xl md:text-base text-brand-olive font-medium mb-3 tracking-[1px] font-serif uppercase">{title}</h3>
    <p className="text-sm text-brand-sage leading-relaxed max-w-[300px]">
      {description}
    </p>
  </div>
);

const Features = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 md:px-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="mb-4">
            Clean Eating Made Simple
          </h2>
          <p className="text-brand-sage text-lg">
            Thoughtfully crafted meals made with real ingredients, prepared fresh daily to support energy, balance, and everyday wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureItem
            image={mixingBowl}
            title="Freshly Prepared Daily"
            description="Every bowl is freshly made each morning using carefully selected ingredients."
          />
          <FeatureItem
            image={fresh}
            title="Delivered Fresh to You"
            description="Enjoy healthy meals delivered straight to your door across selected areas in Chennai."
          />
          <FeatureItem
            image={subscription}
            title="Balanced Functional Meals"
            description="Thoughtfully designed bowls that support energy, digestion, and overall wellbeing."
          />
          <FeatureItem
            image={recycle}
            title="Clean & Minimal Cooking"
            description="Prepared with minimal oil and real ingredients to keep meals light, fresh, and nourishing."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
