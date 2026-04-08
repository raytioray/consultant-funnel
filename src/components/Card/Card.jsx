import React from 'react';
import styles from './Card.module.css';

export const Card = ({ children, className = '', hover = false, glass = true }) => {
    const cardClass = `
    ${glass ? styles.glassCard : styles.solidCard}
    ${hover ? styles.hoverable : ''}
    ${className}
  `.trim();

    return (
        <div className={cardClass}>
            {children}
        </div>
    );
};
