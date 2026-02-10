import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <div className="w-10 h-10 bg-dental-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                V
              </div>
              <div className="flex flex-col text-white">
                <span className="font-bold text-lg leading-none">VEDANTA</span>
                <span className="text-xs tracking-wider font-medium">DENTAL CARE</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Providing advanced, pain-free dental care in Raipur. 
              Led by Dr. B. Chaudhary, dedicated to bringing back your confident smile.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-dental-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-dental-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-dental-500 transition-colors"><Twitter size={20} /></a>
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
                <span>Raipur, Chhattisgarh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-dental-500 shrink-0" />
                <span>+91 99999 99999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-dental-500 shrink-0" />
                <span>contact@vedantadental.com</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="h-48 rounded-xl overflow-hidden bg-gray-800 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.549083148077!2d81.62964131493637!3d21.25138448587817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda23be28229%3A0x163ee120449e4547!2sRaipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1625561234567!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Clinic Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
            <a 
              href="https://share.google/Yze2ITOIYuxK6kF0F" 
              target="_blank" 
              rel="noreferrer"
              className="absolute bottom-2 right-2 bg-white text-black text-xs px-2 py-1 rounded shadow-md font-medium hover:bg-gray-100"
            >
              Get Directions
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
