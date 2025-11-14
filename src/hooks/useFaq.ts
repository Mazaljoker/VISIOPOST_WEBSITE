import { useState } from 'react';

/**
 * Hook custom pour gérer l'état d'ouverture des FAQs
 * Utilisé dans FaqSection
 *
 * @returns {openIndex, toggle}
 */
export const useFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return { openIndex, toggle };
};
