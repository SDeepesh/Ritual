import React from 'react';

const PageHeader = ({ title, subtitle }) => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-brand-sage/5 relative overflow-hidden px-4 md:px-16">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-sage/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-serif text-brand-olive mb-6 tracking-[4px] uppercase">{title}</h1>
        {subtitle && <p className="text-brand-sage text-lg md:text-xl font-serif italic max-w-2xl mx-auto opacity-70">{subtitle}</p>}
        <div className="w-24 h-1 bg-brand-sage mx-auto mt-8 opacity-20"></div>
      </div>
    </section>
  );
};

export default PageHeader;
