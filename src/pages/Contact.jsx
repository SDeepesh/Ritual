import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Toast from '../components/Toast';
import { enquiryStore } from '../utils/enquiryStore';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Save to Supabase (with local fallback)
    try {
      await enquiryStore.save({
        type: 'Contact Inquiry',
        ...formData
      });
      setShowToast(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pb-24">
      <PageHeader 
        title="Contact Us" 
        subtitle="We're here to help you on your wellness journey." 
      />
      
      {showToast && (
        <Toast 
          message="Message sent! We'll get back to you within 24 hours." 
          onClose={() => setShowToast(false)} 
        />
      )}

      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-16 md:mt-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[3px] text-brand-sage/40 mb-4">Chennai Headquarters</h3>
              <p className="text-brand-olive font-serif text-lg">12/4, Olive Grove Ave, Adyar,<br />Chennai, Tamil Nadu 600020</p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[3px] text-brand-sage/40 mb-4">Direct Inquiry</h3>
              <p className="text-brand-olive font-serif text-lg">ritual@wellness.in<br />+91 98400 12345</p>
            </div>
            <div className="flex gap-4 pt-4">
              {['Insta', 'Face', 'Tweet'].map(s => (
                <div key={s} className="w-12 h-12 border border-brand-beige/30 rounded-full flex items-center justify-center text-[10px] font-bold uppercase tracking-widest text-brand-sage/40 hover:text-brand-sage hover:border-brand-sage transition-all cursor-pointer">{s}</div>
              ))}
            </div>
          </div>
          
          <form className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-brand-beige/10 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/60 ml-1">Your Name</label>
              <input 
                type="text" 
                className="w-full bg-brand-sage/5 border-none rounded-xl px-5 py-4 focus:ring-1 focus:ring-brand-sage focus:bg-white transition-all outline-none" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/60 ml-1">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-brand-sage/5 border-none rounded-xl px-5 py-4 focus:ring-1 focus:ring-brand-sage focus:bg-white transition-all outline-none" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/60 ml-1">Message</label>
              <textarea 
                rows="4" 
                className="w-full bg-brand-sage/5 border-none rounded-xl px-5 py-4 focus:ring-1 focus:ring-brand-sage focus:bg-white transition-all outline-none" 
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-5 bg-brand-olive text-white rounded-xl font-bold uppercase tracking-[2px] transition-all shadow-lg flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-brand-sage'}`}
            >
              {isSubmitting ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
