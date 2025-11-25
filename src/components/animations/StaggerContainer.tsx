/**
 * StaggerContainer - Container pour animations en cascade
 * Les enfants apparaissent un par un avec un délai
 */

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { staggerContainer, mobileViewport } from './motionVariants';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  staggerDelay?: number;
}

const StaggerContainer = ({
  children,
  className = '',
  variants = staggerContainer,
  staggerDelay = 0.1,
}: StaggerContainerProps) => {
  const customVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={mobileViewport}
      variants={variants || customVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
