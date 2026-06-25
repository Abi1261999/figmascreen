import React from 'react';

const IconButton = ({
  src,
  alt = 'icon',
  width = 190,
  height = 186,
  onClick,
  className = '',
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`icon-btn ${className}`}
      {...props}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </button>
  );
};

export default IconButton;