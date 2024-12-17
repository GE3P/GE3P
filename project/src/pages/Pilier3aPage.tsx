import React from 'react';
import { ArrowRight, Coins, Shield, TrendingUp, Building, Percent } from 'lucide-react';
import { MONTANTS, ANNEE, TEXTES } from '../constants/prevoyance';

export default function Pilier3aPage() {
  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">3ème Pilier A</h1>
        
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="lead text-xl text-gray-600">
            Le pilier 3a est une forme de prévoyance individuelle liée qui vous permet de compléter vos prestations des 1er et 2ème piliers tout en bénéficiant d'avantages fiscaux significatifs.
          </p>
          <p className="text-gray-600">
            {TEXTES.PRIME_MINIMUM}
          </p>
        </div>

        {/* Avantages principaux */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <Shield className="h-12 w-12 text-axa-blue mb-4" />
            <h3 className="text-xl font-semibold mb-3">Protection garantie</h3>
            <p className="text-gray-600">Protection optimale en cas d'invalidité ou de décès, avec des prestations garanties pour vous et vos proches.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <Coins className="h-12 w-12 text-axa-blue mb-4" />
            <h3 className="text-xl font-semibold mb-3">Économies d'impôts</h3>
            <p className="text-gray-600">Déductions fiscales attractives pouvant aller jusqu'à CHF {MONTANTS.SALARIE} par année ({ANNEE}) pour les salariés.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <TrendingUp className="h-12 w-12 text-axa-blue mb-4" />
            <h3 className="text-xl font-semibold mb-3">Rendement optimisé</h3>
            <p className="text-gray-600">Potentiel de rendement attractif grâce à des solutions d'investissement diversifiées et professionnelles.</p>
          </div>
        </div>

        {/* Informations détaillées */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Montants déductibles 3ème Pilier ({ANNEE})</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Percent className="h-6 w-6 text-axa-blue mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong className="block">Avec une affiliation au 2ème pilier</strong>
                  <span className="text-gray-600">CHF {MONTANTS.SALARIE} par année</span>
                </div>
              </li>
              <li className="flex items-start">
                <Building className="h-6 w-6 text-axa-blue mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong className="block">Indépendant sans affiliation au 2ème pilier</strong>
                  <span className="text-gray-600">20% du revenu net, maximum CHF {MONTANTS.INDEPENDANT} par année</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Utilisation possible du capital</h2>
            <ul className="space-y-4">
              {[
                "Financement de votre retraite",
                "Achat d'un logement principal",
                "Remboursement d'une hypothèque (financement indirect de votre résidence principale)",
                "Démarrage d'une activité indépendante",
                "Départ définitif de la Suisse"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-axa-blue mr-3" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 p-8 rounded-xl text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Optimisez votre prévoyance dès maintenant</h2>
          <p className="text-gray-600 mb-6">
            Découvrez comment le 3ème pilier A peut vous aider à atteindre vos objectifs financiers tout en réduisant vos impôts.
          </p>
          <button className="bg-axa-blue text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
            Demander un conseil personnalisé
          </button>
        </div>
      </div>
    </main>
  );
}