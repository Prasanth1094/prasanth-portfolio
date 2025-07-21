import React from 'react';
import { motion } from 'framer-motion';

const AnimatedIcon = ({
  Icon,
  className = '',
  size = 24,
  color = 'currentColor',
  variants,
  animate,
  initial = { scale: 0 },
  whileHover = { scale: 1.1, rotate: 5 },
  whileTap = { scale: 0.9 },
  transition = { type: 'spring', stiffness: 300, damping: 20 },
  ...props
}) => {
  const defaultVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition,
    },
  };

  return (
    <motion.div
      className={`animated-icon ${className}`}
      variants={variants || defaultVariants}
      initial={initial}
      animate={animate}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
      {...props}
    >
      <Icon size={size} color={color} />
    </motion.div>
  );
};

export default AnimatedIcon;
