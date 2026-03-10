import React, { useState, useEffect } from 'react';
import { enquiryStore } from '../utils/enquiryStore';
import { supabase } from '../utils/supabaseClient';

const Admin = () => {
  // ── Tab state ─────────────────────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState('enquiries'); // 'enquiries' | 'signups'

  // ── Enquiries state ────────────────────────────────────────────────────────
  const [enquiries, setEnquiries] = useState([]);
  const [enqFilter, setEnqFilter] = useState('all');
  const [enqLoading, setEnqLoading] = useState(true);

  // ── Ritual Signups state ───────────────────────────────────────────────────
  const [signups, setSignups] = useState([]);
  const [signupFilter, setSignupFilter] = useState('all');
  const [signupsLoading, setSignupsLoading] = useState(true);

  const [user, setUser] = useState(null);

  // ── Data fetching ──────────────────────────────────────────────────────────
  const fetchEnquiries = async () => {
    setEnqLoading(true);
    const data = await enquiryStore.getAll();
    setEnquiries(data);
    setEnqLoading(false);
  };

  const fetchSignups = async () => {
    setSignupsLoading(true);
    const data = await enquiryStore.getAllRitualSignups();
    setSignups(data);
    setSignupsLoading(false);
  };

  const getUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  };

  useEffect(() => {
    getUser();
    fetchEnquiries();
    fetchSignups();

    // Real-time: enquiries
    const enqSub = supabase
      .channel('enquiries_changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'enquiries' }, fetchEnquiries)
      .subscribe();

    // Real-time: ritual_signups
    const signupSub = supabase
      .channel('ritual_signups_changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'ritual_signups' }, fetchSignups)
      .subscribe();

    return () => {
      supabase.removeChannel(enqSub);
      supabase.removeChannel(signupSub);
    };
  }, []);

  const handleLogout = async () => { await supabase.auth.signOut(); };

  // ── Enquiry actions ────────────────────────────────────────────────────────
  const handleStatusUpdate = async (id, status) => {
    await enquiryStore.updateStatus(id, status);
    fetchEnquiries();
  };
  const handleDelete = async (id) => {
    if (window.confirm('Delete this enquiry?')) {
      await enquiryStore.delete(id);
      fetchEnquiries();
    }
  };

  // ── Signup actions ─────────────────────────────────────────────────────────
  const handleSignupStatusUpdate = async (id, status) => {
    await enquiryStore.updateRitualSignupStatus(id, status);
    fetchSignups();
  };
  const handleSignupDelete = async (id) => {
    if (window.confirm('Delete this signup?')) {
      await enquiryStore.deleteRitualSignup(id);
      fetchSignups();
    }
  };

  // ── Computed values ────────────────────────────────────────────────────────
  const filteredEnquiries = enquiries.filter(e => enqFilter === 'all' || e.status === enqFilter);
  const filteredSignups = signups.filter(s => signupFilter === 'all' || s.status === signupFilter);

  const enqStats = {
    total: enquiries.length,
    new: enquiries.filter(e => e.status === 'new').length,
    responded: enquiries.filter(e => e.status === 'responded').length,
  };
  const signupStats = {
    total: signups.length,
    new: signups.filter(s => s.status === 'new').length,
    responded: signups.filter(s => s.status === 'responded').length,
  };

  // ── Shared UI helpers ──────────────────────────────────────────────────────
  const Badge = ({ text, color }) => (
    <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${color}`}>{text}</span>
  );

  const ActionButtons = ({ item, onStatusUpdate, onDelete }) => (
    <div className="flex md:flex-col gap-3 justify-end items-end">
      {item.status === 'new' ? (
        <button
          onClick={() => onStatusUpdate(item.id, 'responded')}
          className="bg-brand-olive/80 hover:bg-brand-sage hover:text-white text-white p-3 rounded-xl text-[10px] font-medium uppercase tracking-widest transition-all shadow-lg w-full md:w-auto"
        >
          Mark Responded
        </button>
      ) : (
        <button
          onClick={() => onStatusUpdate(item.id, 'new')}
          className="bg-white/10 hover:bg-white text-white p-3 rounded-xl text-[10px] font-medium uppercase tracking-widest transition-all w-full md:w-auto"
        >
          Re-open
        </button>
      )}
      <button
        onClick={() => onDelete(item.id)}
        className="bg-red-500/10 hover:bg-red-500 text-red-400 p-3 rounded-xl text-[10px] font-medium uppercase tracking-widest transition-all w-full md:w-auto"
      >
        Delete
      </button>
    </div>
  );

  // ─── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-brand-olive text-white pt-[96px] pb-24 px-4 md:px-16 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-sage rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-beige rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ─── Header ─── */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-3">
              <h1 className="text-4xl md:text-6xl font-serif">Dashboard</h1>
              {user && (
                <button
                  onClick={handleLogout}
                  className="bg-white/5 hover:bg-white/10 text-white/40 hover:text-white px-4 py-2 rounded-xl text-[9px] font-bold uppercase tracking-[2px] transition-all border border-white/5"
                >
                  Logout
                </button>
              )}
            </div>
            <p className="text-brand-beige/50 text-lg max-w-xl">
              Welcome back, {user?.email?.split('@')[0]}. &nbsp;
              {enqStats.new + signupStats.new} new items need attention.
            </p>
          </div>

          {/* Stats overview */}
          <div className="flex gap-3">
            <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-2xl text-center">
              <p className="text-3xl font-serif text-brand-beige">{enqStats.total}</p>
              <p className="text-[9px] uppercase tracking-[2px] text-white font-bold mt-1">Enquiries</p>
            </div>
            <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-2xl text-center">
              <p className="text-3xl font-serif text-brand-beige">{signupStats.total}</p>
              <p className="text-[9px] uppercase tracking-[2px] text-white font-bold mt-1">Signups</p>
            </div>
          </div>
        </div>

        {/* ─── Tab Switcher ─── */}
        <div className="flex gap-2 bg-white/5 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 mb-8 w-fit">
          {[
            { id: 'enquiries', label: 'Enquiries', count: enqStats.total },
            { id: 'signups', label: '🌿 Ritual Signups', count: signupStats.total },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-[2px] transition-all flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-white text-brand-olive shadow-lg'
                : 'hover:bg-white/5 text-white/50'
                }`}
            >
              {tab.label}
              <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${activeTab === tab.id ? 'bg-brand-olive/10 text-brand-olive' : 'bg-white/10 text-white/40'}`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            TAB: ENQUIRIES
        ═════════════════════════════════════════════════════════════════ */}
        {activeTab === 'enquiries' && (
          <>
            {/* Filter bar */}
            <div className="flex gap-2 bg-white/5 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 mb-6 w-fit">
              {['all', 'new', 'responded'].map(f => (
                <button
                  key={f}
                  onClick={() => setEnqFilter(f)}
                  className={`px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-[2px] transition-all ${enqFilter === f ? 'bg-brand-olive text-white shadow-lg' : 'hover:bg-white/5 text-white/40'
                    }`}
                >
                  {f} ({f === 'all' ? enqStats.total : enqStats[f]})
                </button>
              ))}
            </div>

            {enqLoading ? (
              <LoadingSpinner label="Syncing enquiries…" />
            ) : filteredEnquiries.length === 0 ? (
              <EmptyState label="No enquiries in this filter." />
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {filteredEnquiries.map(enquiry => (
                  <div
                    key={enquiry.id}
                    className="group bg-white/5 hover:bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 transition-all duration-500 hover:border-brand-sage shadow-xl"
                  >
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge
                            text={enquiry.type}
                            color={enquiry.type?.includes('Plan') ? 'bg-blue-500 text-white' : 'bg-yellow-500 text-white'}
                          />
                          <span className="text-white text-[10px] font-bold uppercase tracking-widest">
                            {new Date(enquiry.created_at || enquiry.timestamp).toLocaleString()}
                          </span>
                        </div>

                        <div className="space-y-4">
                          {enquiry.name && <h3 className="text-2xl font-serif text-brand-beige">{enquiry.name}</h3>}
                          <div className="flex flex-wrap gap-x-8 gap-y-2">
                            {enquiry.email && <InfoField label="Email" value={enquiry.email} />}
                            {(enquiry.phone_number || enquiry.phoneNumber) && <InfoField label="Phone" value={enquiry.phone_number || enquiry.phoneNumber} />}
                            {(enquiry.plan_days || enquiry.planDays) && <InfoField label="Plan" value={`${enquiry.plan_days || enquiry.planDays} Days`} accent />}
                          </div>
                          {enquiry.message && (
                            <div className="pt-4 border-t border-white/5">
                              <span className="text-[9px] text-white uppercase tracking-widest font-bold block mb-2">Message</span>
                              <p className="text-brand-beige font-serif  text-lg leading-relaxed">"{enquiry.message}"</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <ActionButtons item={enquiry} onStatusUpdate={handleStatusUpdate} onDelete={handleDelete} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* ═════════════════════════════════════════════════════════════════
            TAB: RITUAL SIGNUPS
        ═════════════════════════════════════════════════════════════════ */}
        {activeTab === 'signups' && (
          <>
            {/* Filter bar */}
            <div className="flex gap-2 bg-white/5 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 mb-6 w-fit">
              {['all', 'new', 'responded'].map(f => (
                <button
                  key={f}
                  onClick={() => setSignupFilter(f)}
                  className={`px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-[2px] transition-all ${signupFilter === f ? 'bg-brand-olive text-white shadow-lg' : 'hover:bg-white/5 text-white/40'
                    }`}
                >
                  {f} ({f === 'all' ? signupStats.total : signupStats[f]})
                </button>
              ))}
            </div>

            {signupsLoading ? (
              <LoadingSpinner label="Loading ritual signups…" />
            ) : filteredSignups.length === 0 ? (
              <EmptyState label="No ritual signups yet." />
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {filteredSignups.map(signup => (
                  <div
                    key={signup.id}
                    className="group bg-white/5 hover:bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 transition-all duration-500 hover:border-brand-sage shadow-xl"
                  >
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                      <div className="flex-1">
                        {/* Header row */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <Badge
                            text={`🌿 ${signup.plan_days || '?'}-Day Plan`}
                            color="bg-brand-sage text-white"
                          />
                          {signup.amount && (
                            <Badge
                              text={`₹${signup.amount}`}
                              color="bg-green-500 text-white"
                            />
                          )}
                          <Badge
                            text={signup.status === 'new' ? '● New' : '✓ Responded'}
                            color={signup.status === 'new' ? 'bg-yellow-500 text-white' : 'bg-blue-500 text-white'}
                          />
                          <span className="text-white text-[10px] font-bold uppercase tracking-widest ml-auto">
                            {new Date(signup.created_at).toLocaleString()}
                          </span>
                        </div>

                        {/* Name */}
                        {signup.name && <h3 className="text-2xl font-serif text-brand-beige mb-3">{signup.name}</h3>}

                        {/* Core contact details */}
                        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-4">
                          {signup.email && (
                            <InfoField label="Email" value={
                              <a href={`mailto:${signup.email}`} className="text-brand-beige font-serif  hover:text-brand-sage transition-colors">{signup.email}</a>
                            } />
                          )}
                          {signup.phone && (
                            <InfoField label="Phone" value={
                              <a href={`tel:+91${signup.phone}`} className="text-brand-beige font-serif  hover:text-brand-sage transition-colors">+91 {signup.phone}</a>
                            } />
                          )}
                          {signup.pincode && <InfoField label="Pincode" value={signup.pincode} />}
                          {signup.dietary_preference && <InfoField label="Diet" value={signup.dietary_preference} />}
                          {signup.goals && <InfoField label="Goals" value={signup.goals} accent />}
                        </div>

                        {/* Address + Location */}
                        {signup.address && (
                          <div className="mb-3">
                            <span className="text-[9px] text-white uppercase tracking-widest font-bold block mb-1">Address</span>
                            <p className="text-brand-beige text-sm leading-relaxed">{signup.address}</p>
                            {signup.latitude && signup.longitude && (
                              <a
                                href={`https://maps.google.com/?q=${signup.latitude},${signup.longitude}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 mt-1.5 text-[9px] text-white font-bold uppercase tracking-[1px] hover:underline"
                              >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                View on Google Maps ({signup.latitude.toFixed(4)}, {signup.longitude.toFixed(4)})
                              </a>
                            )}
                          </div>
                        )}

                        {/* Notes */}
                        {signup.message && (
                          <div className="pt-4 border-t border-white/5">
                            <span className="text-[9px] text-white uppercase tracking-widest font-bold block mb-2">Notes</span>
                            <p className="text-brand-beige font-serif  text-lg leading-relaxed">"{signup.message}"</p>
                          </div>
                        )}

                        {/* Quick action: Email */}
                        {signup.phone && (
                          <div className="pt-4 flex gap-3">
                            {signup.email && (
                              <a
                                href={`mailto:${signup.email}?subject=Your Ritual Wellness Plan&body=Hi ${signup.name}, thank you for signing up for your ${signup.plan_days}-day Ritual!`}
                                className="inline-flex items-center gap-2 bg-blue-500/10 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-[9px] font-bold uppercase tracking-[1px] transition-all"
                              >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                Email Customer
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                      <ActionButtons item={signup} onStatusUpdate={handleSignupStatusUpdate} onDelete={handleSignupDelete} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        <div className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] text-brand-beige font-bold uppercase tracking-[4px]">
            Secure Administration Portal • Cloud Persistence: Active
          </p>
        </div>
      </div>
    </div>
  );
};

// ── Small helper components ───────────────────────────────────────────────────
const LoadingSpinner = ({ label }) => (
  <div className="flex flex-col items-center justify-center py-20 space-y-4">
    <div className="w-12 h-12 border-4 border-brand-sage border-t-transparent rounded-full animate-spin" />
    <p className="text-brand-beige font-serif ">{label}</p>
  </div>
);

const EmptyState = ({ label }) => (
  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-20 text-center">
    <div className="text-6xl mb-6 opacity-20">🍃</div>
    <h3 className="text-2xl font-serif text-brand-beige ">{label}</h3>
  </div>
);

const InfoField = ({ label, value, accent }) => (
  <div className="flex flex-col">
    <span className="text-[9px] text-white uppercase tracking-widest font-bold">{label}</span>
    {typeof value === 'string'
      ? <span className={`font-serif  ${accent ? 'text-white font-bold' : 'text-brand-beige'}`}>{value}</span>
      : value
    }
  </div>
);

export default Admin;
