import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogTitle, 
  ogDescription, 
  ogImage, 
  ogType = 'website' 
}) => {
  const siteTitle = 'Ritual | Premium Wellness Bowls Chennai';
  const fullTitle = title ? `${title} | Ritual` : siteTitle;
  const defaultDescription = 'Premium Wellness Bowls & Functional Nutrition delivered fresh in Chennai. Precision macros, clean label, artisanal ingredients.';
  const metaDescription = description || defaultDescription;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || metaDescription} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:type" content={ogType} />

      {/* Twitter */}
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || metaDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
};

export default SEO;
