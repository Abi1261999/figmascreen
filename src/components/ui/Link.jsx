import React from 'react';

const Link = ({
  text = 'About me',
  href = '#',
  className = '',
  children,
  ...props
}) => {
  return (
    <a
      href={href}
      className={`nav-link ${className}`}
      {...props}
    >
      {children || text}
    </a>
  );
};

export default Link;