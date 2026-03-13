import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Toast from '../components/Toast';
import SEO from '../components/SEO';
import { enquiryStore } from '../utils/enquiryStore';

// ─── Config ──────────────────────────────────────────────────────────────────
const ADMIN_EMAIL = 'deepeshsrs@gmail.com';

const PLANS = [
  { days: 3, totalPrice: 1349, originalPrice: 1500 },
  { days: 7, totalPrice: 2999, originalPrice: 3500 },
  { days: 14, totalPrice: 5499, originalPrice: 7000 },
  { days: 28, totalPrice: 9999, originalPrice: 14000 },
];

const DELIVERY_PINCODES = [
  '600017', '600033', '600024', '600034', '600018', '600035', '600015',
  '600004', '600028', '600006', '600014', '600086', '600083', '600029',
  '600030', '600031', '600026', '600005', '600002', '600010', '600040',
  '600102', '600101',
];

// ─── Component ────────────────────────────────────────────────────────────────
const StartRitual = () => {
  const [searchParams] = useSearchParams();
  const [selectedPlan, setSelectedPlan] = useState(28);
  const [pincode, setPincode] = useState('');
  const [pincodeResult, setPincodeResult] = useState(null); // null | 'success' | 'error'
  const [isLocating, setIsLocating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    latitude: null,
    longitude: null,
    dietaryPreference: '',
    message: '',
  });

  // Pre-fill from URL params
  useEffect(() => {
    const nameParam = searchParams.get('name');
    const phoneParam = searchParams.get('phone');
    const planParam = searchParams.get('plan');

    if (nameParam || phoneParam || planParam) {
      setForm(prev => ({
        ...prev,
        name: nameParam || prev.name,
        phone: phoneParam || prev.phone,
      }));
      if (planParam) {
        const p = parseInt(planParam);
        if (PLANS.some(pl => pl.days === p)) {
          setSelectedPlan(p);
        }
      }
    }
  }, [searchParams]);

  const currentPlan = PLANS.find(p => p.days === selectedPlan);
  const totalSavings = currentPlan.originalPrice - currentPlan.totalPrice;
  const discountPct = Math.round((totalSavings / currentPlan.originalPrice) * 100);

  // ── Pincode checker ─────────────────────────────────────────────────────
  const handlePincodeCheck = (e) => {
    e.preventDefault();
    if (pincode.length < 6) return;
    setPincodeResult(DELIVERY_PINCODES.includes(pincode) ? 'success' : 'error');
  };

  // ── Geolocation ─────────────────────────────────────────────────────────
  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
            { headers: { 'Accept-Language': 'en' } }
          );
          const json = await res.json();
          const addr = json.display_name || `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;
          // Try to pull pincode from result
          const pc = json.address?.postcode || '';
          setForm(f => ({ ...f, address: addr, latitude, longitude }));
          if (pc && !pincode) {
            setPincode(pc.replace(/\D/g, '').slice(0, 6));
          }
        } catch {
          setForm(f => ({ ...f, latitude, longitude, address: `${latitude.toFixed(5)}, ${longitude.toFixed(5)}` }));
        } finally {
          setIsLocating(false);
        }
      },
      () => {
        setIsLocating(false);
        alert('Unable to retrieve your location. Please enter your address manually.');
      },
      { timeout: 10000 }
    );
  };

  // ── Form field handler ───────────────────────────────────────────────────
  const setField = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  const handlePhoneChange = (e) => {
    const v = e.target.value.replace(/\D/g, '');
    if (v.length <= 10) setForm(f => ({ ...f, phone: v }));
  };

  // ── Submit ───────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.phone.length !== 10) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    // ── Pincode Matching Validation ───────────────────────────────────────
    // Check if the 6-digit pincode from Step 1 is present in the address field
    const addressPincodeMatch = form.address.match(/\b\d{6}\b/);
    const addressPincode = addressPincodeMatch ? addressPincodeMatch[0] : null;

    if (!addressPincode) {
      alert('Please include your 6-digit pincode in the delivery address.');
      return;
    }

    if (addressPincode !== pincode) {
      alert(`The pincode in your address (${addressPincode}) does not match the delivery pincode you checked (${pincode}). Please ensure you are requesting delivery to the checked area.`);
      return;
    }

    setIsSubmitting(true);

    const payload = {
      ...form,
      pincode,
      planDays: selectedPlan,
      amount: currentPlan.totalPrice,
    };

    try {
      await enquiryStore.saveRitualSignup(payload);

      // ── Submission Complete ────────────────────────────────────────────
      setToastMsg(`You're in! 🌿 Our lead nutritionist will reach out to you within 2 hours.`);
      setShowToast(true);
      setForm({ name: '', phone: '', email: '', address: '', latitude: null, longitude: null, dietaryPreference: '', message: '' });
      setPincode('');
      setPincodeResult(null);
    } catch (err) {
      console.error('Submission error:', err);
      setToastMsg('Something went wrong. Please try again.');
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <div className="pb-20 bg-[#faf8f5] min-h-screen">
      <SEO 
        title="Start Your Ritual | Functional Meal Delivery Chennai" 
        description="Choose your nourishment cycle and start your wellness ritual today. Premium healthy meal delivery in Chennai featuring balanced bowls and functional shots."
        keywords="Start Ritual, Meal Plan Subscription Chennai, Functional Meal Delivery, Wellness Delivery, Eat Your Skincare"
      />
      {showToast && <Toast message={toastMsg} onClose={() => setShowToast(false)} />}

      {/* ── Hero (using PageHeader for correct header visibility) ── */}
      <PageHeader
        title="Start Your Ritual"
        subtitle="Check delivery availability, choose your nourishment cycle, and let us craft a ritual built around you."
      />

      <div className="max-w-7xl mx-auto px-4 md:px-16">
        {/* ── Step 1: Pincode Checker ── */}
        <div className="-mt-8 mb-10">
          <div className="bg-brand-sage rounded-2xl shadow-xl p-6 md:p-8 relative overflow-hidden border border-white/10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-brand-beige text-brand-olive flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
              <h2 className="text-xl font-serif text-white tracking-wide">Check Delivery Availability</h2>
            </div>
            <p className="text-brand-beige/70 text-sm mb-5">Enter your pincode to confirm we deliver to your area.</p>
            <form onSubmit={handlePincodeCheck} className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <input
                type="text"
                maxLength="6"
                placeholder="Enter Pincode"
                value={pincode}
                onChange={(e) => {
                  const v = e.target.value.replace(/\D/g, '');
                  if (v.length <= 6) setPincode(v);
                  setPincodeResult(null);
                }}
                className="flex-1 rounded-md px-5 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:bg-white/20 transition-all tracking-[4px] text-center sm:text-left text-sm font-medium"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-md bg-brand-beige text-brand-olive font-medium uppercase tracking-[2px] text-sm hover:bg-white transition-all shadow-md"
              >
                Check Now
              </button>
            </form>
            {pincodeResult && (
              <div className={`mt-4 p-4 rounded-md flex items-center gap-3 max-w-lg transition-all ${pincodeResult === 'success' ? 'bg-green-500/20 border border-green-400/30 text-green-100' : 'bg-orange-500/20 border border-orange-400/30 text-orange-100'}`}>
                <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center ${pincodeResult === 'success' ? 'bg-green-500' : 'bg-orange-500'}`}>
                  {pincodeResult === 'success'
                    ? <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  }
                </div>
                <div>
                  <p className="font-semibold text-sm">{pincodeResult === 'success' ? 'We deliver to your area! 🎉' : 'Coming soon to your area!'}</p>
                  <p className="text-xs opacity-70">{pincodeResult === 'success' ? 'Fill the form below to start your ritual.' : 'Still submit — we\'ll notify you when we expand!'}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Step 2: Plan Selector ── */}
        <div className="mb-10">
          <div className="bg-white rounded-2xl shadow-sm border border-brand-beige/20 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-brand-olive text-white flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
              <h2 className="text-xl font-serif text-brand-olive tracking-wide">Choose Your Nourishment Cycle</h2>
            </div>
            <p className="text-brand-sage/70 text-sm mb-6">The secret to health is consistency. Select a plan that fits your lifestyle.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {PLANS.map((plan) => {
                const disc = Math.round(((plan.originalPrice - plan.totalPrice) / plan.originalPrice) * 100);
                const isActive = selectedPlan === plan.days;
                return (
                  <button
                    key={plan.days}
                    onClick={() => setSelectedPlan(plan.days)}
                    className={`rounded-2xl p-5 flex flex-col items-center gap-2 transition-all duration-300 border ${isActive
                      ? 'bg-brand-olive text-white shadow-xl scale-105 border-brand-olive'
                      : 'bg-brand-beige/5 text-brand-olive border-brand-beige/20 hover:border-brand-sage/40 hover:bg-brand-sage/5'
                      }`}
                  >
                    <span className="text-3xl font-serif font-bold">{plan.days}</span>
                    <span className={`text-[9px] uppercase font-bold tracking-[2px] ${isActive ? 'opacity-60' : 'opacity-50'}`}>Days</span>
                    <span className={`text-sm font-bold mt-1 ${isActive ? 'text-brand-beige' : 'text-brand-olive'}`}>₹{plan.totalPrice}</span>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold ${isActive ? 'bg-white/10 text-brand-beige/80' : 'bg-brand-sage/10 text-brand-sage'}`}>
                      Save {disc}%
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Plan Summary */}
            <div className="bg-brand-olive/5 rounded-md p-4 flex flex-wrap gap-6 items-center">
              <div>
                <span className="text-[9px] uppercase tracking-[2px] text-brand-sage/60 font-bold block mb-0.5">Selected Plan</span>
                <span className="text-2xl font-serif text-brand-olive font-medium">{selectedPlan} Days</span>
              </div>
              <div className="h-8 w-px bg-brand-beige/30 hidden md:block" />
              <div>
                <span className="text-[9px] uppercase tracking-[2px] text-brand-sage/60 font-bold block mb-0.5">Your Price</span>
                <span className="text-2xl font-serif text-brand-olive font-medium">₹{currentPlan.totalPrice}</span>
              </div>
              <div className="h-8 w-px bg-brand-beige/30 hidden md:block" />
              <div>
                <span className="text-[9px] uppercase tracking-[2px] text-brand-sage/60 font-bold block mb-0.5">You Save</span>
                <span className="text-xl font-bold text-brand-sage">₹{totalSavings} ({discountPct}% off)</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Step 3: Your Details Form ── */}
        <div ref={formRef}>
          <div className="bg-white rounded-2xl shadow-sm border border-brand-beige/20 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-brand-olive text-white flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
              <h2 className="text-xl font-serif text-brand-olive tracking-wide">Your Details</h2>
            </div>
            <p className="text-brand-sage/70 text-sm mb-8">Our lead nutritionist will reach out within 2 hours to personalize your plan.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row: Name + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/60 ml-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={setField('name')}
                    disabled={isSubmitting}
                    placeholder="e.g. Priya Sharma"
                    className="w-full bg-brand-beige/5 border border-brand-beige/20 rounded-md px-5 py-4 focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all outline-none text-brand-olive placeholder:text-brand-sage/30"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/60 ml-1">Phone Number *</label>
                  <div className="flex">
                    <span className="bg-brand-beige/10 border border-r-0 border-brand-beige/20 rounded-l-xl px-4 flex items-center text-brand-olive/60 text-sm font-medium">+91</span>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handlePhoneChange}
                      disabled={isSubmitting}
                      placeholder="10-digit number"
                      className="flex-1 bg-brand-beige/5 border border-brand-beige/20 rounded-r-xl px-5 py-4 focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all outline-none text-brand-olive placeholder:text-brand-sage/30"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/60 ml-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={setField('email')}
                  disabled={isSubmitting}
                  placeholder="e.g. priya@email.com"
                  className="w-full bg-brand-beige/5 border border-brand-beige/20 rounded-md px-5 py-4 focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all outline-none text-brand-olive placeholder:text-brand-sage/30"
                />
              </div>

              {/* Address + Location */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between ml-1 mb-1">
                  <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/60">Delivery Address *</label>
                  <button
                    type="button"
                    onClick={handleUseLocation}
                    disabled={isLocating || isSubmitting}
                    className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[1px] text-brand-sage hover:text-brand-olive transition-colors group disabled:opacity-50"
                  >
                    {isLocating ? (
                      <span className="w-3.5 h-3.5 border-2 border-brand-sage/40 border-t-brand-sage rounded-full animate-spin" />
                    ) : (
                      <svg className="w-3.5 h-3.5 text-brand-sage group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                    {isLocating ? 'Detecting…' : 'Use My Location'}
                  </button>
                </div>
                <textarea
                  rows="3"
                  required
                  value={form.address}
                  onChange={setField('address')}
                  disabled={isSubmitting}
                  placeholder="Your full delivery address (house/flat no., street, area, city)"
                  className={`w-full bg-brand-beige/5 border rounded-md px-5 py-4 focus:ring-1 transition-all outline-none text-brand-olive placeholder:text-brand-sage/30 resize-none ${form.address && pincode && !form.address.includes(pincode)
                      ? 'border-orange-300 focus:ring-orange-300 focus:border-orange-300'
                      : 'border-brand-beige/20 focus:ring-brand-sage focus:border-brand-sage'
                    }`}
                />
                <div className="flex justify-between items-center mt-1">
                  {form.latitude && (
                    <a
                      href={`https://maps.google.com/?q=${form.latitude},${form.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[10px] text-brand-sage font-bold uppercase tracking-[1px] hover:underline"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                      GPS Captured · View on Map
                    </a>
                  )}
                  {form.address && pincode && (
                    <span className={`text-[9px] font-bold uppercase tracking-[1px] ${form.address.includes(pincode) ? 'text-green-600' : 'text-orange-500'}`}>
                      {form.address.includes(pincode) ? '✓ Pincode Matches' : '⚠️ Address must contain ' + pincode}
                    </span>
                  )}
                </div>
              </div>

              {/* Dietary Preference */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/60 ml-1">Dietary Preference *</label>
                <select
                  required
                  value={form.dietaryPreference}
                  onChange={setField('dietaryPreference')}
                  disabled={isSubmitting}
                  className="w-full bg-brand-beige/5 border border-brand-beige/20 rounded-md px-5 py-4 focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all outline-none text-brand-olive appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select preference…</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                </select>
              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-sage/60 ml-1">Additional Notes <span className="normal-case tracking-normal font-normal opacity-60">(Optional)</span></label>
                <textarea
                  rows="3"
                  value={form.message}
                  onChange={setField('message')}
                  disabled={isSubmitting}
                  placeholder="Any allergies, health conditions, or special requests…"
                  className="w-full bg-brand-beige/5 border border-brand-beige/20 rounded-md px-5 py-4 focus:ring-1 focus:ring-brand-sage focus:border-brand-sage transition-all outline-none text-brand-olive placeholder:text-brand-sage/30 resize-none"
                />
              </div>

              {/* Order Summary */}
              <div className="bg-brand-olive/5 border border-brand-olive/10 rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-[9px] uppercase tracking-[2px] text-brand-sage/60 font-bold block mb-1">Your Order Summary</span>
                  <p className="text-brand-olive font-serif text-xl">{selectedPlan}-Day Ritual Plan</p>
                  <p className="text-brand-sage/60 text-sm">
                    <s className="opacity-50">₹{currentPlan.originalPrice}</s>{' '}
                    <strong className="text-brand-sage">₹{currentPlan.totalPrice}</strong>
                    <span className="ml-2 text-[10px] bg-brand-sage/10 text-brand-sage px-2 py-0.5 rounded-full font-bold uppercase">Save {discountPct}%</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[9px] uppercase tracking-[2px] text-brand-sage/60 font-bold block mb-1">Total</span>
                  <span className="text-4xl font-serif text-brand-olive">₹{currentPlan.totalPrice}</span>
                </div>
              </div>

              {/* Delivery not available notice */}
              {pincodeResult === 'error' && (
                <div className="bg-orange-50 border border-orange-200 rounded-md p-4 flex items-center gap-3">
                  <svg className="w-5 h-5 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <p className="text-orange-700 text-sm">We don't currently deliver to pincode <strong>{pincode}</strong>. We're expanding soon — your interest is noted!</p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting || pincodeResult !== 'success'}
                className={`w-full py-5 rounded-md font-medium uppercase tracking-[3px] text-sm transition-all shadow-xl flex items-center justify-center gap-3 ${isSubmitting || pincodeResult !== 'success'
                  ? 'bg-brand-olive/40 text-white cursor-not-allowed'
                  : 'bg-brand-olive text-white hover:bg-brand-sage hover:-translate-y-0.5'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting…
                  </>
                ) : (
                  <>
                    Start My Ritual
                  </>
                )}
              </button>

              {!pincodeResult && (
                <p className="text-center text-[10px] text-orange-500 font-bold uppercase tracking-widest mt-2 animate-pulse">
                  Please check delivery availability first (Step 1)
                </p>
              )}

              <p className="text-center text-[9px] text-brand-sage/40 font-bold uppercase tracking-widest">
                Your information is safe with us • No spam ever
              </p>
            </form>
          </div>
        </div>

        {/* ── What happens next? ── */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { step: '01', title: 'We Call You', desc: 'Our nutritionist calls within 2 hours to understand your goals.' },
            { step: '02', title: 'Custom Plan', desc: 'We build a meal plan around your preferences, allergies & goals.' },
            { step: '03', title: 'Daily Delivery', desc: 'Fresh, chef-crafted meals delivered to your door every morning.' },
          ].map((item) => (
            <div key={item.step} className="bg-white rounded-2xl border border-brand-beige/20 p-6 flex gap-4 items-start shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <span className="text-4xl font-serif text-brand-beige/40 font-bold leading-none flex-shrink-0">{item.step}</span>
              <div>
                <h3 className="font-serif text-brand-olive text-lg mb-1">{item.title}</h3>
                <p className="text-brand-sage/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartRitual;
