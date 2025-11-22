import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  "aria-label"?: string;
  "aria-pressed"?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className, "aria-label": ariaLabel, "aria-pressed": ariaPressed, type = "button" }) => {
  return (
    <button
      className={`${styles.button} ${className || ''}`}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      type={type}
    >
      {children}
    </button>
  );
};
