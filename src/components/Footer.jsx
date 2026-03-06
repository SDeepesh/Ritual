import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/ritual-logo-trim.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Our Ritual',
      links: [
        { name: 'Menu', href: '/#menu' },
        { name: 'Plans', href: '/#plans' },
        { name: 'Gifting', href: '/gifting' },
        { name: 'Nutrition', href: '/nutrition' },
      ],
    },
    {
      title: 'Community',
      links: [
        { name: 'Reviews', href: '/#community' },
        { name: 'Refer a Friend', href: '/refer' },
        { name: 'Corporate Plans', href: '/corporate' },
        { name: 'Our Story', href: '/story' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'FAQ', href: '/#faq' },
        { name: 'Delivery Area', href: '/delivery' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
      ],
    },
  ];

  const handleLinkClick = (href) => {
    if (href.startsWith('/#') && window.location.pathname === '/') {
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-brand-olive pt-20 pb-12 px-4 md:px-16 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-sage/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src={logoImg}
                alt="Ritual Logo"
                className="mb-8 brightness-0 invert opacity-90 w-[120px]"
              />
            </Link>
            <p className="text-brand-beige/60 text-base leading-relaxed mb-8 max-w-sm font-serif italic">
              Cultivating wellness through conscious meals. Our ritual is to provide nutrient-dense, plant-forward nourishment delivered fresh to your doorstep.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href={`#${social.toLowerCase()}`}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all group"
                  aria-label={social}
                >
                  <span className="text-[10px] font-bold tracking-widest uppercase opacity-40 group-hover:opacity-100">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-[10px] font-bold uppercase tracking-[3px] mb-8 text-white/40">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className="text-brand-beige/70 hover:text-white transition-colors text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright Row */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[2px] text-white/30 font-bold">
          <p>&copy; {currentYear} Ritual. All rights reserved.</p>
          <div className="flex gap-2 md:gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/delivery" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
