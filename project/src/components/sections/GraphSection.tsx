import React from 'react';

export default function GraphSection() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
          Même les versements modestes sont avantageux dans le 3ème Pilier
        </h3>
        <div className="relative">
          <img 
            src="https://i.imgur.com/SvVpD3W.png"
            alt="Graphique des versements dans le 3ème pilier"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}