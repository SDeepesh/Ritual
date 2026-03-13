import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import Toast from '../components/Toast';
import { enquiryStore } from '../utils/enquiryStore';

const ReferFriend = () => {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    yourName: '',
    yourPhone: '',
    friendName: '',
    friendPhone: '',
  });

  const referralCode = 'RITUAL-REF-90210';
  const referralLink = `https://ritualwellness.in/refer?code=${referralCode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handlePhoneChange = (field, value) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 10) {
      setFormData({ ...formData, [field]: cleaned });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.yourPhone.length !== 10 || formData.friendPhone.length !== 10) {
      alert('Please enter valid 10-digit phone numbers.');
      return;
    }
    setIsSubmitting(true);

    try {
      await enquiryStore.save({
        type: 'Referral',
        name: `${formData.yourName} → ${formData.friendName}`,
        phone: formData.yourPhone,
        message: `Referrer: ${formData.yourName} (${formData.yourPhone})\nReferred: ${formData.friendName} (${formData.friendPhone})\nCode: ${referralCode}`,
      });
      setShowToast(true);
      setFormData({ yourName: '', yourPhone: '', friendName: '', friendPhone: '' });
    } catch (err) {
      console.error('Referral error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      num: '01',
      title: 'Share Your Link',
      desc: 'Copy your unique referral link or code and share it with friends, family, or colleagues.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
      ),
    },
    {
      num: '02',
      title: 'Friend Subscribes',
      desc: 'When your friend starts their first Ritual plan using your code, they get ₹500 off instantly.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
      ),
    },
    {
      num: '03',
      title: 'You Get Rewarded',
      desc: '₹500 credit is automatically applied to your next renewal. No limits on referrals.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      ),
    },
  ];

  return (
    <div className="pb-12">
      <SEO 
        title="Refer a Friend | Get ₹500 Reward Credit" 
        description="Invite your friends to the Ritual circle. Give them ₹500 off their first wellness meal plan, and get ₹500 credit for yourself."
      />
      <PageHeader
        title="Refer a Friend"
        subtitle="Good food is meant to be shared. Invite a friend and both get rewarded."
      />

      {showToast && (
        <Toast
          message="Referral submitted! We'll reach out to your friend with the offer."
          onClose={() => setShowToast(false)}
        />
      )}

      {/* Hero Reward Banner */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-12 md:mt-16">
        <div className="bg-brand-olive text-white p-8 md:p-12 rounded-[20px] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-sage/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 bg-white/10 rounded-full mb-4">
                <span className="text-[10px] text-brand-beige uppercase tracking-[3px] font-bold">Referral Program</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-[1px] mb-4 leading-tight">
                Give ₹500, <br />Get ₹500.
              </h2>
              <p className="text-brand-beige/70 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                When your friend starts their first Ritual subscription using your referral, they get ₹500 off — and we add ₹500 credit to your account. There's no limit to how many people you can refer.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
                <input
                  type="text"
                  readOnly
                  value={referralLink}
                  className="flex-1 bg-white/10 border border-white/20 rounded-md px-5 py-3 text-white/80 font-mono text-sm focus:outline-none truncate"
                />
                <button
                  onClick={handleCopy}
                  className={`px-8 py-3 rounded-md font-medium uppercase tracking-[2px] transition-all shadow-md text-sm flex items-center justify-center gap-2 ${copied
                    ? 'bg-green-500 text-white'
                    : 'bg-brand-beige text-brand-olive hover:bg-white'
                    }`}
                >
                  {copied ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Copied!
                    </>
                  ) : 'Copy Link'}
                </button>
              </div>
            </div>

            <div className="w-full md:w-auto flex items-center justify-center">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-[20px] bg-white/10 border border-white/20 flex flex-col items-center justify-center text-center">
                <span className="text-5xl md:text-6xl font-serif font-bold text-white">₹500</span>
                <span className="text-[9px] uppercase tracking-widest text-brand-beige/60 font-bold mt-2">Each Way</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-12 md:mt-16">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full mb-6">
            <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">Simple Process</span>
          </div>
          <h3 className="text-3xl md:text-4xl text-brand-olive font-serif font-medium tracking-[2px] uppercase">
            How It <span className="normal-case text-brand-sage">Works</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, idx) => (
            <div key={idx} className="bg-white rounded-[20px] border border-brand-beige/20 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="h-2 bg-brand-sage"></div>
              <div className="p-8">
                <div className="w-12 h-12 rounded-md bg-brand-sage/10 flex items-center justify-center text-brand-sage mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-serif text-brand-olive mb-2">{item.title}</h4>
                <p className="text-sm text-brand-olive/70 font-normal leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Referral Form */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mt-12 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left — Info */}
          <div className="flex flex-col justify-center">
            <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full mb-6 w-fit">
              <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">Refer Now</span>
            </div>
            <h3 className="text-3xl sm:text-4xl text-brand-olive font-serif font-medium tracking-[2px] uppercase leading-tight mb-6">
              Know Someone Who <br /><span className="font-serif normal-case text-brand-sage">Deserves Better Food?</span>
            </h3>
            <p className="text-base md:text-lg text-brand-olive/80 leading-relaxed font-sans font-normal mb-8">
              Fill in your details and your friend's phone number. We'll reach out to them with the offer and credit your account once they subscribe.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-brand-sage/10 flex items-center justify-center text-brand-sage flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[2px] font-bold text-brand-sage/50 block mb-1">Unlimited Referrals</span>
                  <p className="text-sm text-brand-olive/80 font-normal">Refer 10 friends? Get ₹5,000 in credits. No cap.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-brand-sage/10 flex items-center justify-center text-brand-sage flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[2px] font-bold text-brand-sage/50 block mb-1">Instant Credit</span>
                  <p className="text-sm text-brand-olive/80 font-normal">Credits apply automatically to your next renewal cycle.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-brand-sage/10 flex items-center justify-center text-brand-sage flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[2px] font-bold text-brand-sage/50 block mb-1">No Spam</span>
                  <p className="text-sm text-brand-olive/80 font-normal">We only reach out once, with a friendly invite. Nothing more.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-[#fcfaf7] p-8 md:p-10 rounded-[20px] border border-brand-beige/30 relative overflow-hidden">
            <div className="hidden sm:block absolute top-0 right-0 w-32 h-32 bg-brand-sage/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
              <p className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/40 mb-2">Your Details</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/60 ml-1">Your Name *</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-brand-beige/20 rounded-md px-5 py-4 focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all outline-none text-brand-olive"
                    required
                    value={formData.yourName}
                    onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/60 ml-1">Your Phone *</label>
                  <input
                    type="tel"
                    placeholder="10-digit number"
                    className="w-full bg-white border border-brand-beige/20 rounded-md px-5 py-4 focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all outline-none text-brand-olive placeholder:text-brand-sage/30"
                    required
                    value={formData.yourPhone}
                    onChange={(e) => handlePhoneChange('yourPhone', e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="border-t border-brand-beige/20 my-2"></div>
              <p className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/40 mb-2">Friend's Details</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/60 ml-1">Friend's Name *</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-brand-beige/20 rounded-md px-5 py-4 focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all outline-none text-brand-olive"
                    required
                    value={formData.friendName}
                    onChange={(e) => setFormData({ ...formData, friendName: e.target.value })}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/60 ml-1">Friend's Phone *</label>
                  <input
                    type="tel"
                    placeholder="10-digit number"
                    className="w-full bg-white border border-brand-beige/20 rounded-md px-5 py-4 focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all outline-none text-brand-olive placeholder:text-brand-sage/30"
                    required
                    value={formData.friendPhone}
                    onChange={(e) => handlePhoneChange('friendPhone', e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>
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
                ) : 'Send Referral'}
              </button>
              <p className="text-[9px] text-brand-sage/40 text-center uppercase tracking-widest font-bold">
                Your friend receives a single friendly invite • No spam
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferFriend;
