import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SchemaJSONLD = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness"],
    "name": "Vedanta Dental Care",
    "image": "https://images.dualite.app/4febe671-55e3-4707-99d4-d23cf5e031b9/WhatsApp_Image_2026-02-10_at_9.14.54_PM-50e7dcf4-63e6-4e34-ae5b-01a5db98460e.webp",
    "url": "https://vedantalclinicofficiall.netlify.app/",
    "telephone": "+917000560853",
    "email": "raghav.chaudharybds@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "50 m inside Yadav nagar gate, Bhagwanpur",
      "addressLocality": "Muzaffarpur",
      "addressRegion": "Bihar",
      "postalCode": "842001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.1209,
      "longitude": 85.3647
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "14:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "16:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/vedanta_dentalcare?igsh=bDM2aXo1NG8wcDVr",
      "https://www.facebook.com/share/1DRKR7QG6g/"
    ],
    "founder": {
      "@type": "Person",
      "name": "Dr. B. Chaudhary",
      "jobTitle": "Senior Root Canal Consultant"
    },
    "medicalSpecialty": ["Dentistry", "Endodontics", "Cosmetic Dentistry"]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};
