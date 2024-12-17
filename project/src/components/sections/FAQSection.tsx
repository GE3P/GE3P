import React from 'react';
import FAQItem from './FAQItem';
import { TEXTES } from '../../constants/prevoyance';

const faqData = [
  {
    question: "J'ai déjà un troisième pilier, puis-je en avoir plusieurs ?",
    answer: "Oui, il est tout à fait possible d'avoir plusieurs 3ème piliers par personnes, toutefois, il n'est pas possible de verser plus que le plafond de déduction fiscale chaque année sur vos 3èmepiliers liés (3A). Cependant il n'y a aucun plafond pour le troisième pilier libre (3b)."
  },
  {
    question: "Combien puis-je mettre sur mon 3ème pilier ? (Min, Max.)",
    answer: TEXTES.PRIME_MINIMUM
  },
  {
    question: "Qu'est-ce que le 3ème pilier A ?",
    answer: "Le Pilier 3a est une prévoyance vieillesse privée. Il s'adresse à toutes les personnes actives de plus de 18 ans dont le revenu est soumis à l'AVS. Grâce à vos versements, vous économisez chaque année des impôts. Vous constituez ainsi un capital pour votre retraite."
  },
  {
    question: "Qu'est-ce que le 3ème pilier B ?",
    answer: "Comme le Pilier 3a, le Pilier 3b fait partie de la prévoyance privée. Contrairement au Pilier 3a, le Pilier 3b n'est pas lié à la retraite, mais peut également être utilisé pour des objectifs d'épargne à moyen ou long terme. C'est pourquoi on l'appelle aussi prévoyance libre ou non liée."
  }
];

export default function FAQSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          On répond à vos questions
        </h2>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}