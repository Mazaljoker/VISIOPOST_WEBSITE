import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { stats, testimonial } from '../data/socialProof';
import { SocialProofSectionProps } from '../types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

/**
 * Section Social Proof - Stats et témoignage
 */
const SocialProofSection = ({ className = '' }: SocialProofSectionProps) => {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-white ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-visio-violet to-visio-rose bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-100"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-12 h-12 text-visio-violet/20 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
              "{testimonial.quote}"
            </blockquote>
            <div className="text-gray-900 font-semibold">{testimonial.author}</div>
            <div className="text-gray-500">{testimonial.company}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
