import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Toast from '../components/Toast';
import { enquiryStore } from '../utils/enquiryStore';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setFormData({ ...formData, phone: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
    setIsSubmitting(true);

    try {
      await enquiryStore.save({
        type: 'Contact Inquiry',
        ...formData
      });
      setShowToast(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      ),
      label: 'Located',
      value: 'Chennai, Tamil Nadu',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      ),
      label: 'Email',
      value: 'ritualwellness.in@gmail.com',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
      ),
      label: 'Whatsapp',
      value: '+91 98401 86878',
    },
  ];

  return (
    <div className="pb-12">
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

      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-12 md:mt-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {contactInfo.map((item, idx) => (
            <div key={idx} className="bg-white rounded-[20px] border border-brand-beige/20 p-6 flex items-center gap-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-12 h-12 rounded-md bg-brand-sage/10 flex items-center justify-center text-brand-sage flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[2px] text-brand-sage font-bold block">{item.label}</span>
                <span className="text-brand-olive font-serif text-sm">{item.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left — Info Panel */}
          <div className="bg-brand-olive text-white p-8 md:p-12 rounded-[20px] shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10">
              <div className="inline-block px-3 py-1 bg-white/10 rounded-full mb-4">
                <span className="text-[10px] text-brand-beige uppercase tracking-[3px] font-bold">Get In Touch</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-medium tracking-[1px] mb-6 leading-tight">
                Let's Start Your <br /><span className="normal-case text-brand-beige/70">Wellness Journey.</span>
              </h3>
              <p className="text-brand-beige/70 text-sm md:text-base leading-relaxed mb-8">
                Whether you have questions about our plans, need help choosing the right ritual, or just want to say hello — we're always here.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center text-brand-beige flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[2px] font-bold text-brand-beige/50 block mb-1">Response Time</span>
                    <p className="text-brand-beige text-sm">We respond to all inquiries within 2 hours during business hours.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center text-brand-beige flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[2px] font-bold text-brand-beige/50 block mb-1">Working Hours</span>
                    <p className="text-brand-beige text-sm">Mon–Sat: 8:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links at Bottom */}
            <div className="flex gap-3 mt-8 relative z-10">
              <a href="https://www.instagram.com/ritualwellness.in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all" aria-label="Instagram">
                <svg className="w-4 h-4 text-brand-beige" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://wa.me/919840186878" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all" aria-label="WhatsApp">
                <svg className="w-4 h-4 text-brand-beige" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-[#fcfaf7] p-8 md:p-10 rounded-[20px] border border-brand-beige/30 relative overflow-hidden">
            <div className="hidden sm:block absolute top-0 right-0 w-32 h-32 bg-brand-sage/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/60 ml-1">Your Name *</label>
                <input
                  type="text"
                  className="w-full bg-white border border-brand-beige/20 rounded-md px-5 py-4 focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all outline-none text-brand-olive"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/60 ml-1">Phone Number *</label>
                <input
                  type="tel"
                  placeholder="10-digit phone number"
                  className="w-full bg-white border border-brand-beige/20 rounded-md px-5 py-4 focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all outline-none text-brand-olive placeholder:text-brand-sage/30"
                  required
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/60 ml-1">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-white border border-brand-beige/20 rounded-md px-5 py-4 focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all outline-none text-brand-olive"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/60 ml-1">Message *</label>
                <textarea
                  rows="4"
                  className="w-full bg-white border border-brand-beige/20 rounded-md px-5 py-4 focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all outline-none text-brand-olive resize-none"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 bg-brand-olive text-white rounded-md font-medium uppercase tracking-[2px] transition-all shadow-lg flex items-center justify-center gap-3 text-sm ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-brand-sage hover:-translate-y-0.5'}`}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
              <p className="text-[9px] text-brand-sage/40 text-center uppercase tracking-widest font-bold">
                Your information is safe with us • We never spam
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
