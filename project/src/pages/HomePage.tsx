import React from 'react';
import MetaTags from '../components/seo/MetaTags';
import StructuredData from '../components/seo/StructuredData';
import Hero from '../components/home/Hero';
import EducationSection from '../components/sections/EducationSection';
import GraphSection from '../components/sections/GraphSection';
import LeadForm from '../components/forms/LeadForm';
import FAQSection from '../components/sections/FAQSection';

export default function HomePage() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GE3P',
    description: 'Expert en prévoyance à Genève - Solutions sur mesure pour votre 3ème pilier',
    url: 'https://ge3p.ch',
    logo: 'https://ge3p.ch/images/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Genève',
      addressRegion: 'GE',
      postalCode: '1200',
      addressCountry: 'CH'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+41-XX-XXX-XX-XX',
      contactType: 'customer service',
      areaServed: 'CH',
      availableLanguage: ['French']
    },
    sameAs: [
      'https://www.linkedin.com/company/ge3p',
      'https://www.facebook.com/ge3p'
    ]
  };

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{
      '@type': 'ListItem',
      position: 1,
      name: 'Accueil',
      item: 'https://ge3p.ch'
    }]
  };

  return (
    <>
      <MetaTags 
        title="Expert en prévoyance à Genève | 3ème pilier A et B"
        description="Optimisez votre prévoyance et vos impôts à Genève. Solutions personnalisées pour votre 3ème pilier A et B. Conseils d'experts et accompagnement sur mesure. Découvrez nos solutions d'épargne fiscalement avantageuses."
        canonicalUrl="https://ge3p.ch"
        keywords="3ème pilier Genève, prévoyance Suisse, pilier 3a Genève, pilier 3b Genève, fiscalité prévoyance Genève, optimisation fiscale Genève, expert prévoyance Genève, épargne fiscale Genève, déductions fiscales Genève, conseil prévoyance Genève"
      />
      <StructuredData type="Organization" data={organizationData} />
      <StructuredData type="BreadcrumbList" data={breadcrumbData} />
      <main>
        <Hero />
        <EducationSection />
        <GraphSection />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <LeadForm />
        </div>
        <FAQSection />
      </main>
    </>
  );
}