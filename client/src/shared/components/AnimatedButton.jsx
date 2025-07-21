import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({
  children,
  className = '',
  onClick,
  href,
  type = 'button',
  disabled = false,
  variant = 'primary',
  size = 'medium',
  icon,
  whileHover = { scale: 1.05 },
  whileTap = { scale: 0.95 },
  ariaLabel,
  target,
  rel,
  download,
  ...props
}) => {
  const baseClasses = 'animated-button';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
    icon: 'btn-icon'
  };
  
  const sizeClasses = {
    small: 'btn-small',
    medium: 'btn-medium',
    large: 'btn-large'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {icon && <span className="button-icon">{icon}</span>}
      {children && <span className="button-text">{children}</span>}
    </>
  );

  const motionProps = {
    className: classes,
    whileHover: disabled ? {} : whileHover,
    whileTap: disabled ? {} : whileTap,
    'aria-label': ariaLabel,
    ...props
  };

  if (href) {
    return (
      <motion.a
        {...motionProps}
        href={href}
        target={target}
        rel={rel}
        download={download}
        onClick={onClick}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </motion.button>
  );
};

export default AnimatedButton;
