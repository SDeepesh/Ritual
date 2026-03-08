import React from 'react';
import productBowl from '../assets/product_bowl.png';

const ProductCard = ({ title, description, isExplore }) => (
  <div className="bg-[#f2ece4] rounded-sm overflow-hidden flex flex-col group transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="relative pt-[100%] bg-white/40">
      <img
        src={productBowl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover p-6 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl text-brand-olive font-serif mb-3 leading-snug">{title}</h3>
      <p className="text-sm text-brand-sage mb-6 flex-grow">{description}</p>
      <button className={`w-full py-3 rounded-md text-xs transition-colors ${isExplore ? 'bg-brand-olive hover:bg-brand-sage text-white' : 'bg-brand-clay hover:bg-brand-olive text-white'}`}>
        {isExplore ? 'Explore Menu' : 'Select Menu'}
      </button>
    </div>
  </div>
);

const ProductMenu = () => {
  return (
    <section className="w-full bg-[#fdfaf6] py-12 md:py-16 px-4 md:px-16 border-t border-[#f0e8dc] border-b">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="mb-4">
            Transform Your Lunch Break
          </h2>
          <p className="text-brand-sage text-lg flex items-center justify-center gap-2">
            Save up to 25% by subscribing. Free delivery on all plans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            title="Avocado Tahini Earth Bowl"
            description="Protein packed vibrant bowl with creamy tahini dressing."
            isExplore={true}
          />
          <ProductCard
            title="Korean Spicy Protein Bowl"
            description="Gochujang marinated chicken with kimchi and brown rice."
          />
          <ProductCard
            title="Miso Umami Balance Bowl"
            description="Miso glazed tofu with edamame, seaweed and quinoa."
          />
          <ProductCard
            title="Mexican Taco Glow Bowl"
            description="Black beans, roasted corn, pico de gallo and avocado mash."
          />
        </div>
      </div>
    </section>
  );
};

export default ProductMenu;
