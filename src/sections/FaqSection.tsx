import { motion } from 'framer-motion';
import { faqs } from '../data/faqs';
import FaqItem from '../components/FaqItem';

const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

/**
 * Section FAQ - Charte Graphique nSignal 2025
 */
const FaqSection = () => {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-nsignal-light dark:bg-nsignal-dark-500">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={titleVariants}
        >
          <h2 className="text-4xl font-bold text-nsignal-dark dark:text-nsignal-light mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-nsignal-light-700 dark:text-nsignal-light-600">
            Tout ce que vous devez savoir sur nSignal
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
