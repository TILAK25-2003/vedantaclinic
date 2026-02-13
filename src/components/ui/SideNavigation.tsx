import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'appointment', label: 'Book Appointment' },
  { id: 'contact', label: 'Contact' },
];

export const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-4">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => handleScroll(id, e)}
          className="group relative flex items-center justify-end p-2 cursor-pointer"
          aria-label={`Scroll to ${label}`}
        >
          {/* Tooltip */}
          <span className="absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-dental-900 text-white text-xs font-medium px-3 py-1.5 rounded shadow-lg whitespace-nowrap pointer-events-none translate-x-2 group-hover:translate-x-0">
            {label}
          </span>
          
          {/* Dot */}
          <motion.div
            animate={{
              scale: activeSection === id ? 1.5 : 1,
              backgroundColor: activeSection === id ? '#d42a2a' : '#d1d5db', // dental-600 vs gray-300
              opacity: activeSection === id ? 1 : 0.6,
            }}
            whileHover={{ scale: 1.5, opacity: 1, backgroundColor: '#d42a2a' }}
            className="w-3 h-3 rounded-full transition-all duration-300 shadow-sm border border-white/50"
          />
        </a>
      ))}
    </nav>
  );
};
