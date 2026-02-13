import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Smile, Drill, Syringe, 
  Crown, Scissors, Activity, HeartPulse,
  Gem, ShieldCheck, Zap, PenTool,
  MoreVertical, CalendarCheck, Info
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

const services = [
  { icon: <Sparkles />, title: "Teeth Cleaning", desc: "Remove yellow stains and bad breath for a fresh smile." },
  { icon: <Zap />, title: "Teeth Whitening", desc: "Make your yellow teeth bright white in just 45 minutes." },
  { icon: <Smile />, title: "Smile Designing", desc: "Fix gaps and uneven teeth to get a celebrity smile.", popular: true },
  { icon: <Drill />, title: "Root Canal (RCT)", desc: "Save your infected tooth from removal without pain.", popular: true },
  { icon: <Gem />, title: "Aesthetic Fillings", desc: "Repair cavities with tooth-colored material that looks natural." },
  { icon: <Crown />, title: "Dental Implants", desc: "Best permanent solution for missing teeth that feels real.", popular: true },
  { icon: <Activity />, title: "Dental Bridges", desc: "Replace missing teeth using support from neighboring teeth." },
  { icon: <ShieldCheck />, title: "Dentures", desc: "Removable set of artificial teeth for comfortable eating." },
  { icon: <Scissors />, title: "Extractions", desc: "Safe removal of damaged teeth that cannot be saved." },
  { icon: <Syringe />, title: "Gum Treatments", desc: "Stop gum bleeding and fix loose teeth problems." },
  { icon: <PenTool />, title: "Orthodontics", desc: "Straighten crooked teeth using braces or clear aligners." },
  { icon: <HeartPulse />, title: "Wisdom Tooth", desc: "Pain-free removal of troublesome last molars." },
];

export const Services = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <section id="services" className="py-20 bg-dental-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Dental Services" 
          subtitle="Comprehensive care using the latest technology and techniques."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className={`relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-visible`}
            >
              {service.popular && (
                <div className="absolute top-0 left-0 bg-dental-600 text-white text-[10px] font-bold px-3 py-1 rounded-br-lg uppercase tracking-wider z-10">
                  Popular
                </div>
              )}

              {/* Three Dot Menu Button */}
              <div className="absolute top-4 right-4 z-20">
                <button 
                  onClick={(e) => toggleMenu(index, e)}
                  className={`p-1.5 rounded-full transition-colors ${activeMenu === index ? 'bg-dental-50 text-dental-600' : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'}`}
                  aria-label="More options"
                >
                  <MoreVertical size={18} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeMenu === index && (
                    <motion.div
                      ref={menuRef}
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.1 }}
                      className="absolute right-0 mt-1 w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-30"
                    >
                      <div className="py-1">
                        <a 
                          href="#appointment" 
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-dental-50 hover:text-dental-700 transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          <CalendarCheck size={14} />
                          Book Now
                        </a>
                        <a 
                          href="#contact" 
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-dental-50 hover:text-dental-700 transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          <Info size={14} />
                          Enquire
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="w-12 h-12 bg-dental-50 text-dental-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-dental-700 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(service.icon as React.ReactElement, { size: 24 })}
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-dental-700 transition-colors pr-6">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
