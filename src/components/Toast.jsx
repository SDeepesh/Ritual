import React, { useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-8 right-8 z-[200] animate-in fade-in slide-in-from-right-10 duration-500">
      <div className={`px-8 py-4 rounded-2xl shadow-2xl backdrop-blur-md flex items-center gap-4 border ${type === 'success' ? 'bg-brand-sage/90 text-white border-white/20' : 'bg-red-900/90 text-white border-white/20'
        }`}>
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">
          {type === 'success' ? '✓' : '!'}
        </div>
        <p className="tracking-wide">{message}</p>
        <button onClick={onClose} className="ml-4 opacity-50 hover:opacity-100 transition-opacity">
          ✕
        </button>
      </div>
    </div>
  );
};

export default Toast;
