import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Toast from '../components/Toast';
import { enquiryStore } from '../utils/enquiryStore';

const Corporate = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    teamSize: '',
    message: '',
  });
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
        type: 'Corporate Inquiry',
        ...formData,
      });
      setShowToast(true);
      setFormData({ companyName: '', contactName: '', phone: '', email: '', teamSize: '', message: '' });
    } catch (err) {
      console.error('Corporate inquiry error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      num: '01',
      title: 'Daily Office Deliveries',
      desc: 'Fresh, functional meals delivered to your office every day. No more unhealthy takeout or missing breaks.',
    },
    {
      num: '02',
      title: 'Event & Meeting Catering',
      desc: 'Impress clients and fuel brainstorms with curated wellness meals for boardrooms and off-sites.',
    },
    {
      num: '03',
      title: 'Employee Wellness Benefits',
      desc: 'Make nutrition a perk. Subsidized meal plans show employees you invest in their well-being.',
    },
    {
      num: '04',
      title: 'Custom Dietary Plans',
      desc: 'Veg, non-veg, and vegan options. We accommodate every dietary preference across your team.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Meals Delivered Daily' },
    { number: '30', label: 'Unique Menu Items' },
    { number: '3', label: 'Dietary Options' },
    { number: '2hr', label: 'Response Time' },
  ];

  const teamSizes = ['5–15 employees', '15–50 employees', '50–100 employees', '100–250 employees', '250+ employees'];

  return (
    <div className="pb-12">
      <PageHeader
        title="Corporate Plans"
        subtitle="Fuel your team's productivity with high-performance nourishment."
      />

      {showToast && (
        <Toast
          message="Inquiry received! Our corporate wellness team will contact you shortly."
          onClose={() => setShowToast(false)}
        />
      )}

      {/* Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-12 md:mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-[20px] border border-brand-beige/20 p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <span className="text-3xl md:text-4xl font-serif font-bold text-brand-olive block mb-1">{stat.number}</span>
              <span className="text-[9px] uppercase tracking-[2px] text-brand-sage font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Ritual for Teams */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-12 md:mt-16">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full mb-6">
            <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">Why Ritual</span>
          </div>
          <h3 className="text-3xl md:text-4xl text-brand-olive font-serif font-medium tracking-[2px] uppercase">
            Designed for <span className="normal-case text-brand-sage">Modern Teams</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => (
            <div key={idx} className="bg-white rounded-[20px] border border-brand-beige/20 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="h-2 bg-brand-sage"></div>
              <div className="p-6">
                <span className="text-4xl font-serif font-bold text-brand-sage/15 block mb-3">{item.num}</span>
                <h4 className="text-lg font-serif text-brand-olive mb-2">{item.title}</h4>
                <p className="text-sm text-brand-olive/70 font-normal leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-12 md:mt-16">
        <div className="bg-brand-olive text-white p-8 md:p-12 rounded-[20px] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-serif mb-2 tracking-wider font-medium">How It Works</h3>
            <p className="text-brand-beige/70 text-sm mb-8">Getting Ritual for your office is simple.</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { step: '01', title: 'Tell Us About Your Team', desc: 'Fill out the form below with your team size, dietary preferences, and delivery schedule.' },
                { step: '02', title: 'Get a Custom Proposal', desc: 'Our corporate wellness team creates a tailored plan with pricing and menu options.' },
                { step: '03', title: 'Start Delivering', desc: 'Once approved, we begin daily deliveries. Your team stays fueled, focused, and happy.' },
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-beige/50 block mb-3">Step {item.step}</span>
                  <p className="text-white font-serif text-lg mb-2">{item.title}</p>
                  <p className="text-[12px] text-brand-beige/60 font-normal leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Inquiry Form */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-12 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left — Info */}
          <div className="flex flex-col justify-center">
            <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full mb-6 w-fit">
              <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">Inquiry</span>
            </div>
            <h3 className="text-3xl sm:text-4xl text-brand-olive font-serif font-medium tracking-[2px] uppercase leading-tight mb-6">
              Ready to Fuel <br /><span className="font-serif normal-case text-brand-sage">Your Workplace?</span>
            </h3>
            <p className="text-base md:text-lg text-brand-olive/80 leading-relaxed font-sans font-normal mb-6">
              Fill in the details and our corporate wellness team will reach out within 2 hours with a customized proposal tailored to your organization's needs.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-sage/10 flex items-center justify-center text-brand-sage flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-sm text-brand-olive/80 font-normal">No minimum contract duration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-sage/10 flex items-center justify-center text-brand-sage flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-sm text-brand-olive/80 font-normal">Flexible delivery schedules (Mon–Sat)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-sage/10 flex items-center justify-center text-brand-sage flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-sm text-brand-olive/80 font-normal">Volume discounts for teams of 15+</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-sage/10 flex items-center justify-center text-brand-sage flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-sm text-brand-olive/80 font-normal">Dedicated account manager</span>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-[#fcfaf7] p-8 md:p-10 rounded-[20px] border border-brand-beige/30 relative overflow-hidden">
            <div className="hidden sm:block absolute top-0 right-0 w-32 h-32 bg-brand-sage/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/60 ml-1">Company Name *</label>
                <input
                  type="text"
                  className="w-full bg-white border border-brand-beige/20 rounded-md px-5 py-4 focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all outline-none text-brand-olive"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  disabled={isSubmitting}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/60 ml-1">Contact Person *</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-brand-beige/20 rounded-md px-5 py-4 focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all outline-none text-brand-olive"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/60 ml-1">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="10-digit number"
                    className="w-full bg-white border border-brand-beige/20 rounded-md px-5 py-4 focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all outline-none text-brand-olive placeholder:text-brand-sage/30"
                    required
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/60 ml-1">Team Size *</label>
                  <select
                    className="w-full bg-white border border-brand-beige/20 rounded-md px-5 py-4 focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all outline-none text-brand-olive appearance-none"
                    required
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    disabled={isSubmitting}
                  >
                    <option value="" disabled>Select team size</option>
                    {teamSizes.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/60 ml-1">Additional Requirements</label>
                <textarea
                  rows="3"
                  placeholder="Dietary preferences, delivery schedule, special requests..."
                  className="w-full bg-white border border-brand-beige/20 rounded-md px-5 py-4 focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all outline-none text-brand-olive resize-none placeholder:text-brand-sage/30"
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
                ) : 'Get a Custom Proposal'}
              </button>
              <p className="text-[9px] text-brand-sage/40 text-center uppercase tracking-widest font-bold">
                We respond within 2 hours • No obligations
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Corporate;
