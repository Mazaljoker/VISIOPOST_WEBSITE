/**
 * AnimatedSection - Wrapper pour animations au scroll
 * Optimisé mobile avec détection de viewport
 */

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeUp, mobileViewport } from './motionVariants';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

const AnimatedSection = ({
  children,
  className = '',
  variants = fadeUp,
  delay = 0,
}: AnimatedSectionProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={mobileViewport}
      variants={variants}
      className={className}
      style={{ willChange: 'transform, opacity' }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
