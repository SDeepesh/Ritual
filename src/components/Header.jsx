import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/ritual-logo-trim.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Pages where header overlays a dark hero image
  const isTransparentHeader = !isScrolled && (
    location.pathname.startsWith('/blog/') ||
    location.pathname.startsWith('/ritual-admin')
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      return () => {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        document.body.style.touchAction = '';
      };
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Our Story', href: '/story' },
    { name: 'Menu', href: '/#menu' },
    { name: 'Functional Shots', href: '/functional-shots' },
    { name: 'Plans', href: '/#plans' },
    { name: 'FAQ', href: '/#faq' },
  ];

  const navLinksMobile = [
    { name: 'Our Story', href: '/story' },
    { name: 'Plans', href: '/#plans' },
    { name: 'Menu', href: '/#menu' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Nutrition', href: '/nutrition' },
    { name: 'Delivery Area', href: '/delivery' },
    { name: 'Functional Shots', href: '/functional-shots' },
  ];

  const handleLinkClick = (href) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#') && location.pathname === '/') {
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed w-full z-[100] transition-all duration-500 px-4 ${isScrolled
        ? 'py-4 bg-white/80 backdrop-blur-lg shadow-sm border-b border-brand-beige/20'
        : 'py-6 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="relative z-[110] transition-transform hover:scale-105 duration-300" onClick={() => setIsMobileMenuOpen(false)}>
          <img
            src={logoImg}
            alt="Ritual Logo"
            className={`object-contain transition-all w-[120px] ${isTransparentHeader ? 'brightness-0 invert' : ''}`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`text-md font-medium tracking-[2px] transition-colors relative group ${
                isTransparentHeader
                  ? 'text-white/80 hover:text-white'
                  : 'text-brand-olive/70 hover:text-brand-olive'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-sage transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/start-ritual"
            className="bg-brand-olive hover:bg-brand-sage text-white px-8 py-3 rounded-md text-sm transition-colors duration-300 shadow-sm hover:shadow-md uppercase font-medium"
          >
            Start Your Ritual
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''} ${isTransparentHeader ? 'bg-white' : 'bg-brand-olive'}`}></span>
          <span className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''} ${isTransparentHeader ? 'bg-white' : 'bg-brand-olive'}`}></span>
          <span className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''} ${isTransparentHeader ? 'bg-white' : 'bg-brand-olive'}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[105] transition-all duration-500 ease-in-out flex flex-col p-4 pt-28 overflow-hidden h-[100vh] ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
      >
        <nav className="flex flex-col gap-8 mb-12">
          {navLinksMobile.map((link, idx) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="text-2xl text-brand-olive hover:text-brand-sage transition-colors"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-4 mb-20">
          <Link
            to="/start-ritual"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center bg-brand-olive hover:bg-brand-sage text-white py-3 rounded-md text-md transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            Start Your Ritual
          </Link>
        </div>

        {/* Mobile Decor */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-sage/5 rounded-full blur-3xl -z-10 translate-x-1/2 translate-y-1/2"></div>
      </div>
    </header>
  );
};

export default Header;
