import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Toast from '../components/Toast';
import PincodeChecker from '../components/PincodeChecker';
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
    {
      city: 'T. NAGAR & MAMBALAM',
      zones: [
        'T. Nagar — 600017',
        'West Mambalam — 600033',
        'Kodambakkam — 600024',
        'Ashok Nagar — 600083',
        'Saidapet — 600015',
        'Nandanam — 600035'
      ]
    },
    {
      city: 'CENTRAL CHENNAI',
      zones: [
        'Nungambakkam — 600034',
        'Chetpet — 600031',
        'Shenoy Nagar — 600030',
        'Aminjikarai — 600029',
        'Gopalapuram — 600086',
        'Thousand Lights — 600006'
      ]
    },
    {
      city: 'ALWARPET & MYLAPORE',
      zones: [
        'Alwarpet / Teynampet — 600018',
        'Mylapore — 600004',
        'RA Puram — 600028',
        'Royapettah — 600014'
      ]
    },
    {
      city: 'VADAPALANI & ANNA NAGAR',
      zones: [
        'Vadapalani — 600026',
        'Anna Nagar — 600040',
        'Anna Nagar East — 600102',
        'Anna Nagar West — 600101'
      ]
    }
  ];

  return (
    <div className="pb-16">
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

      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-12">
        <div className="mb-16">
          <PincodeChecker theme="dark" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, idx) => (
            <div key={idx} className="p-8 bg-white border border-brand-beige/20 rounded-2xl shadow-sm hover:border-brand-sage/30 transition-all">
              <h3 className="text-xl font-serif text-brand-olive mb-6 border-b border-brand-beige/20 pb-4 uppercase tracking-widest font-medium">{area.city}</h3>
              <ul className="space-y-3">
                {area.zones.map(zone => (
                  <li key={zone} className="text-brand-sage font-serif flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-brand-sage/20 rounded-full"></span>
                    {zone}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-12 bg-brand-olive text-white rounded-[20px] shadow-xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-serif mb-4 tracking-wider font-medium">Outside these areas?</h2>
            <p className="text-brand-beige/70 text-sm md:text-base max-w-2xl mx-auto mb-8">
              We are rapidly expanding our ritual circle. Leave your email and we'll notify you the moment we start delivering to your doorstep.
            </p>
            <form onSubmit={handleNotify} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:bg-white/20 outline-none transition-all"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-brand-beige text-brand-olive px-8 py-4 rounded-xl font-medium uppercase tracking-[2px] transition-all shadow-md flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-white'}`}
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-brand-olive/30 border-t-brand-olive rounded-full animate-spin"></span>
                ) : 'Notify Me'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeliveryArea;
