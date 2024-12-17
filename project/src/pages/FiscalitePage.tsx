import React from 'react';
import { FileText, TrendingUp, Calculator, Info } from 'lucide-react';

export default function FiscalitePage() {
  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Fiscalité GE</h1>
        
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="lead text-xl text-gray-600">
            Découvrez les spécificités fiscales genevoises en matière de prévoyance et optimisez votre situation fiscale.
          </p>
        </div>

        {/* Traitement fiscal des piliers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-axa-blue mr-3" />
              <h2 className="text-2xl font-bold">3ème pilier A</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Il est exonéré d'impôt pendant toute la durée, sauf uniquement au moment du retrait - IPC
              </p>
              <p>
                Impôt unique et distinct - Article 38 LIFD
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <Calculator className="h-6 w-6 text-axa-blue mr-3" />
              <h2 className="text-2xl font-bold">3ème pilier B</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Il est exonéré d'impôt au moment du retrait, cependant il est soumit chaque année à l'impôt sur la fortune, uniquement sur les valeurs de rachat, très faible : 1,75 ‰ sur le canton de Genève.
              </p>
            </div>
          </div>
        </div>

        {/* Actualités Rachats */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-12">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-6 w-6 text-axa-blue mr-3" />
            <h2 className="text-2xl font-bold">Rachats dans le pilier 3a</h2>
          </div>
          
          <div className="space-y-6 text-gray-600">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-axa-blue mr-3 mt-1 flex-shrink-0" />
                <p>
                  Les personnes exerçant une activité lucrative en Suisse qui n'ont pas effectué de versements dans le pilier 3a pendant certaines années peuvent rattraper ces versements. Ces rachats sont limités à 10 ans au plus et peuvent être déduits fiscalement.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900">Conditions pour les rachats</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Avoir manqué des versements dans le pilier 3a pendant certaines années</li>
              <li>Possibilité de rattrapage limitée aux 10 dernières années</li>
              <li>Les rachats sont déductibles fiscalement</li>
              <li>Nécessité de prouver la capacité financière pour le rachat</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900">Avantages fiscaux</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Déduction fiscale immédiate du montant du rachat</li>
              <li>Réduction de la charge fiscale pour l'année du rachat</li>
              <li>Optimisation de la prévoyance à long terme</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Optimisez votre situation fiscale</h2>
          <p className="text-gray-600 mb-6">
            Découvrez comment maximiser vos avantages fiscaux grâce à une stratégie de prévoyance adaptée.
          </p>
          <button className="bg-axa-blue text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
            Demander un conseil personnalisé
          </button>
        </div>
      </div>
    </main>
  );
}