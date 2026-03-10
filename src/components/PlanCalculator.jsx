import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Toast from './Toast';
import PincodeChecker from './PincodeChecker';
import { enquiryStore } from '../utils/enquiryStore';

const PlanCalculator = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(28);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const plans = [
    { days: 3, totalPrice: 1349, originalPrice: 1500 },
    { days: 7, totalPrice: 2999, originalPrice: 3500 },
    { days: 14, totalPrice: 5499, originalPrice: 7000 },
    { days: 28, totalPrice: 9999, originalPrice: 14000 },
  ];

  const currentPlan = plans.find(p => p.days === selectedPlan);
  const totalAmount = currentPlan.totalPrice;
  const totalSavings = currentPlan.originalPrice - currentPlan.totalPrice;
  const discountPercent = Math.round(((currentPlan.originalPrice - currentPlan.totalPrice) / currentPlan.originalPrice) * 100);

  const handleEnquiry = async (e) => {
    e.preventDefault();
    if (!phone || !name) return;

    // Basic validation
    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsSubmitting(true);

    try {
      await enquiryStore.save({
        type: 'Plan Selection',
        name,
        planDays: selectedPlan,
        phoneNumber: phone,
        amount: totalAmount
      });

      // Navigate to Start Ritual page with pre-filled info
      navigate(`/start-ritual?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}&plan=${selectedPlan}`);

    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Only allow numbers
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  return (
    <section id="plans" className="w-full bg-brand-olive py-12 md:py-16 px-4 md:px-16 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-sage/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

      {showToast && (
        <Toast
          message={`Enquiry sent! Our nutritionist will contact you about the ${selectedPlan}-day plan.`}
          onClose={() => setShowToast(false)}
        />
      )}

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">

        {/* Left Side: Illustration & Title */}
        <div className="w-full lg:w-1/2 text-white">
          <h2 className="text-white normal-case md:text-5xl text-3xl mb-8 leading-tight">
            Choose Your <br /> Nourishment Cycle
          </h2>
          <div className="space-y-8">
            <p className="text-brand-beige text-lg md:text-xl max-w-lg">
              The secret to health is consistency. Select a ritual that fits your lifestyle and let us handle the nutrition.
            </p>

            <div>
              <PincodeChecker theme="dark" />
            </div>
          </div>
        </div>

        {/* Right Side: Calculator Card */}
        <div className="w-full lg:w-[500px] bg-white rounded-[20px] shadow-2xl p-6 md:p-8">
          <div className="flex justify-between items-start mb-6 md:mb-8">
            <div className='w-min'>
              <p className="text-brand-sage text-[10px] font-bold tracking-[2px] uppercase mb-2">Your Ritual Choice</p>
              <h3 className="text-3xl font-serif text-brand-olive">Personal Plan</h3>
            </div>
            <div className="bg-brand-sage/10 text-brand-sage p-2 rounded-md text-[10px] font-bold tracking-widest uppercase">
              Save {discountPercent}% Now
            </div>
          </div>

          <div className="mb-6 md:mb-8">
            <p className="text-brand-olive font-bold mb-5 text-[11px] uppercase tracking-widest flex items-center gap-2">
              Select duration: <span className="h-0.5 flex-grow bg-brand-beige/20"></span>
            </p>
            <div className="grid grid-cols-4 gap-3">
              {plans.map((plan) => (
                <button
                  key={plan.days}
                  onClick={() => setSelectedPlan(plan.days)}
                  className={`py-5 rounded-2xl text-sm font-bold transition-all duration-300 flex flex-col items-center justify-center gap-1 ${selectedPlan === plan.days
                    ? 'bg-brand-olive text-white shadow-xl scale-105'
                    : 'bg-brand-beige/5 text-brand-olive border border-brand-beige/20 hover:bg-brand-beige/10'
                    }`}
                >
                  <span className="text-lg">{plan.days}</span>
                  <span className="text-[9px] uppercase font-bold opacity-60">Days</span>
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleEnquiry} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Full Name*"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-brand-sage/5 border-none rounded-md px-6 py-3 text-brand-olive placeholder-brand-sage/40 focus:ring-1 focus:ring-brand-sage transition-all outline-none"
                  disabled={isSubmitting}
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  className="w-full bg-brand-sage/5 border-none rounded-md px-6 py-3 text-brand-olive placeholder-brand-sage/40 focus:ring-1 focus:ring-brand-sage transition-all outline-none"
                  disabled={isSubmitting}
                />
              </div>
              <p className="text-[10px] text-brand-sage/60 leading-relaxed italic px-2">
                Our lead nutritionist will contact you to customize your macro-preferences and dietary goals within 2 hours.
              </p>
            </div>

            <div className="border-t border-brand-beige/20 pt-6 mb-6 flex justify-between items-end">
              <div>
                <p className="text-brand-sage/40 text-[10px] font-bold uppercase tracking-widest mb-1">Total Savings:</p>
                <p className="text-brand-sage font-bold text-lg">₹{totalSavings}</p>
              </div>
              <div className="text-right">
                <p className="text-brand-sage/40 text-[10px] font-bold uppercase tracking-widest mb-1">Final Amount:</p>
                <p className="text-5xl font-serif text-brand-olive">₹{totalAmount}</p>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-brand-olive text-sm text-white py-3 rounded-md font-medium uppercase tracking-[3px] transition-all shadow-xl flex items-center justify-center gap-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-brand-sage hover:-translate-y-1'
                }`}
            >
              {isSubmitting ? (
                <>
                  <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Processing...
                </>
              ) : 'Start My Ritual'}
            </button>
          </form>

          <p className="text-center text-[9px] text-brand-sage/40 mt-4 font-bold uppercase tracking-widest">
            Safe & Secure Checkout • Terms Apply
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlanCalculator;
