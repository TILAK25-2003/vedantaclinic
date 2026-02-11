import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { AppointmentForm } from './components/AppointmentForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SEO } from './components/SEO';
import { SchemaJSONLD } from './components/SchemaJSONLD';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <SchemaJSONLD />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <AppointmentForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
