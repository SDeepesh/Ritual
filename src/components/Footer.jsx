import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/ritual-logo-trim.png';
import Toast from './Toast';
import { enquiryStore } from '../utils/enquiryStore';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showToast, setShowToast] = useState(false);
  const [email, setEmail] = useState('');

  const footerLinks = [
    {
      title: 'Our Ritual',
      links: [
        { name: 'Menu', href: '/#menu' },
        { name: 'Plans', href: '/#plans' },
        { name: 'Functional Shots', href: '/functional-shots' },
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
        { name: 'Terms of Service', href: '/terms' },
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

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      await enquiryStore.save({
        type: 'Newsletter Subscription',
        email: email
      });
      setShowToast(true);
      setEmail('');
    } catch (err) {
      console.error('Newsletter error:', err);
    }
  };

  return (
    <footer className="bg-brand-olive pt-16 pb-8 px-4 md:px-16 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-sage/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

      {showToast && (
        <Toast
          message="Subscribed! Welcome to the Ritual newsletter."
          onClose={() => setShowToast(false)}
        />
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src={logoImg}
                alt="Ritual Logo"
                className="mb-8 brightness-0 invert w-[120px]"
              />
            </Link>
            <p className="text-brand-beige text-base leading-relaxed mb-8 max-w-sm">
              Cultivating wellness through conscious meals. Our ritual is to provide nutrient-dense, plant-forward nourishment delivered fresh to your doorstep.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/ritualwellness.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-brand-beige/30 flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-brand-beige" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-brand-beige/30 flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 text-brand-beige" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-[12px] font-bold uppercase tracking-[3px] mb-8 text-white">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className="text-brand-beige hover:text-white transition-colors text-sm font-medium"
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
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[2px] text-white/80 font-bold">
          <p>&copy; {currentYear} Ritual. All rights reserved.</p>
          <div className="flex gap-2 md:gap-8">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            {/* <Link to="/ritual-admin-auth" className="opacity-0 hover:opacity-100 transition-opacity">Admin</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
