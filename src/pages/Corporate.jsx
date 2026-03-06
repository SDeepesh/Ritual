import React from 'react';
import PageHeader from '../components/PageHeader';

const Corporate = () => {
  return (
    <div className="pb-24">
      <PageHeader 
        title="Corporate Plans" 
        subtitle="Fuel your team's productivity with high-performance nourishment." 
      />
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-16 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl text-brand-olive mb-8 uppercase tracking-wider">The Productive Workplace</h2>
            <div className="space-y-6 text-brand-sage/80 text-lg leading-relaxed font-serif italic">
              <p>
                A well-nourished team is a high-performing team. Ritual provides curated meal solutions for modern workplaces, focusing on sustained energy and mental clarity.
              </p>
              <ul className="space-y-4 not-italic font-sans text-sm uppercase tracking-wider font-bold text-brand-olive/70">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-sage"></span> Daily Office Deliveries</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-sage"></span> Event & Meeting Catering</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-sage"></span> Employee Wellness Benefits</li>
              </ul>
            </div>
            <button className="mt-12 bg-brand-white border border-brand-olive text-brand-olive hover:bg-brand-olive hover:text-white px-10 py-4 rounded-xl font-bold uppercase tracking-[2px] transition-all shadow-lg">Inquire for Your Team</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="aspect-square bg-brand-sage/5 rounded-2xl"></div>
             <div className="aspect-square bg-brand-beige/20 rounded-2xl mt-8"></div>
             <div className="aspect-square bg-brand-beige/20 rounded-2xl -mt-8"></div>
             <div className="aspect-square bg-brand-sage/5 rounded-2xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Corporate;
