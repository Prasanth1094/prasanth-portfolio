import React from 'react';
import { motion } from 'framer-motion';

const AnimatedNavLink = ({
  children,
  href,
  className = '',
  isActive = false,
  onClick,
  variants,
  whileHover = { y: -2 },
  whileTap = { scale: 0.95 },
  index = 0,
  ...props
}) => {
  const baseClasses = 'nav-link';
  const activeClasses = isActive ? 'active' : '';
  const classes = `${baseClasses} ${activeClasses} ${className}`.trim();

  const defaultVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1 },
    },
  };

  return (
    <motion.a
      href={href}
      className={classes}
      variants={variants || defaultVariants}
      whileHover={whileHover}
      whileTap={whileTap}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.a>
  );
};

export default AnimatedNavLink;
