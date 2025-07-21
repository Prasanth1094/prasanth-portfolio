import React from 'react';
import { motion } from 'framer-motion';

const AnimatedContainer = ({
  children,
  className = '',
  variants,
  initial = 'hidden',
  animate = 'visible',
  exit,
  whileHover,
  whileTap,
  whileInView,
  layout = false,
  as = 'div',
  ...props
}) => {
  const MotionComponent = motion[as];

  const defaultVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <MotionComponent
      className={className}
      variants={variants || defaultVariants}
      initial={initial}
      animate={animate}
      exit={exit}
      whileHover={whileHover}
      whileTap={whileTap}
      whileInView={whileInView}
      layout={layout}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedContainer;
