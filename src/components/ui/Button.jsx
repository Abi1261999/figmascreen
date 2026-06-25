import React from 'react';

const Button = ({
  text = "Hire me",
  variant = "primary",
  disabled = false,
  className = "",
  children,
  onClick,
  type = "button",
  fill_background_color,
  text_color,
  text_font_size,
  border_border,
  ...props
}) => {
  const handleClick = (event) => {
    if (disabled) return;
    if (typeof onClick === 'function') onClick(event);
  };

  let btnClass = 'btn';
  if (variant === 'outline' || (border_border && border_border !== 'none' && border_border !== '')) {
    btnClass += ' btn-outline';
  } else if (fill_background_color === 'bg-text-primary' || fill_background_color === 'bg-background-dark') {
    btnClass += ' btn-dark';
  } else if (fill_background_color === 'bg-secondary-background') {
    btnClass += ' btn-yellow';
  }

  if (className && className?.includes('w-full')) {
    btnClass += ' btn-full';
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={`${btnClass} ${className || ''}`}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;