import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Vedanta Dental Care | Best Dentist in Muzaffarpur, Bihar",
  description = "Vedanta Dental Care offers advanced, pain-free dental treatments in Muzaffarpur. Led by Dr. B. Chaudhary, Senior Root Canal Consultant. Book your appointment today!",
  keywords = "Dental clinic in Muzaffarpur, Best dentist in Muzaffarpur, Root canal specialist Bihar, Cosmetic dentistry Muzaffarpur, Teeth whitening Bihar, Painless dentistry",
  canonicalUrl = "https://vedantalclinicofficiall.netlify.app/",
  ogImage = "https://ibb.co/67X3xfSV",
  ogType = "website",
}) => {
  const siteTitle = title;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="IN-BR" />
      <meta name="geo.placename" content="Muzaffarpur" />
      <meta name="geo.position" content="26.1209;85.3647" />
      <meta name="ICBM" content="26.1209, 85.3647" />
    </Helmet>
  );
};
