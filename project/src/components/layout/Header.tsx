import React from 'react';
import { Menu } from 'lucide-react';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="bg-white backdrop-blur-md fixed w-full top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900 tracking-tighter">
              GE<span className="text-axa-blue">3P</span>
            </span>
          </div>
          <Navigation />
          <div className="md:hidden flex items-center">
            <button className="text-gray-900">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}