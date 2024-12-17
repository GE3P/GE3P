import { useState } from 'react';
import { LeadFormData } from '../types/lead';
import { submitLead } from '../services/leadService';

interface FormState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
  success: boolean;
}

export function useLeadForm() {
  const [formData, setFormData] = useState<LeadFormData>({
    nom: '',
    email: '',
    telephone: '',
    canton: 'GE',
    statut: '',
    message: '',
    source: window.location.pathname,
    utm_source: new URLSearchParams(window.location.search).get('utm_source') || undefined,
    utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || undefined,
    utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || undefined,
  });

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
    success: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormState({
      ...formState,
      isSubmitting: true,
      error: null,
    });

    try {
      const result = await submitLead(formData);
      
      setFormState({
        isSubmitting: false,
        isSubmitted: true,
        error: result.success ? null : result.message,
        success: result.success,
      });

      if (result.success) {
        // Réinitialiser le formulaire en cas de succès
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          canton: 'GE',
          statut: '',
          message: '',
          source: window.location.pathname,
        });
      }
    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSubmitted: true,
        error: 'Une erreur est survenue. Veuillez réessayer.',
        success: false,
      });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return {
    formData,
    formState,
    handleSubmit,
    handleInputChange,
  };
}