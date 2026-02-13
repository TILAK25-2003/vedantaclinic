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
import { SideNavigation } from './components/ui/SideNavigation';

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      <SEO />
      <SchemaJSONLD />
      <Navbar />
      <SideNavigation />
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
