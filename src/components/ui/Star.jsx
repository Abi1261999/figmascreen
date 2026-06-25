import React from 'react';

const Star = ({
  fill_background_color = 'bg-background-blue-dark',
  className = '',
  ...props
}) => {
  const colorMap = {
    'bg-background-blue-dark': 'star-fill-blue-dark',
    'bg-background-blue-medium': 'star-fill-blue-medium',
    'bg-background-blue-light': 'star-fill-blue-light',
    'bg-primary-background': 'star-fill-accent',
  };

  const fillClass = colorMap?.[fill_background_color] || 'star-fill-blue-dark';

  return (
    <svg
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`star-svg ${className}`}
      {...props}
    >
      <path
        d="M29 0L32.5 25.5L58 29L32.5 32.5L29 58L25.5 32.5L0 29L25.5 25.5L29 0Z"
        className={fillClass}
      />
    </svg>
  );
};

export default Star;