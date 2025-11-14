import { ChevronDown } from 'lucide-react';
import { FaqItemProps } from '../types';

/**
 * Composant FaqItem pour l'accordéon FAQ
 * Utilisé 6 fois dans FaqSection
 *
 * Features:
 * - Accordéon animé avec ChevronDown rotation
 * - Hover effect sur le bouton
 * - Border et shadow
 */
const FaqItem = ({ question, answer, isOpen, onToggle }: FaqItemProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <button
        onClick={onToggle}
        className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition"
      >
        <span className="font-semibold text-gray-900 text-lg">{question}</span>
        <ChevronDown
          className={`w-6 h-6 text-visio-violet transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-8 pb-6 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
