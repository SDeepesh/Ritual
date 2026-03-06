import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-olive selection:bg-brand-sage selection:text-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
