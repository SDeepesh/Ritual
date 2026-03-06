import React from 'react';
import PageHeader from '../components/PageHeader';

const ReferFriend = () => {
  return (
    <div className="pb-24">
      <PageHeader 
        title="Refer a Friend" 
        subtitle="Good food is meant to be shared. Invite a friend and both get rewarded." 
      />
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-16 md:mt-24">
        <div className="bg-brand-sage/5 rounded-3xl p-8 md:p-16 border border-brand-beige/20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-olive mb-6 uppercase tracking-wider">Give ₹500, Get ₹500</h2>
            <p className="text-brand-sage/70 text-lg font-serif italic mb-8">
              When your friend starts their first Ritual subscription using your link, they'll receive ₹500 off, and we'll add ₹500 credit to your account.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text" 
                readOnly 
                value="RITUAL-REF-90210" 
                className="flex-1 bg-white border border-brand-beige/30 rounded-xl px-6 py-4 font-mono text-brand-olive focus:outline-none"
              />
              <button className="bg-brand-olive text-white px-8 py-4 rounded-xl font-bold uppercase tracking-[2px] transition-all hover:bg-brand-sage shadow-md">Copy Link</button>
            </div>
          </div>
          <div className="w-full md:w-1/3 aspect-square bg-white rounded-2xl shadow-xl flex items-center justify-center text-6xl">
            🤝
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferFriend;
