import React, { useState } from 'react';
import Button from '../ui/Button';
import HeaderMenu from '../ui/HeaderMenu';
import HeaderMenuItem from '../ui/HeaderMenuItem';
import HeaderSubMenuItem from '../ui/HeaderSubMenuItem';

const Header = ({ className = '', ...props }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('Portfolio');

  const handleMenuItemClick = (itemName) => {
    setActiveMenuItem(itemName);
    setIsMobileMenuOpen(false);
  };

  const portfolioSubmenuItems = [
    { text: 'All Projects', href: '#all-projects' },
    { text: 'Web Design', href: '#web-design' },
    { text: 'Branding', href: '#branding' },
  ];

  return (
    <header className={`site-header ${className}`} {...props}>
      <div className="container">
        <div className="header-inner">
          {/* Hamburger Menu Icon (Mobile only) */}
          <button
            className="header-hamburger"
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="header-desktop-nav">
            <HeaderMenu orientation="horizontal">
              <HeaderMenuItem text="Home" href="#home" isActive={activeMenuItem === 'Home'} onClick={() => handleMenuItemClick('Home')} />
              <HeaderSubMenuItem text="Portfolio" href="#portfolio" isActive={activeMenuItem === 'Portfolio'} submenuItems={portfolioSubmenuItems} onClick={() => handleMenuItemClick('Portfolio')} />
              <HeaderMenuItem text="About" href="#about" isActive={activeMenuItem === 'About'} onClick={() => handleMenuItemClick('About')} />
              <HeaderMenuItem text="Projects" href="#projects" isActive={activeMenuItem === 'Projects'} onClick={() => handleMenuItemClick('Projects')} />
              <HeaderMenuItem text="Service" href="#service" isActive={activeMenuItem === 'Service'} onClick={() => handleMenuItemClick('Service')} />
            </HeaderMenu>

            <Button
              text="Let's Work"
              fill_background_color="bg-text-primary"
              text_color="text-white"
              text_font_size="text-base"
              border_border="border"
              onClick={() => {}}
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`header-mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <HeaderMenu orientation="vertical">
            <HeaderMenuItem text="Home" href="#home" isActive={activeMenuItem === 'Home'} onClick={() => handleMenuItemClick('Home')} />
            <HeaderSubMenuItem text="Portfolio" href="#portfolio" isActive={activeMenuItem === 'Portfolio'} submenuItems={portfolioSubmenuItems} onClick={() => handleMenuItemClick('Portfolio')} />
            <HeaderMenuItem text="About" href="#about" isActive={activeMenuItem === 'About'} onClick={() => handleMenuItemClick('About')} />
            <HeaderMenuItem text="Projects" href="#projects" isActive={activeMenuItem === 'Projects'} onClick={() => handleMenuItemClick('Projects')} />
            <HeaderMenuItem text="Service" href="#service" isActive={activeMenuItem === 'Service'} onClick={() => handleMenuItemClick('Service')} />
          </HeaderMenu>
          <div style={{ marginTop: '16px' }}>
            <Button text="Let's Work" fill_background_color="bg-text-primary" text_color="text-white" text_font_size="text-base" border_border="border" className="btn-full" onClick={() => {}} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;