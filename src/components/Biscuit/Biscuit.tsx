import React from 'react';
import './Biscuit.css';

export interface BiscuitProps {
  /**
   * The content to be wrapped
   */
  children: React.ReactNode;
  /**
   * Optional variant for different styles
   */
  variant?: 'plain' | 'chocolate' | 'sugar';
  /**
   * Optional size
   */
  size?: 'small' | 'medium' | 'large';
}

export const Biscuit: React.FC<BiscuitProps> = ({
  children,
  variant = 'plain',
  size = 'medium',
}) => {
  return (
    <div className={`biscuit biscuit--${variant} biscuit--${size}`}>
      {children}
    </div>
  );
}; 