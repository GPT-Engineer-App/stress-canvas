import { motion } from 'framer-motion';
import { Cat } from 'lucide-react';

const FloatingCat = () => {
  return (
    <motion.div
      className="absolute"
      style={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Cat size={48} color="#8B4513" />
    </motion.div>
  );
};

export default FloatingCat;
