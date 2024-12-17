import { LeadFormData } from '../types/lead';

const API_URL = import.meta.env.VITE_API_URL || 'https://api.ge3p.ch';

export async function submitLead(data: LeadFormData): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(`${API_URL}/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de l\'envoi du formulaire');
    }

    return {
      success: true,
      message: 'Votre demande a été envoyée avec succès. Nous vous contacterons dans les plus brefs délais.',
    };
  } catch (error) {
    console.error('Erreur:', error);
    return {
      success: false,
      message: 'Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.',
    };
  }
}