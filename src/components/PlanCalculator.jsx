import React, { useState } from 'react';

const PlanCalculator = () => {
  const [selectedPlan, setSelectedPlan] = useState(7);

  const plans = [
    { days: 3, pricePerDay: 459, originalPrice: 500 },
    { days: 7, pricePerDay: 429, originalPrice: 500 },
    { days: 14, pricePerDay: 399, originalPrice: 500 },
    { days: 28, pricePerDay: 369, originalPrice: 500 },
  ];

  const currentPlan = plans.find(p => p.days === selectedPlan);
  const totalAmount = currentPlan.pricePerDay * currentPlan.days;
  const totalSavings = (currentPlan.originalPrice - currentPlan.pricePerDay) * currentPlan.days;
  const discountPercent = Math.round(((currentPlan.originalPrice - currentPlan.pricePerDay) / currentPlan.originalPrice) * 100);

  return (
    <section className="w-full bg-brand-olive py-12 md:py-16 px-4 md:px-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 relative z-10">

        {/* Left Side: Illustration & Title */}
        <div className="w-full lg:w-1/2 text-white text-left">
          <h2 className="text-white normal-case md:text-6xl text-3xl md:leading-22">
            Choose Your <br /> Nourishment Cycle
          </h2>
          {/* <div className="flex gap-6 mt-12 opacity-80 scale-110 origin-left">
            <div className="w-24 h-24 bg-brand-sage/20 rounded-full flex items-center justify-center p-4">
              <span className="text-4xl">🥬</span>
            </div>
            <div className="w-24 h-24 bg-brand-sage/20 rounded-full flex items-center justify-center p-4">
              <span className="text-4xl">🥭</span>
            </div>
            <div className="w-24 h-24 bg-brand-sage/20 rounded-full flex items-center justify-center p-4">
              <span className="text-4xl">🍎</span>
            </div>
          </div> */}
        </div>

        {/* Right Side: Calculator Card */}
        <div className="w-full lg:w-[480px] bg-white rounded-3xl shadow-2xl p-6 md:p-10 transform transition-transform duration-500">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-brand-sage text-sm font-medium tracking-wide uppercase mb-1">Your Choice</p>
              <h3 className="text-2xl font-serif font-medium text-brand-olive">Ritual Plan</h3>
            </div>
            <div className="bg-brand-sage/10 text-brand-sage px-4 py-2 rounded-xl text-xs font-bold tracking-widest uppercase">
              Save {discountPercent}% On First Order
            </div>
          </div>

          <div className="mb-8">
            <p className="text-brand-olive font-medium mb-4 text-sm">Select number of ritual days:</p>
            <div className="grid grid-cols-4 gap-2">
              {plans.map((plan) => (
                <button
                  key={plan.days}
                  onClick={() => setSelectedPlan(plan.days)}
                  className={`py-4 rounded-xl text-sm font-bold transition-all duration-300 ${selectedPlan === plan.days
                    ? 'bg-brand-sage text-white shadow-lg'
                    : 'bg-brand-beige/10 text-brand-olive border border-brand-beige/30 hover:bg-brand-beige/20'
                    }`}
                >
                  {plan.days} <br /> <span className="text-[10px] uppercase font-light opacity-80">Days</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="relative">
              <input
                type="tel"
                placeholder="Phone Number*"
                className="w-full bg-[#f4f1ea] border-none rounded-xl px-6 py-4 text-[#5a5448] placeholder-[#8a857b] focus:ring-2 focus:ring-[#999b7b] transition-all outline-none"
              />
            </div>
            <p className="text-[10px] text-[#8a857b] leading-tight px-2">
              Our nutritionist will contact you to customize your macro-preferences after order confirmation.
            </p>
          </div>

          <div className="border-t border-brand-beige/30 pt-6 mb-8 flex justify-between items-end">
            <div>
              <p className="text-brand-sage text-sm font-medium">Total Amount:</p>
              <p className="text-[10px] text-brand-sage font-bold uppercase mt-1">You save ₹{totalSavings}</p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-serif font-medium text-brand-olive">₹{totalAmount}</p>
            </div>
          </div>

          <button className="w-full bg-brand-sage hover:bg-brand-olive text-white px-8 py-3 rounded-md text-sm transition-colors duration-300 shadow-sm hover:shadow-md">
            Send Enquiry
          </button>

          <p className="text-center text-[10px] text-brand-sage mt-4">
            By proceeding, you agree to our Terms of Service & Privacy Policy.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PlanCalculator;
