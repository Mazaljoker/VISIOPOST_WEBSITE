import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Video, Hash, Heart, MessageCircle, Share2 } from 'lucide-react';

const icons = [
  { Icon: Facebook, x: '10%', y: '20%', delay: 0 },
  { Icon: Instagram, x: '85%', y: '15%', delay: 0.5 },
  { Icon: Linkedin, x: '75%', y: '70%', delay: 1 },
  { Icon: Video, x: '15%', y: '75%', delay: 1.5 },
  { Icon: Hash, x: '90%', y: '45%', delay: 2 },
  { Icon: Heart, x: '5%', y: '50%', delay: 2.5 },
  { Icon: MessageCircle, x: '80%', y: '85%', delay: 3 },
  { Icon: Share2, x: '20%', y: '90%', delay: 3.5 },
];

/**
 * Floating Icons Background
 * Rebrandé pour nReach Studio
 */
const FloatingIcons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {icons.map(({ Icon, x, y, delay }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [0.8, 1, 0.8],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <Icon className="w-8 h-8 text-nreach-electric/20 dark:text-nreach-electric/10" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
