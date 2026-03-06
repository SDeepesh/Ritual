import React from 'react';
import PageHeader from '../components/PageHeader';

const DeliveryArea = () => {
  const areas = [
    { city: 'Chennai Central', zones: ['Nungambakkam', 'Egmore', 'T. Nagar', 'Kilpauk'] },
    { city: 'South Chennai', zones: ['Adyar', 'Besant Nagar', 'Thiruvanmiyur', 'Mylapore', 'Kotturpuram'] },
    { city: 'OMR / ECR', zones: ['Perungudi', 'Thoraipakkam', 'Sholinganallur', 'Palavakkam', 'Neelankarai'] },
    { city: 'West Chennai', zones: ['Anna Nagar', 'Mogappair', 'Ambattur (Select Zones)'] }
  ];

  return (
    <div className="pb-24">
      <PageHeader 
        title="Delivery Area" 
        subtitle="Currently serving the vibrant neighborhoods of Chennai." 
      />
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-16 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, idx) => (
            <div key={idx} className="p-8 bg-white border border-brand-beige/20 rounded-2xl shadow-sm hover:border-brand-sage/30 transition-all">
              <h3 className="text-xl font-serif text-brand-olive mb-6 border-b border-brand-beige/20 pb-4 uppercase tracking-widest font-bold">{area.city}</h3>
              <ul className="space-y-3">
                {area.zones.map(zone => (
                  <li key={zone} className="text-brand-sage/70 font-serif italic flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-brand-sage/20 rounded-full"></span>
                    {zone}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-24 p-8 md:p-16 bg-brand-sage/5 rounded-3xl border border-brand-beige/20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-sage/5 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2"></div>
          <h2 className="text-3xl font-serif text-brand-olive mb-6 uppercase tracking-wider font-bold">Outside these areas?</h2>
          <p className="text-brand-sage/60 text-lg font-serif italic max-w-2xl mx-auto mb-10">
            We are rapidly expanding our ritual circle. Leave your email and area, and we'll notify you the moment we start delivering to your doorstep.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="Enter your email" className="flex-1 bg-white border border-brand-beige/30 rounded-xl px-6 py-4 focus:ring-1 focus:ring-brand-sage outline-none transition-all" />
            <button className="bg-brand-sage text-white px-8 py-4 rounded-xl font-bold uppercase tracking-[2px] hover:bg-brand-olive transition-all shadow-md">Notify Me</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeliveryArea;
