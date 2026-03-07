import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';
import Toast from '../components/Toast';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate('/ritual-admin-vault');
    }
  };

  return (
    <div className="min-h-screen bg-brand-olive flex items-center justify-center px-4 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-sage/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-beige/10 rounded-full blur-[100px]"></div>
      </div>

      {error && (
        <Toast 
          message={error} 
          type="error"
          onClose={() => setError(null)} 
        />
      )}

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-serif text-white mb-2">Admin Ritual</h1>
            <p className="text-brand-beige/40 text-sm uppercase tracking-widest font-bold">Secure Access</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] text-brand-beige/60 uppercase tracking-widest font-bold px-4">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-sage transition-all"
                placeholder="admin@ritual.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] text-brand-beige/60 uppercase tracking-widest font-bold px-4">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-sage transition-all"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-brand-sage text-white py-5 rounded-2xl font-bold uppercase tracking-[3px] transition-all shadow-xl flex items-center justify-center gap-4 ${
                loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-white hover:text-brand-olive'
              }`}
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Authenticating...
                </>
              ) : 'Enter Vault'}
            </button>
          </form>

          <p className="text-center text-[9px] text-brand-beige/20 mt-8 font-bold uppercase tracking-[4px]">
            Ritual Administrative Portal
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
