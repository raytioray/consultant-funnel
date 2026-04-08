import React from 'react';
import styles from './Input.module.css';

export const Input = ({ label, error, icon: Icon, className = '', ...props }) => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.inputContainer}>
                {Icon && <Icon className={styles.icon} size={20} />}
                <input
                    className={`
            ${styles.input} 
            ${Icon ? styles.withIcon : ''} 
            ${error ? styles.errorInput : ''}
          `}
                    {...props}
                />
            </div>
            {error && <span className={styles.errorText}>{error}</span>}
        </div>
    );
};
