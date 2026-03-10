import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Toast from '../components/Toast';
import { enquiryStore } from '../utils/enquiryStore';

const Gifting = () => {
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [giftType, setGiftType] = useState('');

  const handleGiftInquiry = async (type) => {
    setGiftType(type);
    setIsSubmitting(true);
    try {
      await enquiryStore.save({
        type: 'Gift Inquiry',
        message: `User interested in: ${type}`
      });
      setShowToast(true);
    } catch (err) {
      console.error('Gift inquiry error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pb-24">
      <PageHeader
        title="Gifting"
        subtitle="Give the gift of wellness and mindful nourishment."
      />

      {showToast && (
        <Toast
          message={`Inquiry received for ${giftType}! We'll contact you to finalize the gift.`}
          onClose={() => setShowToast(false)}
        />
      )}

      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-16 md:mt-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-brand-olive mb-8">Share the Ritual Experience</h2>
          <p className="text-brand-sage/80 text-lg font-serif italic mb-12">
            Surprise your loved ones with a curated meal subscription or a flexible gift card. Perfect for birthdays, milestones, or simply to show you care.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 bg-white border border-brand-beige/20 rounded-2xl shadow-sm space-y-6">
              <div className="w-16 h-16 bg-brand-sage/5 rounded-full flex items-center justify-center mx-auto text-3xl">🎁</div>
              <h3 className="text-xl font-serif text-brand-olive tracking-widest uppercase">Digital Gift Card</h3>
              <p className="text-brand-sage/60 text-sm italic">Flexible credits for any Ritual plan.</p>
              <button
                onClick={() => handleGiftInquiry('Digital Gift Card')}
                disabled={isSubmitting}
                className="w-full py-4 border border-brand-olive text-brand-olive rounded-md font-bold uppercase tracking-[2px] hover:bg-brand-sage hover:border-brand-sage hover:text-white transition-all disabled:opacity-50"
              >
                {isSubmitting && giftType === 'Digital Gift Card' ? 'Processing...' : 'Buy Gift Card'}
              </button>
            </div>
            <div className="p-10 bg-brand-olive text-white border border-brand-olive rounded-2xl shadow-xl space-y-6 transform md:scale-105">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto text-3xl">🥘</div>
              <h3 className="text-xl font-serif tracking-widest uppercase">1-Week Subscription</h3>
              <p className="text-brand-beige/50 text-sm italic">7 days of gourmet, functional nutrition.</p>
              <button
                onClick={() => handleGiftInquiry('1-Week Subscription')}
                disabled={isSubmitting}
                className="w-full py-4 bg-brand-olive text-white rounded-md font-bold uppercase tracking-[2px] hover:bg-brand-sage transition-all disabled:opacity-50"
              >
                {isSubmitting && giftType === '1-Week Subscription' ? 'Processing...' : 'Gift a Week'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gifting;
