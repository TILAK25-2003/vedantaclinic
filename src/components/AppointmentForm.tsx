import React, { useState } from 'react';
import { Send, Clock } from 'lucide-react';

export const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: ''
  });

  const generateTimeSlots = () => {
    const slots = [];
    
    // Morning Slots (10:00 AM to 2:00 PM)
    slots.push({ label: "--- Morning Slots ---", value: "", disabled: true });
    const morningStart = 10;
    const morningEnd = 14; // 2 PM
    
    for (let hour = morningStart; hour < morningEnd; hour++) {
      const displayHour = hour > 12 ? hour - 12 : hour;
      const ampm = hour >= 12 ? 'PM' : 'AM';
      
      slots.push(`${displayHour}:00 ${ampm}`);
      slots.push(`${displayHour}:30 ${ampm}`);
    }
    slots.push("2:00 PM"); // Add last slot

    // Evening Slots (4:00 PM to 7:00 PM)
    slots.push({ label: "--- Evening Slots ---", value: "", disabled: true });
    const eveningStart = 16; // 4 PM
    const eveningEnd = 19; // 7 PM
    
    for (let hour = eveningStart; hour < eveningEnd; hour++) {
      const displayHour = hour - 12;
      const ampm = 'PM';
      
      slots.push(`${displayHour}:00 ${ampm}`);
      slots.push(`${displayHour}:30 ${ampm}`);
    }
    slots.push("7:00 PM"); // Add last slot

    return slots;
  };

  const timeSlots = generateTimeSlots();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const message = `Hello VEDANTA DENTAL CARE,%0A%0AI would like to book an appointment.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0APreferred Date: ${formData.date}%0ATime Slot: ${formData.time}`;
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/917000560853?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="appointment" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Side: Info */}
          <div className="md:w-2/5 bg-dental-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
             <div className="absolute top-0 right-0 w-40 h-40 bg-dental-700 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="relative z-10">
               <h3 className="text-3xl font-bold mb-6">Book Your Visit</h3>
               <p className="text-dental-100 mb-8">
                 Schedule your appointment today for a healthy and beautiful smile. We prioritize your comfort and time.
               </p>
               
               <div className="space-y-6">
                 <div>
                   <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                     <Clock className="w-5 h-5 text-dental-400" /> Clinic Timings
                   </h4>
                   <div className="pl-7 space-y-4 text-sm text-gray-300">
                     <div className="grid grid-cols-[80px_1fr] gap-2">
                       <span className="text-white font-medium">Mon - Sat:</span>
                       <div className="flex flex-col gap-1">
                         <span>10:00 AM – 2:00 PM</span>
                         <span>4:00 PM – 7:00 PM</span>
                       </div>
                     </div>
                     <div className="grid grid-cols-[80px_1fr] gap-2">
                       <span className="text-white font-medium">Sunday:</span>
                       <span>By Appointment Only</span>
                     </div>
                   </div>
                 </div>
               </div>
             </div>

             <div className="mt-12 relative z-10">
               <p className="text-sm text-dental-300">Need immediate assistance?</p>
               <p className="text-xl font-bold">+91 70005 60853</p>
             </div>
          </div>

          {/* Right Side: Form */}
          <div className="md:w-3/5 p-10 bg-white">
            <h3 className="text-2xl font-bold text-dental-900 mb-6">Appointment Details</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-dental-500 focus:ring-2 focus:ring-dental-100 outline-none transition-all"
                    placeholder="John Doe"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">WhatsApp Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-dental-500 focus:ring-2 focus:ring-dental-100 outline-none transition-all"
                    placeholder="+91 98765 43210"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-dental-500 focus:ring-2 focus:ring-dental-100 outline-none transition-all"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Preferred Time</label>
                  <select
                    name="time"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-dental-500 focus:ring-2 focus:ring-dental-100 outline-none transition-all bg-white"
                    onChange={handleChange}
                    defaultValue=""
                  >
                    <option value="" disabled>Select a time slot</option>
                    {timeSlots.map((slot, index) => (
                      typeof slot === 'string' ? (
                        <option key={index} value={slot}>{slot}</option>
                      ) : (
                        <option key={index} value={slot.value} disabled={slot.disabled} className="font-bold bg-gray-100 text-gray-500">
                          {slot.label}
                        </option>
                      )
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-dental-600 hover:bg-dental-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-dental-600/30 transition-all flex items-center justify-center gap-2 mt-4"
              >
                <Send className="w-5 h-5" />
                Confirm Booking on WhatsApp
              </button>
              
              <p className="text-xs text-center text-gray-400 mt-4">
                You will be redirected to WhatsApp to send these details directly to the clinic.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
