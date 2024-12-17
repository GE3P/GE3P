import React from 'react';
import { Wallet, Users, Baby, Scale, Clock, Coins, Building, ArrowRight } from 'lucide-react';

export default function Pilier3bPage() {
  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">3ème Pilier B</h1>
        
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="lead text-xl text-gray-600">
            Le pilier 3b est une forme d'épargne libre qui offre une grande flexibilité dans la constitution et l'utilisation du capital. À Genève, il bénéficie d'avantages fiscaux spécifiques qui le rendent particulièrement attractif.
          </p>
        </div>

        {/* Montants déductibles */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold mb-6">Montants déductibles à Genève</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <Users className="h-6 w-6 text-axa-blue mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Personne seule</h3>
                  <p className="text-gray-600">2'232.- / année</p>
                  <p className="text-sm text-gray-500">soit 186.- / mois</p>
                </div>
              </div>
              <div className="flex items-start">
                <Wallet className="h-6 w-6 text-axa-blue mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Couple marié</h3>
                  <p className="text-gray-600">3'348.- / année</p>
                  <p className="text-sm text-gray-500">soit 372.- / mois</p>
                </div>
              </div>
              <div className="flex items-start">
                <Baby className="h-6 w-6 text-axa-blue mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Par enfant</h3>
                  <p className="text-gray-600">913.- / année</p>
                </div>
              </div>
              <div className="flex items-start">
                <Scale className="h-6 w-6 text-axa-blue mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Couple divorcé</h3>
                  <p className="text-gray-600">456.50.- / année par enfant</p>
                  <p className="text-sm text-gray-500">(demi-charge)</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Avantages clés</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-axa-blue mr-2" />
                  <span>Flexibilité totale des versements</span>
                </li>
                <li className="flex items-center">
                  <Coins className="h-5 w-5 text-axa-blue mr-2" />
                  <span>Libre disposition du capital</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-axa-blue mr-2" />
                  <span>Choix des bénéficiaires</span>
                </li>
                <li className="flex items-center">
                  <Building className="h-5 w-5 text-axa-blue mr-2" />
                  <span>Solutions personnalisées</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Options d'investissement */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold mb-6">Options d'investissement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Compte d'épargne traditionnel",
                description: "Solution sécurisée avec un taux d'intérêt garanti"
              },
              {
                title: "Assurance-vie",
                description: "Protection financière combinée à l'épargne"
              },
              {
                title: "Fonds de placement",
                description: "Potentiel de rendement plus élevé avec une gestion professionnelle"
              },
              {
                title: "Solutions mixtes",
                description: "Combinaison personnalisée selon vos objectifs"
              }
            ].map((option, index) => (
              <div key={index} className="flex items-start">
                <ArrowRight className="h-5 w-5 text-axa-blue mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">{option.title}</h3>
                  <p className="text-gray-600">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Optimisez votre fiscalité avec le 3ème pilier B</h2>
          <p className="text-gray-600 mb-6">
            Profitez des avantages fiscaux spécifiques à Genève et construisez votre épargne en toute liberté.
          </p>
          <button className="bg-axa-blue text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
            Demander un conseil personnalisé
          </button>
        </div>
      </div>
    </main>
  );
}