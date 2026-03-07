import React, { useState, useEffect } from 'react';
import { enquiryStore } from '../utils/enquiryStore';
import { supabase } from '../utils/supabaseClient';

const Admin = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'new', 'responded'
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const fetchEnquiries = async () => {
    setIsLoading(true);
    const data = await enquiryStore.getAll();
    setEnquiries(data);
    setIsLoading(false);
  };

  const getUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  };

  useEffect(() => {
    getUser();
    fetchEnquiries();

    // Set up Real-time subscription
    const subscription = supabase
      .channel('enquiries_changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'enquiries' }, () => {
        fetchEnquiries();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleStatusUpdate = async (id, status) => {
    await enquiryStore.updateStatus(id, status);
    fetchEnquiries();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this enquiry?')) {
      await enquiryStore.delete(id);
      fetchEnquiries();
    }
  };

  const filteredEnquiries = enquiries.filter(e =>
    filter === 'all' ? true : e.status === filter
  );

  const stats = {
    total: enquiries.length,
    new: enquiries.filter(e => e.status === 'new').length,
    responded: enquiries.filter(e => e.status === 'responded').length
  };

  return (
    <div className="min-h-screen bg-brand-olive text-white pt-[80px] pb-24 px-4 md:px-16 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-sage/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-beige/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
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
            <p className="text-brand-beige/50 text-lg md:text-xl max-w-xl">
              Welcome back, {user?.email?.split('@')[0]}. You have {stats.new} new enquiries processing in the ritual circle.
            </p>
          </div>

          <div className="flex gap-4 bg-white/5 backdrop-blur-md p-2 rounded-2xl border border-white/10">
            {['all', 'new', 'responded'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-[2px] transition-all ${filter === f ? 'bg-brand-sage text-white shadow-lg' : 'hover:bg-white/5 text-white/40'
                  }`}
              >
                {f} ({f === 'all' ? stats.total : stats[f]})
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="w-12 h-12 border-4 border-brand-sage border-t-transparent rounded-full animate-spin"></div>
            <p className="text-brand-beige/40 font-serif italic">Syncing with Ritual Vault...</p>
          </div>
        ) : filteredEnquiries.length === 0 ? (
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-20 text-center">
            <div className="text-6xl mb-6 opacity-20">🍃</div>
            <h3 className="text-2xl font-serif text-brand-beige/40 italic">No enquiries found in this ritual circle.</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {filteredEnquiries.map((enquiry) => (
              <div
                key={enquiry.id}
                className="group bg-white/5 hover:bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 transition-all duration-500 hover:border-brand-sage/30 shadow-xl"
              >
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-4 py-1.5 rounded-full text-center text-[9px] font-bold uppercase tracking-widest ${enquiry.type?.includes('Plan') ? 'bg-blue-500/20 text-blue-500' :
                        enquiry.status === 'new' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-blue-500/20 text-blue-500'
                        }`}>
                        {enquiry.type}
                      </span>
                      <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
                        {new Date(enquiry.created_at || enquiry.timestamp).toLocaleString()}
                      </span>
                    </div>

                    <div className="space-y-4">
                      {enquiry.name && (
                        <h3 className="text-2xl font-serif text-brand-beige">{enquiry.name}</h3>
                      )}

                      <div className="flex flex-wrap gap-x-8 gap-y-2">
                        {enquiry.email && (
                          <div className="flex flex-col">
                            <span className="text-[9px] text-white/30 uppercase tracking-widest font-bold">Email</span>
                            <span className="text-brand-beige/80 font-serif italic">{enquiry.email}</span>
                          </div>
                        )}
                        {(enquiry.phone_number || enquiry.phoneNumber) && (
                          <div className="flex flex-col">
                            <span className="text-[9px] text-white/30 uppercase tracking-widest font-bold">Phone</span>
                            <span className="text-brand-beige/80 font-serif italic">{enquiry.phone_number || enquiry.phoneNumber}</span>
                          </div>
                        )}
                        {(enquiry.plan_days || enquiry.planDays) && (
                          <div className="flex flex-col">
                            <span className="text-[9px] text-white/30 uppercase tracking-widest font-bold">Plan</span>
                            <span className="text-brand-sage font-bold italic">{enquiry.plan_days || enquiry.planDays} Days</span>
                          </div>
                        )}
                      </div>

                      {enquiry.message && (
                        <div className="pt-4 border-t border-white/5">
                          <span className="text-[9px] text-white/30 uppercase tracking-widest font-bold block mb-2">Message</span>
                          <p className="text-brand-beige/60 font-serif italic text-lg leading-relaxed">
                            "{enquiry.message}"
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex md:flex-col gap-3 justify-end items-end">
                    {enquiry.status === 'new' ? (
                      <button
                        onClick={() => handleStatusUpdate(enquiry.id, 'responded')}
                        className="bg-brand-sage/80 hover:bg-brand-sage text-white p-3 rounded-xl text-[10px] font-medium uppercase tracking-widest transition-all shadow-lg w-full md:w-auto"
                      >
                        Mark Responded
                      </button>
                    ) : (
                      <button
                        onClick={() => handleStatusUpdate(enquiry.id, 'new')}
                        className="bg-white/10 hover:bg-white/20 text-white/60 p-3 rounded-xl text-[10px] font-medium uppercase tracking-widest transition-all w-full md:w-auto"
                      >
                        Re-open
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(enquiry.id)}
                      className="bg-red-500/10 hover:bg-red-500/20 text-red-500 p-3 rounded-xl text-[10px] font-medium uppercase tracking-widest transition-all w-full md:w-auto"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] text-brand-beige/20 font-bold uppercase tracking-[4px]">
            Secure Administration Portal • Cloud Persistence: Active
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
