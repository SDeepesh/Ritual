import React from 'react';
import PageHeader from '../components/PageHeader';

const OurStory = () => {
  const values = [
    { title: 'Conscious Sourcing', desc: 'We partner with local organic farmers to ensure every ingredient is at its peak nutritional value.' },
    { title: 'Functional Nutrition', desc: 'Our menus are designed by nutritionists to provide sustained energy and optimal recovery.' },
    { title: 'Culinary Craft', desc: 'We believe healthy food should be a sensory experience, blending traditional techniques with modern flavors.' }
  ];

  return (
    <div className="pb-24">
      <PageHeader 
        title="Our Story" 
        subtitle="Cultivating wellness through conscious meals and mindful rituals." 
      />
      
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-16 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl text-brand-olive mb-8">The Ritual Philosophy</h2>
            <div className="space-y-6 text-brand-sage/80 text-lg leading-relaxed font-serif">
              <p>
                Ritual was born from a simple realization: in our fast-paced world, we've lost the sacred connection with what nourishes us. We view eating not just as a necessity, but as a ritual of self-care.
              </p>
              <p>
                Based in the heart of Chennai, we are redefining "healthy" by combining the wisdom of traditional ingredients with the precision of modern functional nutrition. No compromises, just pure, vibrant food.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-brand-beige/20 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-brand-olive/10 backdrop-soft-vignette"></div>
              {/* Image placeholder - would be a brand lifestyle shot */}
              <div className="w-full h-full flex items-center justify-center text-brand-olive/20 font-serif italic">
                Brand Heritage Photography
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((val, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl border border-brand-beige/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-sage/5 rounded-full flex items-center justify-center mb-6 text-brand-sage font-bold font-serif text-xl">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-serif text-brand-olive mb-4">{val.title}</h3>
              <p className="text-brand-sage/70 leading-relaxed italic">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurStory;
