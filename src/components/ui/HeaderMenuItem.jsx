import React from 'react';

const HeaderMenuItem = ({
  text = 'Home',
  href = '#',
  isActive = false,
  onClick,
  className = '',
  ...props
}) => {
  const handleClick = (e) => {
    e?.preventDefault();
    if (onClick) onClick();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      role="menuitem"
      className={`header-menu-item ${isActive ? 'active' : ''} ${className}`}
      {...props}
    >
      {text}
    </a>
  );
};

export default HeaderMenuItem;