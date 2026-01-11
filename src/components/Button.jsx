import React from 'react';
import './Button.scss';

const Button = ({ children, onClick, type = 'button', className = '', ...props }) => {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
