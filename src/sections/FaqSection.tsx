import { faqs } from '../data/faqs';
import FaqItem from '../components/FaqItem';
import { useFaq } from '../hooks/useFaq';
import { FaqSectionProps } from '../types';

/**
 * Section FAQ - Questions fréquentes avec accordéon
 * Lignes originales : 592-648 (~58 lignes)
 */
const FaqSection = ({ className = '' }: FaqSectionProps) => {
  const { openIndex, toggle } = useFaq();

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
