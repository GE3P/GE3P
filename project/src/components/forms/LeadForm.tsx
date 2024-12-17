import React from 'react';

export default function LeadForm() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
      <h3 className="text-2xl font-semibold mb-6 text-gray-900">
        Votre analyse personnalisée gratuite
      </h3>
      <div className="text-center">
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSe162v8OToU74iw9QLNobEE2PoN-wVxzUTCQ922scRRjBlVrg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-axa-blue text-white px-8 py-4 rounded-xl hover:bg-opacity-90 transition-colors text-lg font-medium"
        >
          Remplir le formulaire
        </a>
        <p className="text-xs text-gray-500 mt-4">
          Vos données sont traitées de manière confidentielle conformément à la LPD.
        </p>
      </div>
    </div>
  );
}