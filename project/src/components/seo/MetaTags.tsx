import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string;
  imageUrl?: string;
}

export default function MetaTags({ 
  title, 
  description, 
  canonicalUrl, 
  keywords,
  imageUrl = 'https://ge3p.ch/images/og-image.jpg'
}: MetaTagsProps) {
  const siteName = "GE3P - Expert en prévoyance à Genève";
  const fullTitle = `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Balises meta de base */}
      <html lang="fr-CH" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="fr_CH" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Géolocalisation */}
      <meta name="geo.region" content="CH-GE" />
      <meta name="geo.placename" content="Genève" />
      <meta name="geo.position" content="46.2044;6.1432" />
      <meta name="ICBM" content="46.2044, 6.1432" />
      
      {/* Autres balises importantes */}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="language" content="fr-CH" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="GE3P" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
    </Helmet>
  );
}