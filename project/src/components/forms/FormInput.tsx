import React from 'react';

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export function FormInput({ id, label, type, value, onChange, required }: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-axa-blue focus:ring-1 focus:ring-axa-blue"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}