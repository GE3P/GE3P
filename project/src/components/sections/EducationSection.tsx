import React from 'react';
import { EducationCard } from './EducationCard';
import { pilierAData, pilierBData } from '../../data/education-data';

export default function EducationSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Comprendre le 3ème pilier à Genève
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <EducationCard 
            title="3ème Pilier A"
            items={pilierAData}
          />
          <EducationCard 
            title="3ème Pilier B"
            items={pilierBData}
          />
        </div>
      </div>
    </section>
  );
}