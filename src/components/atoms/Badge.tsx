import React from 'react';

interface BadgeProps {
  label: string;
  color?: 'blue' | 'green' | 'yellow' | 'gray' | 'gold' | 'purple';
  icon?: React.ReactNode;
  size?: 'sm' | 'md';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  label,
  color = 'blue',
  icon,
  size = 'md',
  className = '',
}) => {
  const colorClasses = {
    blue: 'bg-blue-900/30 text-blue-300 border-blue-700',
    green: 'bg-green-900/30 text-green-300 border-green-700',
    yellow: 'bg-yellow-900/30 text-yellow-300 border-yellow-700',
    gray: 'bg-gray-800 text-gray-300 border-gray-600',
    gold: 'bg-purple-900/30 text-purple-300 border-purple-700',
    purple: 'bg-purple-900/30 text-purple-300 border-purple-700',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border ${colorClasses[color]} ${sizeClasses[size]} font-medium ${className}`}
    >
      {icon && <span className="mr-1.5">{icon}</span>}
      {label}
    </span>
  );
};

export default Badge;