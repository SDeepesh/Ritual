import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import trioDeskImg from '../assets/ritual_trio_desk.jpeg';
import glowShotImg from '../assets/glow_shot_concept.jpeg';
import poolImg from '../assets/ritual_pool.jpeg';
import shotsImg from '../assets/our_shots.PNG';
import LazyImage from '../components/LazyImage';

const OurStory = () => {
  const values = [
    {
      num: '01',
      title: 'Conscious Sourcing',
      desc: 'We partner with local organic farmers across Tamil Nadu to ensure every ingredient is harvested at its peak nutritional value — never frozen, never processed.',
    },
    {
      num: '02',
      title: 'Functional Nutrition',
      desc: 'Our menus are architected by certified nutritionists to deliver sustained energy, gut health, and skin vitality through every single meal.',
    },
    {
      num: '03',
      title: 'Culinary Craft',
      desc: 'We believe healthy food should be a sensory experience. Our chefs blend traditional South Indian techniques with modern global flavors.',
    },
  ];

  const milestones = [
    { year: '2024', event: 'The Idea', detail: 'Born from a personal struggle with finding clean, functional meals in Chennai.' },
    { year: '2024', event: 'First Kitchen', detail: 'Set up our cloud kitchen with a small team of passionate chefs and a nutritionist.' },
    { year: '2025', event: 'Eat Your Skin Care', detail: 'Launched our signature functional shot campaign — 5 shots, 7-day rotation.' },
    { year: '2025', event: 'Scaling Up', detail: 'Expanding delivery zones and building a community of 500+ daily rituals.' },
  ];

  return (
    <div className="pb-12">
      <SEO
        title="Our Story | The Ritual Philosophy"
        description="The story behind Ritual — a commitment to clean label nutrition, precision macros, and artisanal wellness in Chennai."
        keywords="Ritual Story, Healthy Food Philosophy Chennai, Artisanal Meals"
      />
      <PageHeader
        title="Our Story"
        subtitle="Cultivating wellness through conscious meals and mindful rituals."
      />

      {/* Hero Split — Philosophy + Image */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-12 md:mt-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-24">
          <div className="flex-1 space-y-6 md:space-y-8 w-full text-left">
            <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full mb-6">
              <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">The Philosophy</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl text-brand-olive font-serif font-medium tracking-[2px] uppercase leading-tight mb-4">
              More Than <br /><span className="font-serif normal-case text-brand-sage">Just a Meal.</span>
            </h3>
            <p className="text-base md:text-lg text-brand-olive/80 leading-relaxed font-sans font-normal mb-4">
              Ritual was born from a simple realization — in our fast-paced world, we've lost the sacred connection with what nourishes us. We view eating not as a necessity, but as a <span className="font-medium text-brand-olive">ritual of self-care</span>.
            </p>
            <p className="text-base md:text-lg text-brand-olive/80 leading-relaxed font-sans font-normal">
              Based in the heart of Chennai, we are redefining "healthy" by combining the wisdom of traditional ingredients with the precision of modern functional nutrition. No compromises — just pure, vibrant food.
            </p>
          </div>

          <div className="flex-1 relative w-full">
            <div className="aspect-[4/5] rounded-[20px] overflow-hidden shadow-2xl transform md:rotate-1 hover:rotate-0 transition-transform duration-700">
              <LazyImage src={trioDeskImg} alt="Ritual — The Complete Lunch Experience" className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-12 md:mt-16">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full mb-6">
            <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">Our Pillars</span>
          </div>
          <h3 className="text-3xl md:text-4xl text-brand-olive font-serif font-medium tracking-[2px] uppercase">
            What We <span className="normal-case text-brand-sage">Stand For</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val, idx) => (
            <div key={idx} className="bg-white rounded-[20px] border border-brand-beige/20 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="h-2 bg-brand-sage"></div>
              <div className="p-8">
                <span className="text-5xl font-serif font-bold text-brand-sage/15 block mb-4">{val.num}</span>
                <h4 className="text-xl font-serif text-brand-olive mb-3">{val.title}</h4>
                <p className="text-sm text-brand-olive/70 font-normal leading-relaxed">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full Width Image Banner */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-12 md:mt-16">
        <div className="rounded-[20px] overflow-hidden shadow-2xl relative group h-[300px] md:h-[450px]">
          <LazyImage src={poolImg} alt="Ritual — Wellness Lifestyle" className="w-full h-full group-hover:scale-[1.02] transition-transform duration-[2000ms]" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-olive/70 via-brand-olive/30 to-transparent flex items-center p-8 md:p-16">
            <div className="text-white max-w-lg">
              <span className="text-white text-[10px] uppercase tracking-[4px] font-bold block mb-2">Our Mission</span>
              <h3 className="text-2xl md:text-4xl font-serif mb-4">Make Wellness <br />the Easiest Choice.</h3>
              <p className="text-sm md:text-base text-white font-medium leading-relaxed">We remove every barrier between you and proper nutrition. Fresh, functional, and delivered — every single day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey — Timeline */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-12 md:mt-16">
        <div className="bg-brand-olive text-white p-8 md:p-12 rounded-[20px] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative z-10">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-serif mb-2 tracking-wider font-medium">The Journey So Far</h3>
              <p className="text-brand-beige/70 text-sm">From an idea to a movement — one meal at a time.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {milestones.map((item, idx) => (
                <div key={idx} className="p-5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-beige/50 block mb-3">{item.year}</span>
                  <p className="text-white font-serif text-lg mb-2">{item.event}</p>
                  <p className="text-[12px] text-brand-beige/60 font-normal leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shots + Meals Split */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-12 md:mt-16">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 lg:gap-24">
          <div className="flex-1 space-y-6 md:space-y-8 w-full text-left">
            <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full mb-6">
              <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">Beyond Food</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl text-brand-olive font-serif font-medium tracking-[2px] uppercase leading-tight mb-4">
              A Complete <br /><span className="font-serif normal-case text-brand-sage">Wellness System.</span>
            </h3>
            <p className="text-base md:text-lg text-brand-olive/80 leading-relaxed font-sans font-normal mb-4">
              Every Ritual delivery is more than a meal. It's a calibrated system of a Power Bowl, a 60ml Functional Shot, and 350ml of herb-infused water — designed to work in harmony.
            </p>
            <p className="text-base md:text-lg text-brand-olive/80 leading-relaxed font-sans font-normal mb-6">
              Our "Eat Your Skin Care" campaign is proof that what you consume manifests on the outside. Real wellness starts from within.
            </p>
            <Link to="/functional-shots" className="inline-block bg-brand-olive text-white px-8 py-3 rounded-md font-medium uppercase tracking-[2px] hover:bg-brand-sage transition-all shadow-lg text-sm">
              Explore Functional Shots
            </Link>
          </div>

          <div className="flex-1 w-full">
            <div className="aspect-[16/9] md:aspect-auto md:h-[400px] rounded-[20px] overflow-hidden shadow-2xl relative group">
              <LazyImage src={shotsImg} alt="Ritual — Functional Shots Collection" className="w-full h-full group-hover:scale-105 transition-transform duration-[2000ms]" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-olive/50 via-transparent to-transparent flex items-end p-6 md:p-12">
                <div>
                  <span className="text-white text-[10px] uppercase tracking-[4px] font-bold block mb-2">7 Formulations</span>
                  <h4 className="text-white text-3xl md:text-4xl font-serif">The Ritual Shots</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-12 md:mt-16">
        <div className="bg-[#fcfaf7] rounded-[20px] p-8 md:p-16 border border-brand-beige/30 text-center relative overflow-hidden">
          <div className="hidden sm:block absolute top-0 right-0 w-32 h-32 bg-brand-sage/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <h3 className="text-3xl md:text-4xl text-brand-olive font-serif font-medium tracking-[1px] uppercase mb-4">
            Ready to Start <span className="normal-case text-brand-sage">Your Ritual?</span>
          </h3>
          <p className="text-brand-sage/80 mb-8 leading-relaxed font-sans font-normal text-sm md:text-base max-w-xl mx-auto">
            Join hundreds of Chennaiites who've made wellness a daily habit. Choose a plan that fits your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#plans" className="inline-block bg-brand-olive text-white px-10 py-3 rounded-md font-medium uppercase tracking-[2px] hover:bg-brand-sage transition-all shadow-lg text-sm">
              View Plans
            </Link>
            <Link to="/contact" className="inline-block bg-white text-brand-olive px-10 py-3 rounded-md font-medium uppercase tracking-[2px] hover:bg-brand-beige/30 transition-all shadow-sm border border-brand-beige/30 text-sm">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
