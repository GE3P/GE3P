import React from 'react';
import LeadForm from '../components/forms/LeadForm';

export default function ContactPage() {
  return (
    <main className="pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact</h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Prenez contact avec nous pour une analyse personnalisée de votre situation.
        </p>
        <LeadForm />
      </div>
    </main>
  );
}