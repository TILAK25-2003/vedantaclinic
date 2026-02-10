import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Stethoscope, Building2 } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

export const About = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "2500+", label: "Happy Patients" },
    { icon: <Award className="w-6 h-6" />, value: "7+", label: "Years Experience" },
    { icon: <Stethoscope className="w-6 h-6" />, value: "100%", label: "Pain-Free Care" },
    { icon: <Building2 className="w-6 h-6" />, value: "Ex-Res", label: "JNM Hospital" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <img 
                  src="https://images.dualite.app/4febe671-55e3-4707-99d4-d23cf5e031b9/WhatsApp_Image_2026-02-10_at_9.05.58_PM-0a234f2a-75fa-4430-9483-93054edb61bf.webp" 
                  alt="Dr. Chaudhary Treating Patient" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="bg-dental-50 p-6 rounded-2xl border border-dental-100">
                  <p className="text-dental-800 font-medium italic">
                    "My mission is to provide affordable, high-quality dental care with a gentle touch."
                  </p>
                  <p className="text-dental-600 font-bold mt-2">- Dr. B. Chaudhary</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-dental-800 p-6 rounded-2xl text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-2">Why Choose Us?</h3>
                  <ul className="space-y-2 text-sm text-dental-100">
                    <li>✓ Advanced Technology</li>
                    <li>✓ Sterilized Environment</li>
                    <li>✓ Personal Attention</li>
                  </ul>
                </div>
                <img 
                  src="https://images.dualite.app/4febe671-55e3-4707-99d4-d23cf5e031b9/WhatsApp_Image_2026-02-10_at_9.06.01_PM-cf55195d-1f3c-4974-8b14-2f7d428ea60e.webp" 
                  alt="Dental Procedure" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <SectionHeading 
              title="Meet Your Doctor" 
              subtitle="Dedicated to creating healthy, beautiful smiles."
              className="text-left"
            />
            
            <h3 className="text-2xl font-bold text-dental-900 mb-4">Dr. B. Chaudhary</h3>
            <p className="text-lg text-dental-700 font-medium mb-6">BDS (Dental Surgeon) | Root Canal Consultant</p>
            
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                Dr. B. Chaudhary is a highly skilled dental surgeon with over 7 years of clinical experience. 
                Formerly a Resident at the prestigious <strong className="text-dental-800">Jawaharlal Nehru Hospital, Bhilai</strong>, 
                he brings hospital-grade expertise to private practice.
              </p>
              <p>
                Specializing in Root Canal Treatments and Cosmetic Corrections, Dr. Chaudhary has successfully treated 
                over 2500 patients, earning a reputation for his gentle approach and precision.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 mx-auto bg-dental-100 text-dental-700 rounded-full flex items-center justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="font-bold text-xl text-dental-900">{stat.value}</div>
                  <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
