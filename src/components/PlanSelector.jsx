import React from 'react';

export const PLANS = [
  { days: 3,  totalPrice: 1349, originalPrice: 1500 },
  { days: 7,  totalPrice: 2999, originalPrice: 3500 },
  { days: 14, totalPrice: 5499, originalPrice: 7000 },
  { days: 28, totalPrice: 9999, originalPrice: 14000 },
];

/**
 * PlanSelector
 *
 * Renders the plan duration cards + summary bar.
 * Props:
 *   selectedPlan  - number (days)
 *   onSelect      - (days: number) => void
 *   showSummary   - boolean, default true — shows the price summary bar below the cards
 */
const PlanSelector = ({ selectedPlan, onSelect, showSummary = true }) => {
  const current      = PLANS.find(p => p.days === selectedPlan) || PLANS[1];
  const savings      = current.originalPrice - current.totalPrice;
  const discountPct  = Math.round((savings / current.originalPrice) * 100);

  return (
    <div>
      {/* Plan cards */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        {PLANS.map((plan) => {
          const disc     = Math.round(((plan.originalPrice - plan.totalPrice) / plan.originalPrice) * 100);
          const isActive = selectedPlan === plan.days;
          return (
            <button
              key={plan.days}
              type="button"
              onClick={() => onSelect(plan.days)}
              className={`py-5 rounded-2xl text-sm font-bold transition-all duration-300 flex flex-col items-center justify-center gap-1 ${
                isActive
                  ? 'bg-brand-olive text-white shadow-xl scale-105'
                  : 'bg-brand-beige/5 text-brand-olive border border-brand-beige/20 hover:bg-brand-beige/10'
              }`}
            >
              <span className="text-lg">{plan.days}</span>
              <span className="text-[9px] uppercase font-bold opacity-60">Days</span>
              <span className={`text-xs font-semibold mt-0.5 ${isActive ? 'text-brand-beige/80' : 'text-brand-sage'}`}>
                ₹{plan.totalPrice}
              </span>
              <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-bold ${isActive ? 'bg-white/10 text-brand-beige/70' : 'bg-brand-sage/10 text-brand-sage'}`}>
                Save {disc}%
              </span>
            </button>
          );
        })}
      </div>

      {/* Summary bar */}
      {showSummary && (
        <div className="border-t border-brand-beige/20 pt-4 flex justify-between items-end">
          <div>
            <p className="text-brand-sage/40 text-[10px] font-bold uppercase tracking-widest mb-1">Total Savings:</p>
            <p className="text-brand-sage font-bold text-lg">₹{savings}</p>
          </div>
          <div className="text-right">
            <p className="text-brand-sage/40 text-[10px] font-bold uppercase tracking-widest mb-1">Final Amount:</p>
            <p className="text-5xl font-serif text-brand-olive">₹{current.totalPrice}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanSelector;
