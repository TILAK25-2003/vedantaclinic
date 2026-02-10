import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <img 
                 src="https://images.dualite.app/4febe671-55e3-4707-99d4-d23cf5e031b9/WhatsApp_Image_2026-02-10_at_9.14.54_PM-50e7dcf4-63e6-4e34-ae5b-01a5db98460e.webp" 
                 alt="Vedanta Dental Care Logo" 
                 className="h-12 w-auto object-contain"
               />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Providing advanced, pain-free dental care in Bihar. 
              Led by Dr. B. Chaudhary, dedicated to bringing back your confident smile.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/vedanta_dentalcare?igsh=bDM2aXo1NG8wcDVr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-dental-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/share/1DRKR7QG6g/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-dental-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#hero" className="hover:text-dental-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-dental-500 transition-colors">About Doctor</a></li>
              <li><a href="#services" className="hover:text-dental-500 transition-colors">Treatments</a></li>
              <li><a href="#reviews" className="hover:text-dental-500 transition-colors">Patient Reviews</a></li>
              <li><a href="#appointment" className="hover:text-dental-500 transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-dental-500 shrink-0 mt-0.5" />
                <span>50 m inside Yadav nagar gate, Bhagwanpur, Muzaffarpur, Bihar-842001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-dental-500 shrink-0" />
                <span>+91 70005 60853</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-dental-500 shrink-0" />
                <a href="mailto:raghav.chaudharybds@gmail.com" className="hover:text-white transition-colors">
                  raghav.chaudharybds@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Map Button */}
          <div className="h-48 rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/2275px-Google_Maps_Logo_2020.svg.png')] bg-center bg-no-repeat bg-contain"></div>
            <a 
              href="https://share.google/Yze2ITOIYuxK6kF0F" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-blue-600/30 flex items-center gap-2 z-10"
            >
              <MapPin className="w-5 h-5" />
              View on Google Maps
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Vedanta Dental Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
