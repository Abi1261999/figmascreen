import React from 'react';

const HeaderMenu = ({
  orientation = 'horizontal',
  className = '',
  children,
  ...props
}) => {
  const menuClass = orientation === 'vertical' ? 'header-menu-vertical' : 'header-menu-horizontal';

  return (
    <nav
      className={`${menuClass} ${className}`}
      role="menubar"
      {...props}
    >
      {children}
    </nav>
  );
};

export default HeaderMenu;