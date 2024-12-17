import React from 'react';
import { Circle } from 'lucide-react';

interface EducationCardProps {
  title: string;
  items: string[];
}

export function EducationCard({ title, items }: EducationCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
      <h3 className="text-xl font-semibold text-axa-blue mb-6">
        {title}
      </h3>
      <ul className="space-y-4 text-gray-600">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <Circle className="h-2 w-2 text-axa-blue mr-2 fill-current" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}