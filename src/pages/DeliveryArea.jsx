import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Toast from '../components/Toast';
import { enquiryStore } from '../utils/enquiryStore';

const DeliveryArea = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleNotify = async (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    
    try {
      await enquiryStore.save({
        type: 'Delivery Area Request',
        email: email
      });
      setShowToast(true);
      setEmail('');
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {showToast && (
        <Toast 
          message="Thank you! We'll notify you when we expand to your zone." 
          onClose={() => setShowToast(false)} 
        />
      )}

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
          <form onSubmit={handleNotify} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white border border-brand-beige/30 rounded-xl px-6 py-4 focus:ring-1 focus:ring-brand-sage outline-none transition-all" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`bg-brand-olive text-white px-8 py-4 rounded-xl font-bold uppercase tracking-[2px] transition-all shadow-md flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-brand-sage'}`}
            >
              {isSubmitting ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : 'Notify Me'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default DeliveryArea;
