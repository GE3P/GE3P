import React from 'react';

interface FormTextareaProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function FormTextarea({ id, label, value, onChange }: FormTextareaProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id={id}
        rows={4}
        className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-axa-blue focus:ring-1 focus:ring-axa-blue"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}