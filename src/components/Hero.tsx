import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2068" 
          alt="Modern Dental Clinic Interior" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dental-900/95 via-dental-900/80 to-dental-900/30" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-6">
              Welcome to Vedanta Dental Care
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Advanced & <br />
              <span className="text-dental-400">Pain-Free</span> Dental Care <br />
              in Bihar
            </h1>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 text-gray-200">
              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-dental-400">
                  <img 
                    src="https://images.dualite.app/4febe671-55e3-4707-99d4-d23cf5e031b9/WhatsApp_Image_2026-02-10_at_9.05.40_PM-a954abd5-3552-4a32-a911-72483d5f4ba4.webp" 
                    alt="Dr. B. Chaudhary" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-white">Dr. B. Chaudhary</p>
                  <p className="text-sm text-dental-200">BDS (Dental Surgeon) • 7+ Years Exp.</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/20"></div>
              <p className="max-w-md text-sm md:text-base">
                Specialized Root Canal Consultant & Cosmetic Dentistry Expert. 
                Ex-Resident at Jawaharlal Nehru Hospital, Bhilai.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#appointment"
                className="px-8 py-4 bg-dental-600 hover:bg-dental-700 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-dental-600/30 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </a>
              <a 
                href="https://wa.me/917000560853"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white hover:bg-gray-50 text-dental-900 rounded-lg font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-green-600" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
