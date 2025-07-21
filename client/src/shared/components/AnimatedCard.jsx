import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({
  children,
  className = '',
  glassEffect = false,
  hasGlassEffect = false, // Support both prop names for backward compatibility
  whileHover = { y: -5, scale: 1.02 },
  whileTap = { scale: 0.98 },
  variants,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.6, ease: 'easeOut' },
  onClick,
  gradient,
  ...props
}) => {
  const baseClasses = 'animated-card';
  const shouldShowGlass = glassEffect || hasGlassEffect;
  const glassClasses = shouldShowGlass ? 'glass-effect' : '';
  const gradientClasses = gradient ? `gradient-${gradient}` : '';
  
  const classes = `${baseClasses} ${glassClasses} ${gradientClasses} ${className}`.trim();

  const defaultVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Filter out custom props that shouldn't be passed to DOM
  const {
    glassEffect: _glassEffect,
    hasGlassEffect: _hasGlassEffect,
    variants: _variants,
    gradient: _gradient,
    ...domProps
  } = props;

  return (
    <motion.div
      className={classes}
      variants={variants || defaultVariants}
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
      whileTap={whileTap}
      onClick={onClick}
      {...domProps}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
