import React from 'react';
import styles from './Button.module.css';
import { Loader2 } from 'lucide-react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  isLoading = false,
  icon: Icon,
  className = '',
  ...props 
}) => {
  const btnClass = `
    ${styles.button} 
    ${styles[variant]} 
    ${styles[size]} 
    ${fullWidth ? styles.fullWidth : ''}
    ${isLoading ? styles.loading : ''}
    ${className}
  `.trim();

  return (
    <button className={btnClass} disabled={isLoading} {...props}>
      {isLoading ? (
        <Loader2 className={styles.spinner} size={20} />
      ) : (
        <>
          {Icon && <Icon className={styles.icon} size={20} />}
          {children}
        </>
      )}
    </button>
  );
};
