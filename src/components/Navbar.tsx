import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-dental-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              V
            </div>
            <div className={`flex flex-col ${scrolled ? 'text-dental-900' : 'text-dental-900 md:text-white'}`}>
              <span className="font-bold text-lg leading-none">VEDANTA</span>
              <span className="text-xs tracking-wider font-medium">DENTAL CARE</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`text-sm font-medium hover:text-dental-500 transition-colors ${scrolled ? 'text-gray-700' : 'text-white/90'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a 
              href="#appointment"
              className="bg-dental-700 hover:bg-dental-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Calendar size={16} />
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-dental-900' : 'text-dental-900'}`} // Always dark on mobile for visibility against white bg of menu or mixed bg
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-dental-900 font-medium py-2 border-b border-gray-50 hover:text-dental-600"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#appointment"
                onClick={() => setIsOpen(false)}
                className="bg-dental-700 text-white py-3 rounded-lg text-center font-semibold mt-2"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
