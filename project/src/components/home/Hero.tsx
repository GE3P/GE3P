import React from 'react';
import { Shield, TrendingUp, PiggyBank } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white text-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              <span className="block">Soyons CASH,</span>
              <span className="block text-axa-blue">Parlons 3P</span>
            </h1>
            <p className="mt-6 text-2xl font-semibold tracking-tight text-gray-800 leading-tight">
              La manière la plus <span className="text-axa-blue">intelligente</span> d'investir, économiser, protéger et épargner
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-axa-blue" />
                <span className="ml-2 text-gray-600">Protection optimale</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-6 w-6 text-axa-blue" />
                <span className="ml-2 text-gray-600">Rendement attractif</span>
              </div>
              <div className="flex items-center">
                <PiggyBank className="h-6 w-6 text-axa-blue" />
                <span className="ml-2 text-gray-600">Avantages fiscaux</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://i.imgur.com/qGC0LG4.jpg"
              alt="Statistiques de prévoyance en Suisse"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}