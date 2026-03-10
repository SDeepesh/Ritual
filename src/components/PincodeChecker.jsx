import React, { useState } from 'react';

const DELIVERY_PINCODES = [
  '600017', '600033', '600024', '600034', '600018', '600035', '600015',
  '600004', '600028', '600006', '600014', '600086', '600083', '600029',
  '600030', '600031', '600026', '600005', '600002', '600010', '600040',
  '600102', '600101'
];

/**
 * PincodeChecker
 *
 * Can be used in two modes:
 *
 * 1. Uncontrolled (self-contained, as used in PlanCalculator on the homepage):
 *    <PincodeChecker theme="dark" />
 *
 * 2. Controlled (parent manages state, as used in StartRitual):
 *    <PincodeChecker
 *      theme="dark"
 *      value={pincode}
 *      onChange={(val) => setPincode(val)}
 *      onResult={(result) => setPincodeResult(result)}  // 'success' | 'error' | null
 *    />
 */
const PincodeChecker = ({ theme = 'dark', value, onChange, onResult }) => {
  // Internal state used only in uncontrolled mode
  const [internalPincode, setInternalPincode] = useState('');
  const [internalResult, setInternalResult]   = useState(null);

  const isControlled = value !== undefined;

  const pincode     = isControlled ? value : internalPincode;
  const checkResult = isControlled ? null  : internalResult; // controlled callers track result themselves

  const handleChange = (raw) => {
    const val = raw.replace(/\D/g, '');
    if (val.length > 6) return;
    if (isControlled) {
      onChange?.(val);
      onResult?.(null); // reset result on change
    } else {
      setInternalPincode(val);
      setInternalResult(null);
    }
  };

  const handleCheck = (e) => {
    e.preventDefault();
    if (pincode.length < 6) return;
    const result = DELIVERY_PINCODES.includes(pincode) ? 'success' : 'error';
    if (isControlled) {
      onResult?.(result);
    } else {
      setInternalResult(result);
    }
  };

  const isDark       = theme === 'dark';
  const displayResult = isControlled ? null : checkResult; // in controlled mode the parent renders its own feedback

  return (
    <div className={`p-6 pt-4 rounded-2xl shadow-xl relative overflow-hidden ${isDark ? 'bg-brand-sage border border-brand-beige/20' : 'bg-brand-sage/5 border border-brand-beige/20'}`}>
      <div className="max-w-2xl relative z-10">
        <h2 className={`text-xl md:text-2xl font-serif tracking-wider font-medium ${isDark ? 'text-white' : 'text-brand-olive'}`}>Check Availability</h2>
        <p className={`mb-4 text-sm ${isDark ? 'text-brand-beige/70' : 'text-brand-sage'}`}>Enter your pincode to see if we deliver to your neighborhood.</p>

        <form onSubmit={handleCheck} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            maxLength="6"
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => handleChange(e.target.value)}
            className={`flex-1 rounded-md px-5 py-3 outline-none transition-all font-medium tracking-[4px] text-center sm:text-left text-sm ${isDark
              ? 'bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:bg-white/20'
              : 'bg-white border border-brand-beige/30 text-brand-olive placeholder:text-brand-sage/40 focus:ring-1 focus:ring-brand-sage'
            }`}
          />
          <button
            type="submit"
            className={`px-8 py-3 rounded-md font-medium uppercase tracking-[2px] transition-all shadow-md text-sm ${isDark ? 'bg-brand-beige text-brand-olive hover:bg-white' : 'bg-brand-olive text-white hover:bg-brand-sage'}`}
          >
            Check Now
          </button>
        </form>

        {/* Result feedback — only shown in uncontrolled mode; controlled callers render their own */}
        {displayResult && (
          <div className={`mt-6 p-4 rounded-xl flex items-center gap-4 animate-in fade-in slide-in-from-top-2 duration-500 ${displayResult === 'success'
            ? 'bg-green-500/20 border border-green-500/30 text-green-100'
            : 'bg-orange-500/20 border border-orange-500/30 text-orange-100'
          }`}>
            <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${displayResult === 'success' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'}`}>
              {displayResult === 'success' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              )}
            </div>
            <div>
              <p className={`font-medium ${isDark ? 'text-white' : 'text-brand-olive'}`}>
                {displayResult === 'success' ? 'Good news! We deliver here.' : 'Coming soon to your area!'}
              </p>
              <p className={`text-xs opacity-80 ${isDark ? 'text-brand-beige' : 'text-brand-sage'}`}>
                {displayResult === 'success' ? 'Start your ritual today.' : "We're expanding! Join the waitlist below."}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PincodeChecker;
