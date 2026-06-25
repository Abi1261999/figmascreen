import React, { useState } from 'react';

const HeaderSubMenuItem = ({
  text = 'Portfolio',
  href = '#',
  isActive = false,
  submenuItems = [],
  onClick,
  className = '',
  ...props
}) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleClick = (e) => {
    e?.preventDefault();
    setIsSubmenuOpen(!isSubmenuOpen);
    if (onClick) onClick();
  };

  return (
    <div className="header-submenu-wrapper" role="menuitem" aria-haspopup="true" aria-expanded={isSubmenuOpen}>
      <button
        onClick={handleClick}
        className={`header-submenu-trigger ${isActive ? 'active' : ''} ${className}`}
        {...props}
      >
        <span>{text}</span>
        <img
          src="/images/img_vector_deep_orange_600.svg"
          alt=""
          className={isSubmenuOpen ? 'rotated' : ''}
        />
      </button>
      {isSubmenuOpen && submenuItems?.length > 0 && (
        <ul role="menu" className="header-submenu-dropdown">
          {submenuItems?.map((item, index) => (
            <li key={index} role="menuitem">
              <a href={item?.href}>{item?.text}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HeaderSubMenuItem;