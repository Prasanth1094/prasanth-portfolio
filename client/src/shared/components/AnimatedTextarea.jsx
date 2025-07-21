import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTextarea = ({
  placeholder,
  value,
  onChange,
  required = false,
  rows = 4,
  className = '',
  variants,
  whileFocus = { scale: 1.02 },
  transition = { type: 'spring', stiffness: 300, damping: 20 },
  index = 0,
  ...props
}) => {
  const baseClasses = 'animated-textarea';
  const classes = `${baseClasses} ${className}`.trim();

  const defaultVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        type: 'spring',
        stiffness: 300,
        damping: 25,
      },
    },
  };

  return (
    <motion.textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      rows={rows}
      className={classes}
      variants={variants || defaultVariants}
      whileFocus={whileFocus}
      transition={transition}
      {...props}
    />
  );
};

export default AnimatedTextarea;
