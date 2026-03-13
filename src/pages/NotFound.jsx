import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Our Story', to: '/story' },
  { label: 'Functional Shots', to: '/functional-shots' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Start Ritual', to: '/start-ritual' },
  { label: 'Contact', to: '/contact' },
];

const NotFound = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <SEO
        title="Page Not Found | Ritual Wellness"
        description="The page you are looking for doesn't exist. Head back to Ritual and restart your wellness journey."
      />

      <div
        className={`bg-[#fcfaf7] flex flex-col items-center justify-center px-6 text-center relative overflow-hidden pt-28 pb-20 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Subtle background blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-sage/5 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-olive/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

        {/* Ghost 404 watermark */}
        <span
          className="text-[160px] md:text-[220px] font-serif font-bold leading-none text-brand-olive/5 select-none absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          404
        </span>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">

          {/* Icon ring */}
          <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 rounded-full bg-brand-sage/10 border border-brand-sage/20 flex items-center justify-center shadow-inner">
            <svg
              className="w-10 h-10 md:w-12 md:h-12 text-brand-sage"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3}
                d="M3 12a9 9 0 0118 0M3 12h18M7 12c0 2.761 2.239 5 5 5s5-2.239 5-5" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3}
                d="M12 7v1M9 8.5l.5.866M15 8.5l-.5.866" />
            </svg>
          </div>

          {/* Badge */}
          <div className="inline-block px-3 py-1 bg-brand-sage/10 rounded-full mb-5">
            <span className="text-[10px] text-brand-sage uppercase tracking-[3px] font-bold">
              Empty Bowl
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-serif text-brand-olive font-medium mb-4 leading-tight">
            This page is <span className="text-brand-sage italic">missing</span>
          </h1>

          {/* Body text */}
          <p className="text-brand-olive/60 text-base md:text-lg leading-relaxed max-w-md mx-auto mb-10">
            Looks like this bowl is empty. The page you're looking for doesn't exist
            or may have moved. Let's get you back to your Ritual.
          </p>

          {/* Primary CTA */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-brand-olive text-white px-10 py-3.5 rounded-md text-sm font-medium uppercase tracking-[2px] hover:bg-brand-sage transition-all duration-300 shadow-lg mb-14"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>

          {/* Quick nav */}
          <p className="text-brand-olive/30 text-[10px] uppercase tracking-[3px] font-bold mb-5">
            Or explore these pages
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-2xl">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="bg-white border border-brand-beige/30 text-brand-olive/70 hover:bg-brand-sage/5 hover:text-brand-olive hover:border-brand-sage/30 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 text-center shadow-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Brand mark */}
          <p className="mt-16 text-brand-olive/20 text-[10px] uppercase tracking-[4px] font-bold">
            Ritual Wellness &mdash; Chennai
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
