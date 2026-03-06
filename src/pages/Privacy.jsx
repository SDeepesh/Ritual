import React from 'react';
import PageHeader from '../components/PageHeader';

const Privacy = () => {
  return (
    <div className="pb-24">
      <PageHeader 
        title="Privacy Policy" 
        subtitle="Your trust is our most important ingredient." 
      />
      <section className="max-w-3xl mx-auto px-4 mt-16 md:mt-24 text-brand-sage/80 font-serif leading-relaxed space-y-12">
        <div>
          <h2 className="text-2xl text-brand-olive mb-4 uppercase tracking-widest font-bold">Introduction</h2>
          <p>
            At Ritual, we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and disclose your data when you use our website and services.
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-brand-olive mb-4 uppercase tracking-widest font-bold">Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or otherwise when you contact us.
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-brand-olive mb-4 uppercase tracking-widest font-bold">How We Use Your Data</h2>
          <p>
            We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
        </div>
        <div className="pt-8 border-t border-brand-beige/20 text-sm italic opacity-60">
          Last updated: October 2023. This policy may be updated periodically.
        </div>
      </section>
    </div>
  );
};

export default Privacy;
