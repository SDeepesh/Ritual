import React, { useState } from 'react';

const PincodeChecker = ({ theme = 'dark' }) => {
  const [pincode, setPincode] = useState('');
  const [checkResult, setCheckResult] = useState(null); // null, 'success', 'error'

  const deliveryPincodes = [
    '600017', '600033', '600024', '600034', '600018', '600035', '600015',
    '600004', '600028', '600006', '600014', '600086', '600083', '600029',
    '600030', '600031', '600026', '600005', '600002', '600010', '600040',
    '600102', '600101'
  ];

  const handlePincodeCheck = (e) => {
    e.preventDefault();
    if (pincode.length < 6) return;

    if (deliveryPincodes.includes(pincode)) {
      setCheckResult('success');
    } else {
      setCheckResult('error');
    }
  };

  const isDark = theme === 'dark';

  return (
    <div className={`p-6 pt-4 rounded-2xl shadow-xl relative overflow-hidden ${isDark ? 'bg-brand-sage border border-brand-beige/20' : 'bg-brand-sage/5 border border-brand-beige/20'}`}>
      <div className="max-w-2xl relative z-10">
        <h2 className={`text-xl md:text-2xl font-serif tracking-wider font-medium ${isDark ? 'text-white' : 'text-brand-olive'}`}>Check Availability</h2>
        <p className={`mb-4 text-sm ${isDark ? 'text-brand-beige/70' : 'text-brand-sage'}`}>Enter your pincode to see if we deliver to your neighborhood.</p>

        <form onSubmit={handlePincodeCheck} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            maxLength="6"
            placeholder="Pincode"
            className={`flex-1 rounded-xl px-5 py-3 outline-none transition-all font-medium tracking-[4px] text-center sm:text-left ${isDark
              ? 'bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:bg-white/20'
              : 'bg-white border border-brand-beige/30 text-brand-olive placeholder:text-brand-sage/40 focus:ring-1 focus:ring-brand-sage'
              }`}
            value={pincode}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, '');
              if (val.length <= 6) setPincode(val);
              setCheckResult(null);
            }}
          />
          <button
            type="submit"
            className={`px-8 py-3 rounded-xl font-medium uppercase tracking-[2px] transition-all shadow-md ${isDark ? 'bg-brand-beige text-brand-olive hover:bg-white' : 'bg-brand-olive text-white hover:bg-brand-sage'
              }`}
          >
            Check Now
          </button>
        </form>

        {checkResult && (
          <div className={`mt-6 p-4 rounded-xl flex items-center gap-4 animate-in fade-in slide-in-from-top-2 duration-500 ${checkResult === 'success'
            ? 'bg-green-500/20 border border-green-500/30 text-green-100'
            : 'bg-orange-500/20 border border-orange-500/30 text-orange-100'
            }`}>
            <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${checkResult === 'success' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'}`}>
              {checkResult === 'success' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              )}
            </div>
            <div>
              <p className={`font-medium ${isDark ? 'text-white' : 'text-brand-olive'}`}>
                {checkResult === 'success' ? 'Good news! We deliver here.' : 'Coming soon to your area!'}
              </p>
              <p className={`text-xs opacity-80 ${isDark ? 'text-brand-beige' : 'text-brand-sage'}`}>
                {checkResult === 'success' ? 'Start your ritual today.' : "We're expanding! Join the waitlist below."}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PincodeChecker;
