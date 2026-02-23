import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  className = '',
  icon,
  fullWidth = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-accent';
  
  const variantClasses = {
    primary: 'bg-purple-accent hover:bg-purple-light text-white shadow-purple-glow hover:shadow-purple-glow-lg',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700',
    outline: 'border border-purple-accent text-purple-accent hover:bg-purple-900/30',
  };

  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  const buttonContent = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.a
        {...motionProps}
        href={href}
        className={combinedClasses}
        onClick={onClick}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type="button"
      className={combinedClasses}
      onClick={onClick}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;