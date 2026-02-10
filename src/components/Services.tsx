import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Smile, Drill, Syringe, 
  Crown, Scissors, Activity, HeartPulse,
  Gem, ShieldCheck, Zap, PenTool
} from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

const services = [
  { icon: <Sparkles />, title: "Teeth Cleaning", desc: "Professional scaling & polishing" },
  { icon: <Zap />, title: "Teeth Whitening", desc: "Brighten your smile instantly" },
  { icon: <Smile />, title: "Smile Designing", desc: "Complete aesthetic makeover", popular: true },
  { icon: <Drill />, title: "Root Canal (RCT)", desc: "Pain-free single sitting options", popular: true },
  { icon: <Gem />, title: "Aesthetic Fillings", desc: "Tooth-colored composite fillings" },
  { icon: <Crown />, title: "Dental Implants", desc: "Permanent tooth replacement", popular: true },
  { icon: <Activity />, title: "Dental Bridges", desc: "Fixed tooth replacement solutions" },
  { icon: <ShieldCheck />, title: "Dentures", desc: "Complete & partial options" },
  { icon: <Scissors />, title: "Extractions", desc: "Simple & surgical removal" },
  { icon: <Syringe />, title: "Gum Treatments", desc: "Periodontal surgeries & care" },
  { icon: <PenTool />, title: "Orthodontics", desc: "Braces & aligners for alignment" },
  { icon: <HeartPulse />, title: "Wisdom Tooth", desc: "Expert surgical removal" },
];

export const Services = () => {
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
              className={`relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-hidden`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-dental-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  Popular
                </div>
              )}
              
              <div className="w-12 h-12 bg-dental-50 text-dental-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-dental-700 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(service.icon as React.ReactElement, { size: 24 })}
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-dental-700 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
